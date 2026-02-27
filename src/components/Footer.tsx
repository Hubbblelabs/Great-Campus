import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteContent } from '@/data/content';

export default function Footer() {
    const { footer } = siteContent;

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main footer */}
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="mb-4 flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                                <span className="text-sm font-bold text-white">GC</span>
                            </div>
                            <span className="text-lg font-semibold tracking-tight text-white">
                                Great Campus
                            </span>
                        </div>
                        <p className="mb-6 max-w-xs text-sm leading-relaxed text-gray-400">
                            {footer.tagline}
                        </p>

                        {/* Contact info */}
                        <div className="flex flex-col gap-3">
                            <a
                                href={`mailto:${footer.contact.email}`}
                                className="flex items-center gap-2.5 text-sm text-gray-400 transition-colors hover:text-white"
                            >
                                <Mail size={14} className="text-gray-500" />
                                {footer.contact.email}
                            </a>
                            <a
                                href={`tel:${footer.contact.phone}`}
                                className="flex items-center gap-2.5 text-sm text-gray-400 transition-colors hover:text-white"
                            >
                                <Phone size={14} className="text-gray-500" />
                                {footer.contact.phone}
                            </a>
                            <span className="flex items-center gap-2.5 text-sm text-gray-400">
                                <MapPin size={14} className="text-gray-500" />
                                {footer.contact.address}
                            </span>
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footer.links).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="mb-4 text-xs font-semibold tracking-widest text-gray-300 uppercase">
                                {category}
                            </h4>
                            <ul className="flex flex-col gap-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 transition-colors hover:text-white"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
                    <p className="text-xs text-gray-500">{footer.copyright}</p>
                    <div className="flex items-center gap-5">
                        {footer.legal.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-xs text-gray-500 transition-colors hover:text-gray-300"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
