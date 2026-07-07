import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTA from '@/components/CTA/CTA';
import { blogPosts } from '@/data/blog';

const postContent: Record<string, { summary: string; highlights: string[]; body: string[] }> = {
  'they-are-here-to-prove-it': {
    summary: 'A closer look at how PRove IT Catalysts helps businesses turn strategy into measurable digital growth.',
    highlights: ['Digital strategy', 'Performance-focused websites', 'Growth-minded implementation'],
    body: [
      'PRove IT Catalysts brings together strategy, design, and technology to help brands stand out in a crowded market. Our approach combines clear messaging with modern digital execution so every project has a strong foundation.',
      'From planning through launch, we focus on user experience, business goals, and long-term scalability. That balance makes it easier for organizations to grow with confidence while keeping their digital presence consistent and effective.',
    ],
  },
  'app-development-market': {
    summary: 'Why well-designed applications are essential for modern customer engagement and operational efficiency.',
    highlights: ['Mobile-first design', 'Reliable delivery', 'User retention'],
    body: [
      'Applications have become a core part of how businesses connect with customers and manage day-to-day work. Whether it is a customer-facing product or an internal operations tool, the experience must be both reliable and intuitive.',
      'Our team focuses on building applications that are practical, polished, and easy to scale. The end result is a product that feels modern while supporting your internal goals and growth plans.',
    ],
  },
  'best-medical-billing-services': {
    summary: 'An overview of how streamlined billing services improve accuracy, speed, and revenue flow in healthcare operations.',
    highlights: ['Claim accuracy', 'Revenue recovery', 'Compliance support'],
    body: [
      'Healthcare organizations depend on accurate billing processes to keep operations running smoothly. Strong billing workflows reduce delays, prevent avoidable errors, and help teams stay focused on patient care.',
      'PRove IT Catalysts supports medical billing teams by improving process structure, visibility, and reporting. The result is a more dependable system that supports both staff efficiency and financial performance.',
    ],
  },
  'top-5-website-development': {
    summary: 'Five practical principles that make website development more effective for performance and growth.',
    highlights: ['Conversion-focused design', 'Clean development', 'SEO readiness'],
    body: [
      'A modern website needs more than attractive visuals. It should be designed to communicate clearly, guide visitors naturally, and help business goals come to life through clean, well-structured development.',
      'The best results come from aligning content strategy, user flows, and technical implementation from the start. That creates a site that is easier to maintain and more effective in the long run.',
    ],
  },
  'get-best-medical-services': {
    summary: 'How modern healthcare service providers can improve patient experience through smarter digital support.',
    highlights: ['Patient experience', 'Operational clarity', 'Flexible support'],
    body: [
      'Healthcare organizations are under increasing pressure to deliver more with less. Digital support tools and well-planned workflows can make a meaningful difference in both day-to-day operations and patient engagement.',
      'By combining thoughtful process design with dependable technology, teams can create a smoother experience for both patients and staff. The right support structure improves response times and creates a more consistent service experience.',
    ],
  },
  'best-voice-support': {
    summary: 'Why voice support remains valuable when it is delivered with structure, professionalism, and clear processes.',
    highlights: ['Customer communication', 'Follow-up quality', 'Reliable service'],
    body: [
      'Voice support continues to play an important role in customer experience, especially when calls need careful handling and prompt follow-up. A strong voice support operation should combine trained people, process discipline, and clear reporting.',
      'When these elements work together, businesses gain better consistency, stronger customer trust, and improved communication flow. That makes voice support a practical service for both customer care and business operations.',
    ],
  },
};

function getPostFromSlug(slug: string) {
  return blogPosts.find((post) => post.href === `/blog/${slug}`);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostFromSlug(slug);

  if (!post) {
    return {
      title: 'Blog Article',
      description: 'Read the latest article from PRove IT Catalysts.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostFromSlug(slug);
  const content = postContent[slug];

  if (!post || !content) {
    notFound();
  }

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-eyebrow section-eyebrow--light">Blog Article</span>
          <h1 className="page-hero__title">{post.title}</h1>
          <p className="page-hero__copy">{content.summary}</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container" style={{ display: 'grid', gap: '2rem', maxWidth: '900px' }}>
          <div className="page-card">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
              <span className="page-pill page-pill--active">{post.category}</span>
              <span className="page-pill page-pill--ghost">{post.date}</span>
              <span className="page-pill page-pill--ghost">{post.readTime}</span>
            </div>

            <p className="section-copy" style={{ marginBottom: '1.25rem' }}>
              {content.summary}
            </p>

            <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {content.highlights.map((item) => (
                <div key={item} className="page-card page-card--surface">
                  <strong>{item}</strong>
                </div>
              ))}
            </div>

            {content.body.map((paragraph) => (
              <p key={paragraph} className="section-copy" style={{ marginBottom: '1rem' }}>
                {paragraph}
              </p>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/blog" style={{ color: '#2563EB', fontWeight: 700, textDecoration: 'none' }}>
              ← Back to all articles
            </Link>
            <Link href="/contact" style={{ color: '#2563EB', fontWeight: 700, textDecoration: 'none' }}>
              Talk to our team →
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
