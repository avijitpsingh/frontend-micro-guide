export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  author: {
    name: string;
    initials: string;
    title: string;
    linkedin: string;
  };
  publishDate: string;
  readTime: string;
  difficulty: string;
  tags: string[];
  content: 'micro-frontend-guide'; // Reference to content type
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'micro-frontend-architecture-guide',
    title: 'Micro Frontend Architecture',
    subtitle: 'A comprehensive guide to modern frontend architecture patterns and the evolution from monolithic to micro frontend systems',
    description: 'Comprehensive guide to micro frontend architecture, covering implementation strategies, Module Federation, best practices, and migration patterns.',
    author: {
      name: 'Avijit Pratap Singh',
      initials: 'APS',
      title: 'Architect | Engineering Leader',
      linkedin: 'https://www.linkedin.com/in/avijit-pratap-singh/'
    },
    publishDate: '2024-01-15',
    readTime: '15 min read',
    difficulty: 'Advanced',
    tags: ['micro frontend', 'module federation', 'webpack', 'frontend architecture', 'javascript', 'react'],
    content: 'micro-frontend-guide',
    featured: true
  }
  // Add more blog posts here as you create them
];

export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};