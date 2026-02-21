import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteContent } from '@/data/content';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    keywords: siteContent.seo.keywords,
    metadataBase: new URL(siteContent.seo.url),
    openGraph: {
        title: siteContent.seo.title,
        description: siteContent.seo.description,
        url: siteContent.seo.url,
        siteName: 'Great Campus',
        images: [{ url: siteContent.seo.ogImage, width: 1200, height: 630 }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteContent.seo.title,
        description: siteContent.seo.description,
        images: [siteContent.seo.ogImage],
    },
    robots: { index: true, follow: true },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="antialiased bg-white text-gray-900">{children}</body>
        </html>
    );
}
