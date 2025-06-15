
export interface DummyProfile {
  id: number;
  fullName: string;
  role: string;
  company: string;
  location: string;
  description: string;
  background: string[];
  image: string;
  relevance: number;
  linkedin: string;
}

export const dummyProfiles: DummyProfile[] = [
  {
    id: 1,
    fullName: "Sarah Chen",
    role: "AI/ML Engineer & Co-Founder",
    company: "NeuralVision AI",
    location: "San Francisco, CA, USA",
    description: "Building computer vision solutions for autonomous vehicles using deep learning.",
    background: [
      "PhD in Computer Science from Stanford",
      "Former Tesla Autopilot Team Lead",
      "5+ years in autonomous driving AI",
      "Published 15+ research papers in CVPR"
    ],
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=128&q=80&facepad=2",
    relevance: 1,
    linkedin: "#"
  },
  {
    id: 2,
    fullName: "Marcus Rodriguez",
    role: "CTO & Founder",
    company: "DataMind Analytics",
    location: "Austin, TX, USA",
    description: "Developing NLP-powered business intelligence platform for enterprise clients.",
    background: [
      "MS in AI from MIT",
      "Ex-Google AI Research Engineer",
      "Specialized in transformer architectures",
      "Led team of 20+ engineers"
    ],
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=facearea&w=128&q=80&facepad=2",
    relevance: 2,
    linkedin: "#"
  },
  {
    id: 3,
    fullName: "Priya Sharma",
    role: "AI Research Engineer",
    company: "HealthTech AI",
    location: "Boston, MA, USA",
    description: "Creating AI diagnostic tools for early disease detection using medical imaging.",
    background: [
      "PhD in Biomedical Engineering from Harvard",
      "Former Microsoft Research Scientist",
      "Expert in medical AI applications",
      "10+ patents in healthcare AI"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=128&q=80&facepad=2",
    relevance: 3,
    linkedin: "#"
  },
  {
    id: 4,
    fullName: "David Kim",
    role: "Machine Learning Engineer",
    company: "FinanceAI Solutions",
    location: "New York, NY, USA",
    description: "Building algorithmic trading systems and fraud detection AI for financial institutions.",
    background: [
      "MS in Computer Science from Carnegie Mellon",
      "Ex-Goldman Sachs Quantitative Analyst",
      "8+ years in financial AI",
      "Specialized in risk assessment algorithms"
    ],
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?auto=format&fit=facearea&w=128&q=80&facepad=2",
    relevance: 4,
    linkedin: "#"
  },
  {
    id: 5,
    fullName: "Emma Thompson",
    role: "AI Product Manager & Co-Founder",
    company: "EduTech Intelligence",
    location: "Seattle, WA, USA",
    description: "Developing personalized learning AI platforms for K-12 education.",
    background: [
      "MBA from Wharton + MS in AI",
      "Former Amazon Alexa Product Manager",
      "Expert in conversational AI",
      "Led product launches for 50M+ users"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=128&q=80&facepad=2",
    relevance: 5,
    linkedin: "#"
  },
  {
    id: 6,
    fullName: "Ahmed Hassan",
    role: "Deep Learning Engineer",
    company: "AgriTech AI",
    location: "Denver, CO, USA",
    description: "Creating precision agriculture solutions using satellite imagery and IoT sensors.",
    background: [
      "PhD in Agricultural Engineering + AI focus",
      "Former John Deere AI Research Lead",
      "Expert in computer vision for agriculture",
      "20+ publications in agricultural AI"
    ],
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=facearea&w=128&q=80&facepad=2",
    relevance: 6,
    linkedin: "#"
  },
  {
    id: 7,
    fullName: "Lisa Zhang",
    role: "AI Engineer & Startup Advisor",
    company: "RoboticsAI Labs",
    location: "Los Angeles, CA, USA",
    description: "Building autonomous robotics systems for warehouse automation.",
    background: [
      "MS in Robotics from UC Berkeley",
      "Ex-Boston Dynamics Senior Engineer",
      "Specialized in reinforcement learning",
      "12+ years in robotics AI"
    ],
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=128&q=80&facepad=2",
    relevance: 7,
    linkedin: "#"
  },
  {
    id: 8,
    fullName: "Carlos Mendoza",
    role: "AI Research Scientist",
    company: "ClimateAI Solutions",
    location: "Portland, OR, USA",
    description: "Developing climate prediction models and carbon footprint optimization AI.",
    background: [
      "PhD in Environmental Science + AI",
      "Former NASA Climate Modeling Researcher",
      "Expert in time series forecasting",
      "Published 25+ papers in climate AI"
    ],
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=facearea&w=128&q=80&facepad=2",
    relevance: 8,
    linkedin: "#"
  },
  {
    id: 9,
    fullName: "Rachel Green",
    role: "NLP Engineer & Founder",
    company: "LegalAI Tech",
    location: "Chicago, IL, USA",
    description: "Building AI-powered legal document analysis and contract review systems.",
    background: [
      "JD from Harvard Law + MS in NLP",
      "Former IBM Watson Legal Team Lead",
      "Expert in legal text processing",
      "6+ years in legal technology"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=128&q=80&facepad=2",
    relevance: 9,
    linkedin: "#"
  },
  {
    id: 10,
    fullName: "Kevin Liu",
    role: "AI Engineer",
    company: "GameAI Studios",
    location: "Vancouver, BC, Canada",
    description: "Creating intelligent NPCs and procedural content generation for video games.",
    background: [
      "MS in Game Development + AI focus",
      "Former Ubisoft AI Programmer",
      "Expert in game AI and procedural generation",
      "8+ years in gaming industry"
    ],
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?auto=format&fit=facearea&w=128&q=80&facepad=2",
    relevance: 10,
    linkedin: "#"
  }
];
