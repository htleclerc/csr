'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { I18N, type I18nKey, type Lang } from '@/lib/content';

type LanguageContextValue = {
  lang: Lang;
  t: (key: I18nKey) => string;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback((key: I18nKey) => I18N[lang][key], [lang]);
  const toggle = useCallback(() => setLang((l) => (l === 'fr' ? 'en' : 'fr')), []);

  const value = useMemo(() => ({ lang, t, toggle }), [lang, t, toggle]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
  return ctx;
}
