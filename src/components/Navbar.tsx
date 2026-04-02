'use client';

import { useState } from 'react';
import Link from 'next/link';
import { content } from '@/lib/content';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    {/* Logo placeholder */}
                    <div className="bg-gradient-brand flex h-8 w-8 items-center justify-center rounded-lg font-bold text-white shadow-sm">
                        G
                    </div>
                    <Link href="/" className="text-xl font-semibold tracking-tight text-gray-900">
                        Great Campus
                    </Link>
                </div>

                <nav className="hidden gap-8 md:flex">
                    {content.footer.links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden items-center gap-4 md:flex">
                    <Link
                        href="https://dcas.teammistake.com"
                        target="_blank"
                        className="bg-gradient-brand rounded-lg px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md"
                    >
                        {content.hero.ctaPrimary}
                    </Link>
                </div>

                <div className="flex items-center md:hidden">
                    <button
                        type="button"
                        className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="absolute left-0 w-full border-t border-gray-100 bg-white shadow-lg md:hidden">
                    <div className="space-y-1 px-4 pt-2 pb-6">
                        {content.footer.links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="mt-4 border-t border-gray-100 pt-4">
                            <Link
                                href="https://dcas.teammistake.com"
                                target="_blank"
                                className="bg-gradient-brand mt-2 block w-full rounded-lg px-4 py-3 text-center text-base font-medium text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {content.hero.ctaPrimary}
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
