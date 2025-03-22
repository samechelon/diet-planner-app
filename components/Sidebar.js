'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import NextLink from 'next/link';

export default function Sidebar({ locale }) {
    const t = useTranslations('Sidebar');
    const pathname = usePathname();
    // const router = useRouter();

    return (
        <aside className="fixed inset-y-0 left-0 w-64 shadow-xl bg-primary text-primary-foreground border-r border-gray-200">
            <nav className="p-4">
                <div className="p-6 border-b text-primary-foreground border-gray-200">
                    <NextLink
                        href={`/${locale}/`}
                        className={`flex items-center}`}
                    >
                        <h1 className="text-2xl font-bold">{t('title')}</h1>
                    </NextLink>
                </div>
                <ul className="pt-2 space-y-2">
                    <li>
                        <NextLink
                            href={`/${locale}/anagrafiche`}
                            className={`flex items-center p-3 rounded-lg hover:bg-primary-foreground hover:text-primary transition-all duration-200 ${pathname.includes('anagrafiche') ? 'bg-primary-foreground text-primary' : ''}`}
                        >
                            <span className="font-bold">{t('masterData')}</span>
                        </NextLink>
                    </li>
                    <li>
                        <NextLink
                            href={`/${locale}/diete`}
                            className={`flex items-center p-3 rounded-lg hover:bg-primary-foreground hover:text-primary transition-all duration-200 ${pathname.includes('diete') ? 'bg-primary-foreground text-primary' : ''}`}
                        >
                            <span className="font-bold">{t('diets')}</span>
                        </NextLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}