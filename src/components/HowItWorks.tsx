import { siteContent } from '@/data/content';

export default function HowItWorks() {
    const { howItWorks } = siteContent;

    return (
        <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="max-w-xl mb-14">
                    <p className="text-sm text-blue-600 font-medium mb-3 uppercase tracking-wide">
                        How it works
                    </p>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
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
                    <div className="hidden lg:block absolute left-9.75 top-8 bottom-8 w-px bg-gray-200" />

                    <div className="flex flex-col gap-8">
                        {howItWorks.map((item) => (
                            <div key={item.step} className="flex gap-6 items-start">
                                {/* Step number */}
                                <div className="shrink-0 w-20 h-20 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col items-center justify-center">
                                    <span className="text-xs text-gray-400 font-medium">Step</span>
                                    <span className="text-xl font-bold text-blue-600">
                                        {item.step}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="pt-3 flex-1">
                                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
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
