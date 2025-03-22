import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Sidebar from '../../components/Sidebar';

export default async function LocaleLayout({
    children,
    params
}) {
    const { locale } = await params;
    if (!routing.locales.includes(locale)) {
        redirect('/it');
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className="bg-background text-primary-foreground">
                <div className="flex min-h-screen">
                    {/* Sidebar */}
                    <NextIntlClientProvider messages={messages}>
                        <Sidebar locale={locale} />
                    </NextIntlClientProvider>
                    {/* Main content */}
                    <main className="flex-1 py-6 pl-6 ml-64">
                        <div className="bg-primary text-primary-foreground rounded-l-lg shadow-[rgba(0,0,0,0.4)_-8px_4px_12px_0px] min-h-[calc(100vh-3rem)] p-6">
                            <NextIntlClientProvider messages={messages}>
                                {children}
                            </NextIntlClientProvider>
                        </div>
                    </main>
                </div>
            </body>
        </html>
    );
}