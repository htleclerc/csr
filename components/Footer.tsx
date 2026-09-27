'use client';

import Image from 'next/image';
import { useLang } from './LanguageProvider';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Image src="/assets/logo-csr.png" alt="" width={32} height={32} aria-hidden />
          <span>CABINET SAFIOU RADJI</span>
        </div>
        <span className="footer-slogan">{t('footerSlogan')}</span>
        <span className="footer-copy">© {new Date().getFullYear()} Cabinet Safiou Radji</span>
      </div>
    </footer>
  );
}
