
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const posts: Record<string, any> = {
    'ai-powered-recruitment': {
      title: 'The Future of AI-Powered Recruitment',
      date: 'December 8, 2024',
      readTime: '5 min read',
      category: 'AI & Technology',
      content: `
        The recruitment landscape is undergoing a fundamental transformation. Traditional methods of finding and evaluating talent are giving way to sophisticated AI-powered systems that can understand context, predict fit, and discover hidden gems in the talent pool.

        ## The Problem with Traditional Recruitment

        Traditional recruitment relies heavily on keyword matching and manual screening. This approach has several limitations:

        - **Time-consuming manual processes** that slow down hiring
        - **Limited search capabilities** that miss qualified candidates
        - **Human bias** that affects decision-making
        - **Inconsistent evaluation criteria** across different recruiters

        ## How AI Changes Everything

        AI-powered recruitment addresses these challenges by:

        ### 1. Natural Language Understanding
        Modern AI can interpret job requirements and candidate profiles in natural language, understanding context and nuance that keyword matching misses.

        ### 2. Predictive Analytics
        Machine learning models can predict candidate success based on historical data and patterns, helping identify the best fits.

        ### 3. Bias Reduction
        AI systems can be designed to minimize unconscious bias by focusing on relevant qualifications rather than demographic factors.

        ### 4. Continuous Learning
        AI systems improve over time, learning from successful hires and refining their matching algorithms.

        ## The Clura.ai Advantage

        At Clura.ai, we have built our AI to understand the nuances of professional relationships and career progression. Our system does not just match keywords – it understands intent, context, and potential.

        ## Looking Forward

        The future of recruitment is collaborative, where AI handles the heavy lifting of search and initial screening, while humans focus on relationship building and final decision-making. This partnership between human insight and artificial intelligence represents the next evolution in talent acquisition.
      `
    },
    'natural-language-search': {
      title: 'Why Natural Language Search is Revolutionary',
      date: 'December 5, 2024',
      readTime: '4 min read',
      category: 'Product',
      content: `
        Search has evolved from simple keyword matching to sophisticated natural language understanding. This transformation is particularly impactful in people search, where the nuances of human experience and expertise are difficult to capture in traditional search terms.

        ## The Complexity of People Search

        Finding the right person for a role or project involves understanding:

        - **Technical skills and experience levels**
        - **Cultural fit and soft skills**
        - **Career trajectory and aspirations**
        - **Industry context and domain expertise**

        Traditional Boolean search requires users to anticipate all possible ways someone might describe their experience, leading to complex queries that often miss qualified candidates.

        ## Enter Natural Language Search

        Natural language search allows users to describe what they are looking for in plain English:

        Instead of: (Python OR "machine learning" OR ML) AND (senior OR lead OR principal) AND startup

        You can simply say: "Senior Python developer with machine learning experience at a startup"

        ## The Technology Behind It

        Our natural language processing system:

        ### 1. Understands Intent
        The AI interprets what you are really looking for, not just the words you use.

        ### 2. Expands Context
        It automatically considers related terms, skills, and experiences.

        ### 3. Handles Ambiguity
        The system can disambiguate terms based on context (e.g., "Ruby" the programming language vs. "Ruby" the gemstone).

        ### 4. Learns from Feedback
        Every search helps improve the system understanding.

        ## Real-World Impact

        Companies using natural language search report:
        - **50% faster time-to-hire**
        - **3x more qualified candidates** in initial screenings
        - **Reduced dependency** on specialized recruiters

        The future of search is conversational, intuitive, and powerful – exactly what people search should be.
      `
    },
    'building-diverse-teams': {
      title: 'Building More Diverse Teams with AI',
      date: 'December 2, 2024',
      readTime: '6 min read',
      category: 'Diversity & Inclusion',
      content: `
        Diversity and inclusion in hiring is not just a moral imperative – it is a business advantage. Companies with diverse teams consistently outperform their peers in innovation, decision-making, and financial performance. However, traditional recruitment methods often perpetuate existing biases. AI offers a path toward more equitable hiring practices.

        ## The Bias Problem in Traditional Hiring

        Unconscious bias affects every stage of the hiring process:

        - **Resume screening** favors familiar names and backgrounds
        - **Network-based hiring** reinforces existing demographics
        - **Interview processes** can favor similar communication styles
        - **Reference checks** may reflect historical inequities

        ## How AI Can Help

        When properly designed and implemented, AI can significantly reduce bias:

        ### 1. Blind Resume Screening
        AI can evaluate qualifications without seeing names, photos, or other potentially biasing information.

        ### 2. Expanded Candidate Pools
        AI can discover qualified candidates from non-traditional backgrounds who might be overlooked by human recruiters.

        ### 3. Consistent Evaluation Criteria
        AI applies the same standards to all candidates, reducing the variability that can lead to biased decisions.

        ### 4. Data-Driven Insights
        AI can identify patterns in hiring data that reveal potential bias in current processes.

        ## Our Approach at Clura.ai

        We have implemented several measures to promote diversity:

        - **Bias testing** of our algorithms across different demographic groups
        - **Diverse training data** that represents a wide range of backgrounds
        - **Transparency features** that explain why certain candidates are recommended
        - **Continuous monitoring** for disparate impact

        ## Best Practices for AI-Assisted Diverse Hiring

        ### 1. Set Diversity Goals
        Establish clear, measurable diversity objectives for your hiring process.

        ### 2. Audit Your Data
        Regularly review your hiring data for bias and disparate impact.

        ### 3. Train Your Team
        Ensure hiring managers understand both the capabilities and limitations of AI tools.

        ### 4. Maintain Human Oversight
        AI should augment, not replace, human judgment in hiring decisions.

        ## Measuring Success

        Organizations implementing AI-assisted diverse hiring should track:
        - **Demographic representation** at each stage of the hiring process
        - **Time-to-hire** across different candidate groups
        - **Retention and promotion rates** by demographic
        - **Team performance metrics** correlated with diversity

        ## The Future of Inclusive Hiring

        AI represents a powerful tool in the fight against hiring bias, but it is not a silver bullet. Success requires thoughtful implementation, continuous monitoring, and a genuine commitment to diversity and inclusion.

        The goal is not to eliminate human judgment from hiring – it is to ensure that technology amplifies our best intentions while minimizing our unconscious biases.
      `
    },
    'data-privacy-people-search': {
      title: 'Data Privacy in People Search: Our Approach',
      date: 'November 28, 2024',
      readTime: '7 min read',
      category: 'Privacy & Security',
      content: `
        In an era where personal data is increasingly valuable, building a people search engine requires navigating complex privacy considerations. At Clura.ai, we believe that powerful search capabilities and strong privacy protections are not mutually exclusive – they are both essential.

        ## The Privacy Challenge

        People search engines face unique privacy challenges:

        - **Public vs. Private Information** – Determining what is appropriate to surface
        - **Consent and Control** – Ensuring people have agency over their information
        - **Data Accuracy** – Preventing the spread of outdated or incorrect information
        - **Purpose Limitation** – Ensuring data is used only for legitimate purposes

        ## Our Privacy Principles

        ### 1. Public Information Only
        We only index information that individuals have chosen to make publicly available on professional platforms, company websites, and other public sources.

        ### 2. Respect for Opt-Outs
        We provide clear mechanisms for individuals to opt out of our search results and honor all such requests promptly.

        ### 3. Data Minimization
        We collect and store only the information necessary to provide effective search results.

        ### 4. Purpose Limitation
        Our platform is designed exclusively for professional networking and recruitment purposes.

        ## Technical Safeguards

        ### Encryption Everywhere
        All data is encrypted both in transit and at rest using industry-standard protocols.

        ### Access Controls
        Strict access controls ensure that only authorized personnel can access sensitive data.

        ### Audit Trails
        Comprehensive logging allows us to track all data access and usage.

        ### Regular Security Reviews
        Third-party security audits ensure our protections remain effective.

        ## User Controls

        We provide users with comprehensive controls over their search experience:

        ### For Search Users
        - **Search history privacy** – Searches are not stored or used for profiling
        - **Anonymous searching** – No requirement to create accounts for basic searches
        - **Export controls** – Limitations on bulk data export to prevent misuse

        ### For Individuals in Results
        - **Profile claims** – Ability to claim and correct your profile
        - **Opt-out mechanisms** – Simple process to remove yourself from results
        - **Contact preferences** – Control how others can reach you

        ## Legal Compliance

        Our privacy practices comply with major privacy regulations:

        - **GDPR** compliance for European users
        - **CCPA** compliance for California residents
        - **SOC 2 Type II** certification for security controls
        - **Regular legal reviews** to ensure ongoing compliance

        ## Transparency Report

        We publish regular transparency reports detailing:
        - Number of opt-out requests received and processed
        - Data breach incidents (if any)
        - Law enforcement requests
        - Changes to our privacy practices

        ## The Balance We Strike

        Effective people search requires comprehensive data, but we believe this can be achieved while respecting individual privacy. Our approach focuses on:

        ### Professional Context
        We focus on professional information that individuals have chosen to share publicly.

        ### User Control
        We provide robust controls for both searchers and individuals in results.

        ### Transparency
        We are open about our data practices and privacy protections.

        ### Continuous Improvement
        We regularly review and enhance our privacy protections as technology and regulations evolve.

        ## Looking Forward

        Privacy technology continues to evolve, and we are committed to staying at the forefront. We are exploring:

        - **Differential privacy** techniques to protect individual information while enabling useful insights
        - **Federated learning** approaches that could enable search without centralizing data
        - **Zero-knowledge** architectures that could provide search capabilities without exposing underlying data

        ## Our Commitment

        Privacy is not just a compliance requirement for us – it is a core value. We believe that trust is earned through transparency, consistency, and a genuine commitment to protecting the people we serve.

        If you have questions about our privacy practices or want to learn more about how we protect your information, please do not hesitate to reach out to our privacy team at privacy@clura.ai.
      `
    }
  };

  const post = posts[slug || ''];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Link to="/blog" className="text-clura-400 hover:text-clura-300">
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        <article className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12">
              <Link to="/blog" className="text-clura-400 hover:text-clura-300 mb-8 inline-block">
                ← Back to Blog
              </Link>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-clura-500/10 border border-clura-500/20 rounded-full text-clura-400 text-sm font-medium">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6">
                {post.title}
              </h1>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Content */}
            <div className="glass-card p-8 md:p-12">
              <div className="prose prose-lg prose-invert max-w-none">
                {post.content.split('\n').map((paragraph: string, index: number) => {
                  if (paragraph.trim() === '') return null;
                  
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-semibold text-foreground mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  
                  if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="text-muted-foreground mb-2">
                        {paragraph.replace('- ', '')}
                      </li>
                    );
                  }
                  
                  return (
                    <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-foreground mb-8">More from our blog</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(posts)
                  .filter(([key]) => key !== slug)
                  .slice(0, 2)
                  .map(([key, relatedPost]) => (
                    <Link
                      key={key}
                      to={`/blog/${key}`}
                      className="glass-card p-6 group hover:bg-white/10 transition-all duration-300"
                    >
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-clura-400 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{relatedPost.date}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
