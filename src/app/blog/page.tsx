import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Industry insights, tech trends, and expert perspectives from the PRove IT Catalysts team.',
};

const posts = [
  {
    id: '1',
    title: 'They are here to PRove IT',
    category: 'Web Development',
    excerpt: 'PRove IT catalysts is an honour-winning web development...',
    href: '/blog/they-are-here-to-prove-it',
    image: '/images/blog1.jpg',
    author: 'Admin',
    likes: 90,
    comments: 120,
  },
  {
    id: '2',
    title: 'The App Development...',
    category: 'App Development',
    excerpt: 'Reasons why Prove IT catalysts are one of the top names of the...',
    href: '/blog/app-development-market',
    image: '/images/blog2.jpg',
    author: 'Admin',
    likes: 134,
    comments: 154,
  },
  {
    id: '3',
    title: 'The best medical billing...',
    category: 'Software',
    excerpt: 'Our skilled team will provide the complete solution...',
    href: '/blog/best-medical-billing-services',
    image: '/images/blog3.jpg',
    author: 'Admin',
    likes: 190,
    comments: 220,
  },
  {
    id: '4',
    title: 'Top 5 website develop...',
    category: 'Web Development',
    excerpt: 'We have professional Web Designer & Developer team.We are expert in...',
    href: '/blog/top-5-website-development',
    image: '/images/blog4.jpg',
    author: 'Admin',
    likes: 10,
    comments: 33,
  },
  {
    id: '5',
    title: 'Get the Best Medical ...',
    category: 'Software',
    excerpt: 'For healthcare service providers who offer medical services to...',
    href: '/blog/get-best-medical-services',
    image: '/images/blog5.jpg',
    author: 'Admin',
    likes: 77,
    comments: 32,
  },
  {
    id: '6',
    title: 'Get the Best Voice ...',
    category: 'Support Services',
    excerpt: 'This is the main advantage that an organization can get by outsourcing...',
    href: '/blog/best-voice-support',
    image: '/images/blog6.jpg',
    author: 'Admin',
    likes: 98,
    comments: 75,
  },
];

const categories = ['All', 'Web Development', 'App Development', 'Digital Marketing', 'Healthcare Tech', 'Cloud', 'Strategy'];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-eyebrow">
            📝 Our Blog
          </span>
          <h1 className="page-hero__title">
            Insights & <span className="page-hero__accent">Perspectives</span>
          </h1>
          <p className="page-hero__copy">
            Industry news, tech trends, and expert tips from the PRove IT Catalysts team.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="page-section">
        <div className="container">
          {/* Category Filter */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
            {categories.map((cat, i) => (
              <button key={cat} className={i === 0 ? 'page-pill page-pill--active' : 'page-pill page-pill--ghost'}>
                {cat}
              </button>
            ))}
          </div>

            <div className="blog-grid">
            {posts.map((post) => (
              <Link key={post.id} href={post.href} className="blog-card">
                <img src={post.image} alt={post.title} className="blog-card__image" />

                <div className="blog-card__content">
                  <span className="blog-card__category">{post.category}</span>

                  <h3>{post.title}</h3>

                  <p>{post.excerpt}</p>

                  <div className="blog-card__footer">
                    <span>{post.author}</span>
                    <span>♡ {post.likes}</span>
                    <span>▢ {post.comments}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
