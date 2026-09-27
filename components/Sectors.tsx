'use client';

import { DATA } from '@/lib/content';
import { useLang } from './LanguageProvider';

export default function Sectors() {
  const { lang, t } = useLang();
  return (
    <section id="secteurs" className="section-band">
      <div className="sect-grid">
        <div className="sect-copy">
          <div className="kicker">{t('sectKicker')}</div>
          <h2>{t('sectTitle')}</h2>
          <p>{t('sectSub')}</p>
        </div>
        <div className="sect-tags">
          {DATA.sectors[lang].map((s) => (
            <span className="sect-tag" key={s}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
