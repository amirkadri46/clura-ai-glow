
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Blog = () => {
  const posts = [
    {
      slug: 'ai-powered-recruitment',
      title: 'The Future of AI-Powered Recruitment',
      excerpt: 'How artificial intelligence is transforming the way we discover and connect with talent.',
      date: 'December 8, 2024',
      readTime: '5 min read',
      category: 'AI & Technology'
    },
    {
      slug: 'natural-language-search',
      title: 'Why Natural Language Search is Revolutionary',
      excerpt: 'Breaking down complex Boolean queries into simple, conversational search experiences.',
      date: 'December 5, 2024',
      readTime: '4 min read',
      category: 'Product'
    },
    {
      slug: 'building-diverse-teams',
      title: 'Building More Diverse Teams with AI',
      excerpt: 'How AI can help reduce bias and create more inclusive hiring practices.',
      date: 'December 2, 2024',
      readTime: '6 min read',
      category: 'Diversity & Inclusion'
    },
    {
      slug: 'data-privacy-people-search',
      title: 'Data Privacy in People Search: Our Approach',
      excerpt: 'Our commitment to protecting privacy while delivering powerful search capabilities.',
      date: 'November 28, 2024',
      readTime: '7 min read',
      category: 'Privacy & Security'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6">
              Clura.ai{' '}
              <span className="bg-gradient-to-r from-clura-400 to-clura-600 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Insights on AI, recruitment, and the future of people discovery.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="glass-card p-8 group hover:bg-white/10 transition-all duration-300 block"
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-clura-500/10 border border-clura-500/20 rounded-full text-clura-400 text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-clura-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-12 text-center">
              <h2 className="text-3xl font-light tracking-tight text-foreground mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-8">
                Get the latest insights on AI and recruitment delivered to your inbox.
              </p>
              <div className="flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-l-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-clura-400 focus:border-transparent"
                />
                <button className="neuro-button px-6 py-3 rounded-l-none text-foreground hover:text-clura-400 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
