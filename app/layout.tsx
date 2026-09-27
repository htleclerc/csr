import type { Metadata } from 'next';
import { LanguageProvider } from '@/components/LanguageProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cabinet Safiou Radji — Conseil Stratégique · Finance · Investissement · Développement Durable',
  description:
    'Cabinet indépendant de conseil stratégique, financier et organisationnel — finance durable, gouvernance, investissement et transformation des organisations en Afrique.',
  icons: { icon: '/assets/logo-csr.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Marcellus&family=Hanken+Grotesk:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
