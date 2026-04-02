import Link from 'next/link';
import { content } from '@/lib/content';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-gray-900 bg-gray-950 py-12">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
                    <div className="flex flex-col items-center gap-4 md:items-start">
                        <div className="flex items-center gap-2">
                            <div className="bg-gradient-brand flex h-8 w-8 items-center justify-center rounded font-bold text-white">
                                G
                            </div>
                            <span className="text-xl font-semibold tracking-tight text-white">
                                Great Campus
                            </span>
                        </div>

                        <div className="mt-2 flex flex-col items-center gap-2 text-sm text-gray-400 md:items-start">
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@greatcampus.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 transition-colors hover:text-white"
                            >
                                <Mail className="h-4 w-4" />
                                contact@greatcampus.in
                            </a>
                            <a
                                href="https://wa.me/919217666272"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 transition-colors hover:text-white"
                            >
                                <Phone className="h-4 w-4" />
                                +91 92176 66272
                            </a>
                        </div>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:mt-2 md:justify-end">
                        {content.footer.links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm text-gray-400 transition-colors hover:text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-900 pt-8 text-sm text-gray-500 md:flex-row">
                    <p>{content.footer.copyright}</p>
                    <div className="flex gap-4 text-sm">
                        <Link href="#terms" className="hover:text-white">
                            Terms of Service
                        </Link>
                        <Link href="#privacy" className="hover:text-white">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
