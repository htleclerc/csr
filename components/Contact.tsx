'use client';

import { useState, type FormEvent } from 'react';
import { useLang } from './LanguageProvider';

export default function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-grid">
        <div className="contact-copy">
          <div className="kicker">Contact</div>
          <h2>{t('contactTitle')}</h2>
          <p>{t('contactSub')}</p>
          <div className="contact-details">
            <div className="contact-row"><span className="lbl">{t('labelSiege')}</span><span className="val">{t('toBeConfirmed')}</span></div>
            <div className="contact-row"><span className="lbl">{t('labelPhone')}</span><span className="val">{t('toBeConfirmed')}</span></div>
            <div className="contact-row"><span className="lbl">E-mail</span><span className="val">{t('toBeConfirmed')}</span></div>
            <div className="contact-row">
              <span className="lbl">{t('labelSocial')}</span>
              <div className="contact-social">
                <span>LinkedIn</span><span>·</span><span>Facebook</span><span>·</span><span>X</span><span>·</span><span>YouTube</span>
              </div>
            </div>
          </div>
        </div>
        <form className={`contact-form${sent ? ' sent' : ''}`} onSubmit={onSubmit} noValidate>
          <div className="contact-fields">
            <label>
              {t('formName')}
              <input type="text" name="name" autoComplete="name" />
            </label>
            <label>
              {t('formOrg')}
              <input type="text" name="org" autoComplete="organization" />
            </label>
            <label>
              E-mail
              <input type="email" name="email" autoComplete="email" />
            </label>
            <label>
              {t('formMsg')}
              <textarea name="msg" rows={4} />
            </label>
            <button type="submit" className="btn-send">{t('formSend')}</button>
          </div>
          <div className="contact-thanks" role="status">
            <span className="thanks-title">{t('formThanks')}</span>
            <span className="thanks-sub">{t('formThanksSub')}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
