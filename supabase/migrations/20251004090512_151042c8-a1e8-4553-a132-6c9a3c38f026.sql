-- Fix security warnings by recreating functions with search_path set properly

-- Recreate handle_new_user function with search_path
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
  
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$;

-- Recreate update_property_rating function with search_path
CREATE OR REPLACE FUNCTION public.update_property_rating()
RETURNS TRIGGER
LANGUAGE PLPGSQL
SECURITY DEFINER
SET search_path = public
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

-- Recreate update_advertiser_rating function with search_path
CREATE OR REPLACE FUNCTION public.update_advertiser_rating()
RETURNS TRIGGER
LANGUAGE PLPGSQL
SECURITY DEFINER
SET search_path = public
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

-- Recreate create_activity_feed function with search_path
CREATE OR REPLACE FUNCTION public.create_activity_feed()
RETURNS TRIGGER
LANGUAGE PLPGSQL
SECURITY DEFINER
SET search_path = public
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

-- Recreate update_updated_at_column function with search_path
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE PLPGSQL
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;