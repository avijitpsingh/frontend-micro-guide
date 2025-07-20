import { useParams, Navigate } from "react-router-dom";
import { getBlogPost } from "@/data/blogs";
import BlogPost from "@/components/BlogPost";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPost(id);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="p-8 text-center space-y-4">
            <h1 className="text-2xl font-bold text-muted-foreground">Article Not Found</h1>
            <p className="text-muted-foreground">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Back Button */}
      <div className="sticky top-4 z-10 container mx-auto px-4">
        <Button 
          asChild 
          variant="secondary" 
          size="sm" 
          className="shadow-lg backdrop-blur-sm bg-background/80 hover:bg-background/90"
        >
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
      
      {/* Blog Content */}
      <BlogPost post={post} />
    </div>
  );
};

export default BlogPostPage;