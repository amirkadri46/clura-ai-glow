import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI-Powered People Search",
      excerpt: "Discover how artificial intelligence is transforming the way we find and connect with professionals across industries.",
      author: "Alex Chen",
      date: "2024-01-15",
      slug: "future-ai-people-search",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Better Professional Networks",
      excerpt: "Learn the strategies and tools that successful professionals use to build meaningful connections.",
      author: "Sarah Kim", 
      date: "2024-01-10",
      slug: "building-professional-networks",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Rise of Natural Language Search",
      excerpt: "How natural language processing is making search more intuitive and accessible for everyone.",
      author: "Michael Rodriguez",
      date: "2024-01-05",
      slug: "natural-language-search",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-light tracking-tight text-white mb-4">
                Our{' '}
                <span className="bg-gradient-to-r from-clura-400 to-clura-600 bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              <p className="text-xl text-gray-400">
                Insights, updates, and thought leadership from the Clura.ai team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className="rounded-2xl border p-6 transition-all duration-300 hover:scale-105 group"
                  style={{ 
                    backgroundColor: '#1A252F',
                    borderColor: '#4B6CB7',
                    boxShadow: '0 0 10px #89CFF0'
                  }}
                >
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-clura-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-clura-400 hover:text-clura-300 transition-colors flex items-center"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
