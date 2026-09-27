'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLang } from './LanguageProvider';

const LINKS = [
  { href: '#cabinet', key: 'navCabinet' },
  { href: '#expertises', key: 'navExpertises' },
  { href: '#secteurs', key: 'navSecteurs' },
  { href: '#fondateur', key: 'navFondateur' },
  { href: '#ressources', key: 'navRessources' },
] as const;

export default function Header() {
  const { lang, t, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav">
        <a href="#accueil" className="brand" onClick={close}>
          <Image src="/assets/logo-csr.png" alt="Cabinet Safiou Radji" width={42} height={42} priority />
          <span>CABINET SAFIOU RADJI</span>
        </a>
        <div className="nav-spacer" />
        <button
          type="button"
          className="nav-burger"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>
        <div className={`nav-links${open ? ' open' : ''}`} id="navLinks">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="navlink" onClick={close}>
              {t(l.key)}
            </a>
          ))}
          <a href="#contact" className="btn-contact" onClick={close}>
            Contact
          </a>
          <button type="button" className="lang-toggle" onClick={toggle} aria-label="Changer de langue">
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      </nav>
    </header>
  );
}
