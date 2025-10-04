import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { MessageCircle, Trash2 } from "lucide-react";
import { z } from "zod";

const commentSchema = z.object({
  content: z.string().min(10, "Comentário deve ter pelo menos 10 caracteres").max(500, "Comentário deve ter no máximo 500 caracteres"),
});

interface PropertyCommentsProps {
  propertyId: string;
}

const PropertyComments = ({ propertyId }: PropertyCommentsProps) => {
  const { user } = useAuth();
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const queryClient = useQueryClient();

  const { data: comments, isLoading } = useQuery({
    queryKey: ['comments', propertyId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('property_comments')
        .select(`
          *,
          profiles:user_id (
            full_name,
            avatar_url,
            user_type
          )
        `)
        .eq('property_id', propertyId)
        .is('parent_comment_id', null)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!user) {
      toast.error("Faça login para comentar");
      return;
    }

    try {
      commentSchema.parse({ content: newComment });

      setIsSubmitting(true);

      const { error: insertError } = await supabase
        .from('property_comments')
        .insert({
          property_id: propertyId,
          user_id: user.id,
          content: newComment,
        });

      if (insertError) throw insertError;

      setNewComment("");
      queryClient.invalidateQueries({ queryKey: ['comments', propertyId] });
      toast.success("Comentário publicado!");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else {
        toast.error("Erro ao publicar comentário");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (commentId: string) => {
    try {
      const { error } = await supabase
        .from('property_comments')
        .delete()
        .eq('id', commentId);

      if (error) throw error;

      queryClient.invalidateQueries({ queryKey: ['comments', propertyId] });
      toast.success("Comentário removido");
    } catch (error) {
      toast.error("Erro ao remover comentário");
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-bold">
            Comentários {comments && comments.length > 0 && `(${comments.length})`}
          </h3>
        </div>

        {user ? (
          <form onSubmit={handleSubmit} className="mb-6">
            <Textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Escreva um comentário sobre este imóvel..."
              className="mb-2"
              rows={3}
            />
            {error && <p className="text-sm text-destructive mb-2">{error}</p>}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Publicando..." : "Publicar comentário"}
            </Button>
          </form>
        ) : (
          <p className="text-muted-foreground mb-6 text-center py-4 bg-muted/30 rounded-lg">
            Faça login para comentar
          </p>
        )}

        <div className="space-y-4">
          {isLoading ? (
            <p className="text-center text-muted-foreground">Carregando comentários...</p>
          ) : comments && comments.length > 0 ? (
            comments.map((comment: any) => (
              <div key={comment.id} className="flex gap-3 p-4 rounded-lg bg-muted/30">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={comment.profiles?.avatar_url} />
                  <AvatarFallback>
                    {comment.profiles?.full_name?.charAt(0) || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{comment.profiles?.full_name || 'Utilizador'}</span>
                      {comment.profiles?.user_type === 'advertiser' && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">
                          Anunciante
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(comment.created_at), { 
                          addSuffix: true, 
                          locale: ptBR 
                        })}
                      </span>
                      {user && user.id === comment.user_id && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => handleDelete(comment.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">{comment.content}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground py-8">
              Seja o primeiro a comentar este imóvel
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyComments;
