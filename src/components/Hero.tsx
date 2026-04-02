import Link from 'next/link';
import { content } from '@/lib/content';

export default function Hero() {
    const { heading, subheading, ctaPrimary, ctaSecondary } = content.hero;

    return (
        <section
            id="about-us"
            className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-28"
        >
            <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance text-gray-900 md:text-5xl lg:text-6xl">
                    {heading}
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-balance text-gray-600 md:text-xl">
                    {subheading}
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="https://dcas.teammistake.com"
                        target="_blank"
                        className="bg-gradient-brand inline-flex h-12 w-full items-center justify-center rounded-lg px-8 text-sm font-medium text-white shadow-md transition-all hover:opacity-90 hover:shadow-lg sm:w-auto"
                    >
                        {ctaPrimary}
                    </Link>
                </div>
                <div className="relative mx-auto mt-16 w-full max-w-5xl overflow-hidden rounded-xl border border-gray-100 shadow-2xl">
                    <img
                        src="/photo-1565841327798-694bc2074762.avif"
                        alt="Students collaborating"
                        className="aspect-video h-auto w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
