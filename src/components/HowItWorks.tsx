import { siteContent } from '@/data/content';

export default function HowItWorks() {
    const { howItWorks } = siteContent;

    return (
        <section id="how-it-works" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-14 max-w-xl">
                    <p className="mb-3 text-sm font-medium tracking-wide text-blue-600 uppercase">
                        How it works
                    </p>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl">
                        From onboarding to offers — here&apos;s the process.
                    </h2>
                    <p className="text-base text-gray-500">
                        No guesswork. Every college we onboard goes through the same structured
                        journey.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Vertical connector line on desktop */}
                    <div className="absolute top-8 bottom-8 left-9.75 hidden w-px bg-gray-200 lg:block" />

                    <div className="flex flex-col gap-8">
                        {howItWorks.map((item) => (
                            <div key={item.step} className="flex items-start gap-6">
                                {/* Step number */}
                                <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm">
                                    <span className="text-xs font-medium text-gray-400">Step</span>
                                    <span className="text-xl font-bold text-blue-600">
                                        {item.step}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-3">
                                    <h3 className="mb-2 text-base font-semibold text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="max-w-2xl text-sm leading-relaxed text-gray-500">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
