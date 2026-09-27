'use client';

import Image from 'next/image';
import { DATA } from '@/lib/content';
import { useLang } from './LanguageProvider';

export default function Founder() {
  const { lang, t } = useLang();
  return (
    <section id="fondateur" className="section">
      <div className="founder-grid">
        <div className="founder-photo">
          <Image src="/assets/logo-csr.png" alt="" width={84} height={84} aria-hidden />
          <span>{t('photoPlaceholder')}</span>
        </div>
        <div className="founder-copy">
          <div className="kicker">{t('founderKicker')}</div>
          <h2>Safiou Radji</h2>
          <div className="founder-role">{t('founderRole')}</div>
          <p className="founder-bio">{t('founderBio')}</p>
          <div className="founder-skills">
            {DATA.skills[lang].map((s) => (
              <span className="founder-skill" key={s}>{s}</span>
            ))}
          </div>
          <p className="founder-conf">{t('founderConf')}</p>
        </div>
      </div>
      <div className="founder-quote-wrap">
        <span className="founder-quote-mark" aria-hidden>“</span>
        <blockquote className="founder-quote">{t('founderQuote')}</blockquote>
        <div className="founder-sign">
          <span className="line" />
          <span>Safiou Radji</span>
          <span className="line" />
        </div>
      </div>
    </section>
  );
}
