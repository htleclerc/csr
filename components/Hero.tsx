'use client';

import Image from 'next/image';
import { useLang } from './LanguageProvider';

export default function Hero() {
  const { t } = useLang();
  return (
    <section id="accueil" className="hero">
      <Image src="/assets/logo-csr.png" alt="" className="hero-watermark" width={780} height={780} aria-hidden />
      <div className="hero-inner">
        <div className="hero-frame fade-up">
          <div className="kicker">{t('heroKicker')}</div>
          <h1>{t('heroTitle')}</h1>
          <p className="hero-tagline">{t('heroTagline')}</p>
          <div className="hero-pillars">
            <span>{t('pillar1')}</span>
            <span className="dot">·</span>
            <span>{t('pillar2')}</span>
            <span className="dot">·</span>
            <span>{t('pillar3')}</span>
            <span className="dot">·</span>
            <span>{t('pillar4')}</span>
          </div>
          <p className="hero-sub">{t('heroSub')}</p>
          <div className="hero-cta">
            <a href="#expertises" className="btn btn-solid">{t('heroCta1')}</a>
            <a href="#contact" className="btn btn-ghost">{t('heroCta2')}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
