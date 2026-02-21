import Link from 'next/link';
import { siteContent } from '@/data/content';

export default function Hero() {
    const { hero } = siteContent;

    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Badge */}
                <div className="flex justify-center md:justify-start mb-8">
                    <span className="inline-flex items-center gap-2 text-sm text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"></span>
                        {hero.badge}
                    </span>
                </div>

                {/* Headline */}
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight tracking-tight mb-6 text-center md:text-left whitespace-pre-line">
                        {hero.headline}
                    </h1>
                    <p className="text-lg text-gray-500 leading-relaxed mb-10 text-center md:text-left max-w-2xl">
                        {hero.subheadline}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <Link
                            href={hero.primaryCta.href}
                            className="inline-flex items-center justify-center bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            {hero.primaryCta.label}
                        </Link>
                        <Link
                            href={hero.secondaryCta.href}
                            className="inline-flex items-center justify-center text-gray-700 text-sm font-medium px-6 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                            {hero.secondaryCta.label}
                        </Link>
                    </div>
                </div>

                {/* Stats bar */}
                <div className="mt-16 pt-8 border-t border-gray-100">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {hero.stats.map((stat) => (
                            <div key={stat.label} className="text-center md:text-left">
                                <div className="text-3xl font-semibold text-gray-900 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
