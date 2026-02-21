import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteContent } from '@/data/content';

export default function Footer() {
    const { footer } = siteContent;

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main footer */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">GC</span>
                            </div>
                            <span className="font-semibold text-white text-lg tracking-tight">
                                Great Campus
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
                            {footer.tagline}
                        </p>

                        {/* Contact info */}
                        <div className="flex flex-col gap-3">
                            <a
                                href={`mailto:${footer.contact.email}`}
                                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors"
                            >
                                <Mail size={14} className="text-gray-500" />
                                {footer.contact.email}
                            </a>
                            <a
                                href={`tel:${footer.contact.phone}`}
                                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors"
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
                            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-4">
                                {category}
                            </h4>
                            <ul className="flex flex-col gap-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 hover:text-white transition-colors"
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
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-xs text-gray-500">{footer.copyright}</p>
                    <div className="flex items-center gap-5">
                        {footer.legal.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
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
