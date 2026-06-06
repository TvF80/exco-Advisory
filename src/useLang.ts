import { useState } from 'react';
import type { Lang } from './translations';

const STORAGE_KEY = 'exco-finance-lang';

export function useLang() {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored as Lang) || 'pl';
  });

  const setLang = (l: Lang) => {
    localStorage.setItem(STORAGE_KEY, l);
    setLangState(l);
  };

  return { lang, setLang };
}
