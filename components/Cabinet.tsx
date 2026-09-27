'use client';

import { DATA } from '@/lib/content';
import { useLang } from './LanguageProvider';

export default function Cabinet() {
  const { lang, t } = useLang();
  return (
    <section id="cabinet">
      <div className="cabinet-stack">
        <div className="cabinet-grid">
          <div className="cabinet-copy">
            <div className="kicker">{t('whoKicker')}</div>
            <h2>{t('whoTitle')}</h2>
            <p>{t('whoText')}</p>
            <p>{t('whoZone')}</p>
          </div>
          <div className="vm-card">
            <div>
              <div className="vm-label">{t('visionLabel')}</div>
              <p>{t('visionText')}</p>
            </div>
            <div>
              <div className="vm-label">{t('missionLabel')}</div>
              <p>{t('missionText')}</p>
            </div>
          </div>
        </div>

        <div className="values-block">
          <div className="divider-row">
            <div className="kicker">{t('valuesKicker')}</div>
            <span className="rule" />
          </div>
          <div className="values-grid">
            {DATA.values[lang].map((v) => (
              <div className="value-cell" key={v.name}>
                <span className="v-name">{v.name}</span>
                <span className="v-desc">{v.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
