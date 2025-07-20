import { blogPosts, getFeaturedPosts } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const BlogIndex = () => {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = blogPosts.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary to-purple-600 text-primary-foreground">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              Tech Blog
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Frontend Architecture & Engineering
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Deep dives into modern frontend architecture, system design patterns, and engineering best practices
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/80">
              <span>by Avijit Pratap Singh</span>
              <span>•</span>
              <span>Architect & Engineering Leader</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold">Featured Articles</h2>
              <Badge variant="outline">Editor's Pick</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        <Separator className="my-12" />

        {/* All Posts */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">All Articles</h2>
            <Badge variant="secondary">
              {blogPosts.length} {blogPosts.length === 1 ? 'Article' : 'Articles'}
            </Badge>
          </div>
          
          {blogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <CardContent className="space-y-4">
                <h3 className="text-xl font-semibold text-muted-foreground">No articles yet</h3>
                <p className="text-muted-foreground">
                  Check back soon for insightful articles on frontend architecture and engineering.
                </p>
              </CardContent>
            </Card>
          )}
        </section>

        {/* About Section */}
        <Separator className="my-16" />
        
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About This Blog</h2>
          <div className="bg-muted/50 rounded-lg p-8 border-l-4 border-primary">
            <p className="text-lg leading-relaxed mb-4">
              Welcome to my technical blog where I share insights on frontend architecture, 
              system design, and engineering best practices. With years of experience in 
              building scalable web applications, I aim to provide practical guidance for 
              modern development challenges.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>Topics: Frontend Architecture</span>
              <span>•</span>
              <span>System Design</span>
              <span>•</span>
              <span>Engineering Leadership</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogIndex;