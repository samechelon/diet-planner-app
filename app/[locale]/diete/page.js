'use client';

import { useTranslations } from 'next-intl';

export default function DietePage() {
  const t = useTranslations('Diete');
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">{t('title')}</h1>
      {/* Add your diete content here */}
    </div>
  );
}