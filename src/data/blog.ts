export interface BlogPost {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  excerpt: string;
  href: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  likes: number;
  comments: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'They are here to PRove IT',
    category: 'Web Development',
    categoryColor: '#2563EB',
    excerpt: 'PRove IT catalysts is an honour-winning web development...',
    href: '/blog/they-are-here-to-prove-it',
    image: '/images/blog1.jpg',
    author: 'Admin',
    date: 'Jun 10, 2026',
    readTime: '4 min read',
    likes: 90,
    comments: 120,
  },
  {
    id: '2',
    title: 'The App Development...',
    category: 'App Development',
    categoryColor: '#0F766E',
    excerpt: 'Reasons why Prove IT catalysts are one of the top names of the...',
    href: '/blog/app-development-market',
    image: '/images/blog2.jpg',
    author: 'Admin',
    date: 'Jun 8, 2026',
    readTime: '5 min read',
    likes: 134,
    comments: 154,
  },
  {
    id: '3',
    title: 'The best medical billing...',
    category: 'Software',
    categoryColor: '#0F766E',
    excerpt: 'Our skilled team will provide the complete solution...',
    href: '/blog/best-medical-billing-services',
    image: '/images/blog3.jpg',
    author: 'Admin',
    date: 'Jun 5, 2026',
    readTime: '3 min read',
    likes: 190,
    comments: 220,
  },
  {
    id: '4',
    title: 'Top 5 website develop...',
    category: 'Web Development',
    categoryColor: '#1E3A8A',
    excerpt: 'We have professional Web Designer & Developer team.We are expert in...',
    href: '/blog/top-5-website-development',
    image: '/images/blog1.jpg',
    author: 'Admin',
    date: 'Jun 1, 2026',
    readTime: '4 min read',
    likes: 10,
    comments: 33,
  },
  {
    id: '5',
    title: 'Get the Best Medical ...',
    category: 'Software',
    categoryColor: '#334155',
    excerpt: 'For healthcare service providers who offer medical services to...',
    href: '/blog/get-best-medical-services',
    image: '/images/blog3.jpg',
    author: 'Admin',
    date: 'May 28, 2026',
    readTime: '5 min read',
    likes: 77,
    comments: 32,
  },
  {
    id: '6',
    title: 'Get the Best Voice ...',
    category: 'Support Services',
    categoryColor: '#475569',
    excerpt: 'This is the main advantage that an organization can get by outsourcing...',
    href: '/blog/best-voice-support',
    image: '/images/blog2.jpg',
    author: 'Admin',
    date: 'May 22, 2026',
    readTime: '4 min read',
    likes: 98,
    comments: 75,
  },
];
