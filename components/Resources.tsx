'use client';

import { DATA } from '@/lib/content';
import { useLang } from './LanguageProvider';

export default function Resources() {
  const { lang, t } = useLang();
  return (
    <section id="ressources" className="section">
      <div className="wrap">
        <div className="section-head-center">
          <div className="kicker">{t('resKicker')}</div>
          <h2>{t('resTitle')}</h2>
        </div>
        <div className="portals-grid">
          {DATA.portals[lang].map((p) => (
            <div className="portal-card" key={p.roman}>
              <span className="portal-roman">{p.roman}</span>
              <span className="portal-title">{p.title}</span>
              <ul>
                {p.items.map((it) => (
                  <li key={it}>
                    <span className="dash">—</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="portal-spacer" />
              <span className="portal-soon">{t('resSoon')}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
