'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={clsx(
                'fixed top-0 right-0 left-0 z-50 transition-all duration-200',
                scrolled
                    ? 'border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-sm'
                    : 'bg-white',
            )}
        >
            <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                            <span className="text-sm font-bold text-white">GC</span>
                        </div>
                        <span className="text-lg font-semibold tracking-tight text-gray-900">
                            Great Campus
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden items-center gap-3 md:flex">
                        <Link
                            href="#login"
                            className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                        >
                            Log in
                        </Link>
                        <Link
                            href="#contact"
                            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                        >
                            Partner with us
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="p-2 text-gray-600 hover:text-gray-900 md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="border-t border-gray-100 py-4 md:hidden">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="rounded-md px-2 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="mt-3 flex flex-col gap-2 border-t border-gray-100 pt-3">
                                <Link
                                    href="#contact"
                                    className="rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Partner with us
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
