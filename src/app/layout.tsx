import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { content } from '@/lib/content';
import FloatingWhatsAppIcon from '@/components/FloatingWhatsAppIcon';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: content.seo.title,
    description: content.seo.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-pt-16 scroll-smooth">
            <body
                className={`${inter.className} min-h-screen bg-white text-gray-900 antialiased selection:bg-gray-200 selection:text-gray-900`}
            >
                {children}
                <FloatingWhatsAppIcon />
            </body>
        </html>
    );
}
