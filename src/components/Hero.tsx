import Link from 'next/link';
import { siteContent } from '@/data/content';

export default function Hero() {
    const { hero } = siteContent;

    return (
        <section className="bg-white px-4 pt-32 pb-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                {/* Badge */}
                <div className="mb-8 flex justify-center md:justify-start">
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                        {hero.badge}
                    </span>
                </div>

                {/* Headline */}
                <div className="max-w-3xl">
                    <h1 className="mb-6 text-center text-4xl leading-tight font-semibold tracking-tight whitespace-pre-line text-gray-900 md:text-left md:text-5xl">
                        {hero.headline}
                    </h1>
                    <p className="mb-10 max-w-2xl text-center text-lg leading-relaxed text-gray-500 md:text-left">
                        {hero.subheadline}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
                        <Link
                            href={hero.primaryCta.href}
                            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                        >
                            {hero.primaryCta.label}
                        </Link>
                        <Link
                            href={hero.secondaryCta.href}
                            className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                        >
                            {hero.secondaryCta.label}
                        </Link>
                    </div>
                </div>

                {/* Stats bar */}
                <div className="mt-16 border-t border-gray-100 pt-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {hero.stats.map((stat) => (
                            <div key={stat.label} className="text-center md:text-left">
                                <div className="mb-1 text-3xl font-semibold text-gray-900">
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
