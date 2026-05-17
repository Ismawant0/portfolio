import Script from 'next/script';
import { projects } from '@/data/projects';
import { blogPosts } from '@/data/blog';

export default function StructuredData() {
  const baseUrl = 'https://ismawanto.vercel.app';
  const canonicalUrl = 'https://ismawanto.vercel.app/';

  const seoKeywords = [
    'Web Developer Profesional Bojonegoro',
    'Full Stack Developer Bojonegoro',
    'Jasa Pembuatan Website Custom Bojonegoro',
    'Konsultan IT dan Web Development Bojonegoro',
    'Cara membuat toko online otomatis Bojonegoro',
    'Redesign website perusahaan Bojonegoro',
    'Jasa SEO Website Bojonegoro',
    'Jasa pembuatan web dengan React dan Tailwind Bojonegoro',
    'Developer Web App PWA (Progressive Web App) Bojonegoro',
    'Pembuatan sistem informasi berbasis Laravel Bojonegoro',
    'Jasa integrasi API sistem pembayaran Bojonegoro',
    'Bojonegoro',
    'Kota Minyak',
    'Indonesia',
    'Jawa Timur',
    'Web Developer Profesional Jawa Timur',
    'Full Stack Developer Jawa Timur',
    'Jasa Pembuatan Website Custom Jawa Timur',
    'Konsultan IT dan Web Development Jawa Timur',
    'Cara membuat toko online otomatis Jawa Timur',
    'Redesign website perusahaan Jawa Timur',
    'Jasa SEO Website Jawa Timur',
    'Jasa pembuatan web dengan React dan Tailwind Jawa Timur',
    'Developer Web App PWA (Progressive Web App) Jawa Timur',
    'Pembuatan sistem informasi berbasis Laravel Jawa Timur',
    'Jasa integrasi API sistem pembayaran Jawa Timur'
  ].join(', ');

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ismawanto',
    alternateName: 'Ismawanto Developer',
    jobTitle: 'Front-End Developer',
    url: canonicalUrl,
    description: 'Front-End Developer specializing in React, Next.js, Tailwind CSS, frontend architecture, and modern web applications.',
    keywords: seoKeywords,
    knowsAbout: [
      'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 
      'Frontend Architecture', 'Web Performance', 'UI Engineering', 
      'Accessibility', 'Responsive Web Design',
      'Web Development Bojonegoro', 'Web Developer Bojonegoro',
      'Web Development Jawa Timur', 'Web Developer Jawa Timur'
    ],
    sameAs: [
      'https://github.com/Ismawant0',
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ismawanto',
    alternateName: [
      'Ismawanto Developer',
      'Ismawanto Portfolio',
      'Ismawanto Front-End Developer'
    ],
    url: canonicalUrl,
    keywords: seoKeywords,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  // Portfolio CreativeWork Schema
  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        url: project.liveUrl,
        keywords: project.techStack.join(', ')
      }
    }))
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </>
  );
}
