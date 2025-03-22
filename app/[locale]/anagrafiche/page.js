'use client';
 
import { useTranslations } from 'next-intl';

export default function AnagrafichePage() {
  const t = useTranslations('Anagrafiche');
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">{t('title')}</h1>
      {/* Add your anagrafiche content here */}
    </div>
  );
}