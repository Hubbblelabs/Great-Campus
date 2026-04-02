import { content } from '@/lib/content';

const howItWorksImages = [
    '/photo-1576870397449-6ef1af18beb4.avif',
    '/photo-1613633606213-dc3ee9ee67af.avif',
    '/photo-1620459055536-b53f4b5ccb85.avif',
];

export default function HowItWorks() {
    const { howItWorks } = content;

    return (
        <section id="how-it-works" className="bg-gray-900 py-8 sm:py-12">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 md:text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                        Simple to implement.
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
                        We handle the heavy lifting so you don't have to disrupt your operations.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting line */}
                    <div className="absolute top-8 bottom-8 left-1/2 hidden w-px -translate-x-1/2 transform bg-gray-800 md:block" />

                    <div className="space-y-16 md:space-y-24">
                        {howItWorks.map((step, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-center justify-between gap-8 md:flex-row md:gap-16"
                            >
                                {/* Number Circle for mobile (flows naturally) and desktop (centered absolutely) */}
                                <div className="bg-gradient-brand z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white shadow-md md:absolute md:left-1/2 md:-ml-6">
                                    {step.step}
                                </div>

                                <div
                                    className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:order-last md:pl-16'}`}
                                >
                                    <h3 className="mb-4 text-2xl font-semibold text-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg leading-relaxed text-gray-400">
                                        {step.description}
                                    </p>
                                </div>

                                <div
                                    className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-last' : 'md:pr-16'}`}
                                >
                                    <div className="overflow-hidden rounded-2xl border border-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                        <img
                                            src={howItWorksImages[index]}
                                            alt={step.title}
                                            className="aspect-video h-auto w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
