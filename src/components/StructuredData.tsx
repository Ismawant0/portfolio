import Script from 'next/script';
import { projects } from '@/data/projects';
import { blogPosts } from '@/data/blog';

export default function StructuredData() {
  const baseUrl = 'https://ismawanto.vercel.app';

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ismawanto',
    alternateName: 'Ismawanto Developer',
    jobTitle: 'Front-End Developer',
    url: baseUrl,
    description: 'Front-End Developer specializing in React, Next.js, Tailwind CSS, frontend architecture, and modern web applications.',
    knowsAbout: [
      'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 
      'Frontend Architecture', 'Web Performance', 'UI Engineering', 
      'Accessibility', 'Responsive Web Design'
    ],
    sameAs: [
      'https://github.com/Ismawant0',
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ismawanto | Front-End Developer',
    url: baseUrl,
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
