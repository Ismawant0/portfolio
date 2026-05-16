import Script from 'next/script';

export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ismawanto',
    jobTitle: 'Front-End Developer',
    url: 'https://ismawanto.vercel.app',
    description: 'Front-End Developer specializing in React, Next.js, Tailwind CSS, frontend architecture, and modern web applications.',
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Frontend Architecture',
      'Web Performance',
      'UI Engineering',
      'Accessibility',
      'Responsive Web Design',
      'Performance Optimization'
    ],
    sameAs: [
      'https://github.com/Ismawant0'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ismawanto Portfolio',
    url: 'https://ismawanto.vercel.app',
    description: 'Professional portfolio of Ismawanto, a Front-End Developer.',
    author: {
      '@type': 'Person',
      name: 'Ismawanto'
    }
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
    </>
  );
}
