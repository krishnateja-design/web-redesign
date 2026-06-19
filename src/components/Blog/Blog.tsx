import Link from 'next/link';
import styles from './Blog.module.scss';

const posts = [
  {
    id: '1',
    title: 'They are here to PRove IT',
    category: 'Web Development',
    excerpt: 'PRove IT catalysts is an honour-winning web development...',
    image: '/images/blog1.jpg',
    href: '/blog/they-are-here-to-prove-it',
    author: 'Admin',
    likes: 90,
    comments: 120,
  },
  {
    id: '2',
    title: 'The App Development...',
    category: 'App Development',
    excerpt: 'Reasons why Prove IT catalysts are one of the top names of the...',
    image: '/images/blog2.jpg',
    href: '/blog/app-development-market',
    author: 'Admin',
    likes: 134,
    comments: 154,
  },
  {
    id: '3',
    title: 'The best medical billing...',
    category: 'Software',
    excerpt: 'Our skilled team will provide the complete solution...',
    image: '/images/blog3.jpg',
    href: '/blog/best-medical-billing-services',
    author: 'Admin',
    likes: 190,
    comments: 220,
  },
];

export default function Blog() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-eyebrow">Latest Articles</span>
          <h2 className={styles.title}>
            Our <span className="gradient-text">Blog & Insights</span>
          </h2>
          <p className={styles.subtitle}>
            Industry news, tech trends, and expert perspectives from the PRove IT Catalysts team.
          </p>
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link key={post.id} href={post.href} className={styles.card}>
              <img src={post.image} alt={post.title} className={styles.blogImage} />

              <div className={styles.cardBody}>
                <span className={styles.category}>{post.category}</span>

                <h3 className={styles.cardTitle}>{post.title}</h3>

                <p className={styles.cardExcerpt}>{post.excerpt}</p>

                <div className={styles.cardFooter}>
                  <span>{post.author}</span>
                  <span>♡ {post.likes}</span>
                  <span>▢ {post.comments}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.viewAll}>
          <Link href="/blog" className={styles.viewAllBtn}>
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}