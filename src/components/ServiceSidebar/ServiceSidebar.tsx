import Link from 'next/link';
import { services } from '@/data/services';

interface ServiceSidebarProps {
  activeHref?: string;
}

export default function ServiceSidebar({ activeHref }: ServiceSidebarProps) {
  const servicePages = services.filter((service) => service.hasPage);

  return (
    <aside
      style={{
        background: '#F8FBFF',
        border: '1px solid #E2E8F0',
        borderRadius: '16px',
        padding: '1.25rem',
        boxShadow: '0 12px 30px rgba(15, 23, 42, 0.07)',
        height: 'fit-content',
      }}
    >
      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>
        Our Services
      </h3>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.45rem' }}>
        {servicePages.map((service) => {
          const isActive = service.href === activeHref;

          return (
            <li key={service.id}>
              <Link
                href={service.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.75rem 0.85rem',
                  borderRadius: '10px',
                  background: isActive ? '#EAF1FB' : 'transparent',
                  color: isActive ? '#2563EB' : '#0F172A',
                  border: isActive ? '1px solid rgba(37, 99, 235, 0.18)' : '1px solid transparent',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 700 : 600,
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: service.color,
                    flexShrink: 0,
                  }}
                />
                {service.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
