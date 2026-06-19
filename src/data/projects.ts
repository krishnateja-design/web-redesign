export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Pankaj Trilochan',
    role: 'CEO',
    company: 'XYZ Infra Tech',
    text: 'Working with the PRove IT Catalysts development team has been a real pleasure. They are thorough, hardworking, and completely devoted to the goals of any project they take on.',
    avatar: '/images/testimonials/01.jpg',
    rating: 5,
  },
  {
    id: '2',
    name: 'Jasmita Das',
    role: 'CEO',
    company: 'betaQsolutions',
    text: 'Your team has been a pleasure to work with — professional and always on time. The job was done exceptionally well and I look forward to growing together in the years ahead.',
    avatar: '/images/testimonials/02.jpg',
    rating: 5,
  },
  {
    id: '3',
    name: 'Debnath Swarnkar',
    role: 'Project Head',
    company: 'KGI Groups',
    text: 'Great quality at the best prices I have found anywhere. I have been very happy with their work to date and would highly recommend them to anyone looking for a reliable tech partner.',
    avatar: '/images/testimonials/03.jpg',
    rating: 5,
  },
  {
    id: '4',
    name: 'Biswajit Swain',
    role: 'Managing Director',
    company: 'InvestXtramoney',
    text: 'We were very pleased by the work of PRove IT Catalysts business analysts and developers, who demonstrated a high level of skill and professional competence throughout the project.',
    avatar: '/images/testimonials/04.jpg',
    rating: 5,
  },
  {
    id: '5',
    name: 'Swadesh Sharma',
    role: 'Director',
    company: 'bqsclicks',
    text: 'They worked untiringly to meet my goals for app development. I noticed a rapid boost in my business through the app. Highly recommended for anyone needing mobile development.',
    avatar: '/images/testimonials/05.jpg',
    rating: 5,
  },
  {
    id: '6',
    name: 'Dibyansi Sinha',
    role: 'CEO',
    company: 'newsheadlinesodisha.com',
    text: 'Thank you for listening to us! I always rave about PRove IT Catalysts\' technical support to others in IT. It is genuinely the best support experience I have ever had.',
    avatar: '/images/testimonials/06.jpg',
    rating: 5,
  },
  {
    id: '7',
    name: 'Sumit Agarwal',
    role: 'CEO',
    company: 'RM Infra',
    text: 'PRove IT Catalysts is a great company and I highly recommend them. They are very professional, responsive and easy to work with — incredibly reliable from start to finish.',
    avatar: '/images/testimonials/07.jpg',
    rating: 5,
  },
];

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-featured online store with payment integration and inventory management.',
    image: '/images/project/8.png',
    tags: ['React', 'Node.js', 'Stripe'],
    color: '#2563EB',
  },
  {
    id: '2',
    title: 'Healthcare Management App',
    category: 'Mobile Development',
    description: 'Patient management system with appointment scheduling and billing.',
    image: '/images/project/10.png',
    tags: ['React Native', 'HIPAA', 'Node.js'],
    color: '#0F766E',
  },
  {
    id: '3',
    title: 'SaaS Dashboard',
    category: 'Web Development',
    description: 'Analytics dashboard with real-time data visualization and reporting.',
    image: '/images/project/6.png',
    tags: ['Next.js', 'TypeScript', 'Charts'],
    color: '#0F766E',
  },
  {
    id: '4',
    title: 'Brand Identity System',
    category: 'Graphic Design',
    description: 'Complete brand identity including logo, color system, and brand guidelines.',
    image: '/images/project/13.png',
    tags: ['Branding', 'Figma', 'Print'],
    color: '#475569',
  },
  {
    id: '5',
    title: 'Digital Marketing Campaign',
    category: 'Digital Marketing',
    description: 'Multi-channel campaign that increased organic traffic by 320% in 6 months.',
    image: '/images/project/11.png',
    tags: ['SEO', 'PPC', 'Social Media'],
    color: '#334155',
  },
  {
    id: '6',
    title: 'Cloud Infrastructure',
    category: 'Cloud Services',
    description: 'AWS migration and DevOps pipeline setup for a fintech startup.',
    image: '/images/project/14.png',
    tags: ['AWS', 'Docker', 'CI/CD'],
    color: '#1E3A8A',
  },
];
