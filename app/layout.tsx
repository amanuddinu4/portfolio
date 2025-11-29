import './globals.css';
import '../styles/variables.css';
import { ReactNode } from 'react';
import Script from 'next/script';
import ThemeProvider from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aman Uddin — DevOps Engineer',
  description: 'DevOps Engineer portfolio — Terraform, AWS, Kubernetes, CI/CD, Infrastructure as Code',
  keywords: ['DevOps', 'AWS', 'Terraform', 'Kubernetes', 'CI/CD', 'Infrastructure as Code', 'Docker', 'Jenkins', 'GitHub Actions'],
  authors: [{ name: 'Aman Uddin' }],
  openGraph: {
    title: 'Aman Uddin — DevOps Engineer',
    description: 'Cloud-native DevOps Engineer portfolio — Terraform, AWS, Kubernetes, CI/CD, Infrastructure as Code',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aman Uddin — DevOps Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aman Uddin — DevOps Engineer',
    description: 'Cloud-native DevOps Engineer portfolio',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aman Uddin',
  jobTitle: 'DevOps Engineer',
  description: 'Cloud-native infrastructure engineer focused on reliable, automated delivery pipelines and resilient systems',
  url: 'https://amanuddinu4.github.io/portfolio',
  sameAs: [
    'https://github.com/amanuddinu4',
  ],
  knowsAbout: [
    'DevOps',
    'AWS',
    'Terraform',
    'Kubernetes',
    'Docker',
    'CI/CD',
    'Infrastructure as Code',
    'Jenkins',
    'GitHub Actions',
    'Ansible',
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

