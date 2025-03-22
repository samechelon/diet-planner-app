'use client';

import '../globals.css';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-8">{t('title')}</h1>
      <h2 className="text-3xl font-semibold">{t('subtitle')}</h2>
    </div>
  );
}