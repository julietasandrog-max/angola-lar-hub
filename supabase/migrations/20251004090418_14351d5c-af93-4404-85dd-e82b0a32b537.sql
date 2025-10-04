-- Create enum types
CREATE TYPE public.user_type AS ENUM ('client', 'advertiser', 'admin');
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
CREATE TYPE public.property_type AS ENUM ('apartamento', 'casa', 'vivenda', 'terreno');
CREATE TYPE public.listing_type AS ENUM ('sale', 'rent');
CREATE TYPE public.property_status AS ENUM ('active', 'pending', 'sold', 'rented');
CREATE TYPE public.reaction_type AS ENUM ('like', 'love', 'interested', 'sad');
CREATE TYPE public.subscription_status AS ENUM ('active', 'cancelled', 'expired');
CREATE TYPE public.activity_type AS ENUM ('new_property', 'liked_property', 'commented', 'rated');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  phone TEXT,
  bio TEXT,
  user_type user_type DEFAULT 'client',
  is_verified BOOLEAN DEFAULT FALSE,
  rating_average NUMERIC(3,2) DEFAULT 0,
  rating_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE(user_id, role)
);

-- Create properties table
CREATE TABLE public.properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  price NUMERIC NOT NULL,
  location TEXT NOT NULL,
  bedrooms INTEGER DEFAULT 0,
  bathrooms INTEGER DEFAULT 0,
  area NUMERIC,
  property_type property_type NOT NULL,
  listing_type listing_type NOT NULL,
  has_garage BOOLEAN DEFAULT FALSE,
  is_featured BOOLEAN DEFAULT FALSE,
  is_verified BOOLEAN DEFAULT FALSE,
  status property_status DEFAULT 'pending',
  amenities JSONB DEFAULT '[]'::jsonb,
  images JSONB DEFAULT '[]'::jsonb,
  views_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create property_likes table
CREATE TABLE public.property_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  reaction_type reaction_type NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(property_id, user_id)
);

-- Create property_comments table
CREATE TABLE public.property_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  parent_comment_id UUID REFERENCES public.property_comments(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create property_ratings table
CREATE TABLE public.property_ratings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(property_id, user_id)
);

-- Create advertiser_ratings table
CREATE TABLE public.advertiser_ratings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  advertiser_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  reviewer_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create favorites table
CREATE TABLE public.favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, property_id)
);

-- Create activity_feed table
CREATE TABLE public.activity_feed (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  activity_type activity_type NOT NULL,
  property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE,
  content JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.property_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.property_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.property_ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.advertiser_ratings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_feed ENABLE ROW LEVEL SECURITY;

-- Create security definer function for role checking
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS Policies for profiles
CREATE POLICY "Profiles are viewable by everyone"
  ON public.profiles FOR SELECT
  USING (TRUE);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- RLS Policies for user_roles
CREATE POLICY "User roles are viewable by everyone"
  ON public.user_roles FOR SELECT
  USING (TRUE);

CREATE POLICY "Only admins can manage roles"
  ON public.user_roles FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for properties
CREATE POLICY "Active properties are viewable by everyone"
  ON public.properties FOR SELECT
  USING (status = 'active' OR owner_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Authenticated users can create properties"
  ON public.properties FOR INSERT
  WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Owners can update own properties"
  ON public.properties FOR UPDATE
  USING (auth.uid() = owner_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Owners can delete own properties"
  ON public.properties FOR DELETE
  USING (auth.uid() = owner_id OR public.has_role(auth.uid(), 'admin'));

-- RLS Policies for property_likes
CREATE POLICY "Likes are viewable by everyone"
  ON public.property_likes FOR SELECT
  USING (TRUE);

CREATE POLICY "Authenticated users can manage own likes"
  ON public.property_likes FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for property_comments
CREATE POLICY "Comments are viewable by everyone"
  ON public.property_comments FOR SELECT
  USING (TRUE);

CREATE POLICY "Authenticated users can create comments"
  ON public.property_comments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own comments"
  ON public.property_comments FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own comments"
  ON public.property_comments FOR DELETE
  USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

-- RLS Policies for property_ratings
CREATE POLICY "Ratings are viewable by everyone"
  ON public.property_ratings FOR SELECT
  USING (TRUE);

CREATE POLICY "Authenticated users can manage own ratings"
  ON public.property_ratings FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for advertiser_ratings
CREATE POLICY "Advertiser ratings are viewable by everyone"
  ON public.advertiser_ratings FOR SELECT
  USING (TRUE);

CREATE POLICY "Authenticated users can rate advertisers"
  ON public.advertiser_ratings FOR INSERT
  WITH CHECK (auth.uid() = reviewer_id);

-- RLS Policies for favorites
CREATE POLICY "Users can view own favorites"
  ON public.favorites FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can manage own favorites"
  ON public.favorites FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for activity_feed
CREATE POLICY "Activity feed is viewable by everyone"
  ON public.activity_feed FOR SELECT
  USING (TRUE);

CREATE POLICY "System can create activity feed"
  ON public.activity_feed FOR INSERT
  WITH CHECK (TRUE);

-- Function to create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE PLPGSQL
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, user_type)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'Novo Utilizador'),
    COALESCE((NEW.raw_user_meta_data->>'user_type')::user_type, 'client')
  );
  
  -- Add default user role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Function to update property rating average
CREATE OR REPLACE FUNCTION public.update_property_rating()
RETURNS TRIGGER
LANGUAGE PLPGSQL
AS $$
BEGIN
  UPDATE public.properties
  SET 
    views_count = (
      SELECT COUNT(*)
      FROM public.property_ratings
      WHERE property_id = COALESCE(NEW.property_id, OLD.property_id)
    )
  WHERE id = COALESCE(NEW.property_id, OLD.property_id);
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- Trigger to update property ratings
CREATE TRIGGER on_property_rating_change
  AFTER INSERT OR DELETE ON public.property_ratings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_property_rating();

-- Function to update advertiser rating average
CREATE OR REPLACE FUNCTION public.update_advertiser_rating()
RETURNS TRIGGER
LANGUAGE PLPGSQL
AS $$
DECLARE
  avg_rating NUMERIC(3,2);
  rating_cnt INTEGER;
BEGIN
  SELECT AVG(rating)::NUMERIC(3,2), COUNT(*)
  INTO avg_rating, rating_cnt
  FROM public.advertiser_ratings
  WHERE advertiser_id = COALESCE(NEW.advertiser_id, OLD.advertiser_id);
  
  UPDATE public.profiles
  SET 
    rating_average = COALESCE(avg_rating, 0),
    rating_count = rating_cnt
  WHERE id = COALESCE(NEW.advertiser_id, OLD.advertiser_id);
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- Trigger to update advertiser ratings
CREATE TRIGGER on_advertiser_rating_change
  AFTER INSERT OR UPDATE OR DELETE ON public.advertiser_ratings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_advertiser_rating();

-- Function to create activity feed entries
CREATE OR REPLACE FUNCTION public.create_activity_feed()
RETURNS TRIGGER
LANGUAGE PLPGSQL
AS $$
BEGIN
  IF TG_TABLE_NAME = 'properties' AND TG_OP = 'INSERT' THEN
    INSERT INTO public.activity_feed (user_id, activity_type, property_id, content)
    VALUES (NEW.owner_id, 'new_property', NEW.id, jsonb_build_object('title', NEW.title, 'location', NEW.location));
  ELSIF TG_TABLE_NAME = 'property_likes' AND TG_OP = 'INSERT' THEN
    INSERT INTO public.activity_feed (user_id, activity_type, property_id, content)
    VALUES (NEW.user_id, 'liked_property', NEW.property_id, jsonb_build_object('reaction', NEW.reaction_type));
  ELSIF TG_TABLE_NAME = 'property_comments' AND TG_OP = 'INSERT' THEN
    INSERT INTO public.activity_feed (user_id, activity_type, property_id, content)
    VALUES (NEW.user_id, 'commented', NEW.property_id, jsonb_build_object('comment', LEFT(NEW.content, 100)));
  ELSIF TG_TABLE_NAME = 'property_ratings' AND TG_OP = 'INSERT' THEN
    INSERT INTO public.activity_feed (user_id, activity_type, property_id, content)
    VALUES (NEW.user_id, 'rated', NEW.property_id, jsonb_build_object('rating', NEW.rating));
  END IF;
  
  RETURN NEW;
END;
$$;

-- Triggers for activity feed
CREATE TRIGGER on_property_created
  AFTER INSERT ON public.properties
  FOR EACH ROW
  EXECUTE FUNCTION public.create_activity_feed();

CREATE TRIGGER on_property_liked
  AFTER INSERT ON public.property_likes
  FOR EACH ROW
  EXECUTE FUNCTION public.create_activity_feed();

CREATE TRIGGER on_property_commented
  AFTER INSERT ON public.property_comments
  FOR EACH ROW
  EXECUTE FUNCTION public.create_activity_feed();

CREATE TRIGGER on_property_rated
  AFTER INSERT ON public.property_ratings
  FOR EACH ROW
  EXECUTE FUNCTION public.create_activity_feed();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE PLPGSQL
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Triggers for updated_at
CREATE TRIGGER update_properties_updated_at
  BEFORE UPDATE ON public.properties
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_comments_updated_at
  BEFORE UPDATE ON public.property_comments
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();