'use client';

import { DATA } from '@/lib/content';
import { useLang } from './LanguageProvider';

export default function WhyUs() {
  const { lang, t } = useLang();
  return (
    <section id="pourquoi" className="section-band">
      <div className="wrap">
        <div className="section-head-center">
          <div className="kicker">{t('whyKicker')}</div>
          <h2>{t('whyTitle')}</h2>
        </div>
        <div className="why-grid">
          {DATA.why[lang].map((w, i) => (
            <div className="why-card" key={w.title}>
              <span className="why-num">{'0' + (i + 1)}</span>
              <span className="why-title">{w.title}</span>
              <span className="why-desc">{w.desc}</span>
            </div>
          ))}
        </div>

        <div className="clients-block">
          <div className="divider-row">
            <div className="kicker">{t('clientsKicker')}</div>
            <span className="rule" />
          </div>
          <div className="clients-tags">
            {DATA.clients[lang].map((c) => (
              <span className="client-tag" key={c}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
