'use client';

import { useState } from 'react';
import { DATA } from '@/lib/content';
import { useLang } from './LanguageProvider';

export default function Expertises() {
  const { lang, t } = useLang();
  const [openIndex, setOpenIndex] = useState<number>(-1);

  return (
    <section id="expertises" className="section">
      <div className="wrap">
        <div className="exp-head">
          <div className="exp-title-wrap">
            <div className="kicker">{t('expKicker')}</div>
            <h2>{t('expTitle')}</h2>
          </div>
          <p className="exp-hint">{t('expHint')}</p>
        </div>
        <div className="exp-list">
          {DATA.expertises[lang].map((ex, i) => {
            const isOpen = i === openIndex;
            const panelId = `exp-panel-${i}`;
            return (
              <div className={`exp-item${isOpen ? ' open' : ''}`} key={ex.title}>
                <button
                  type="button"
                  className="exp-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className="exp-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="exp-name">{ex.title}</span>
                  <span className="exp-chevron" aria-hidden>+</span>
                </button>
                <div className="exp-panel" id={panelId} hidden={!isOpen}>
                  <div className="exp-panel-items">
                    {ex.items.map((it) => (
                      <div className="exp-line" key={it}>
                        <span className="dash">—</span>
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                  {ex.note && <p className="exp-note">{ex.note}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
