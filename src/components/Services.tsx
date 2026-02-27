import Link from 'next/link';
import { Check } from 'lucide-react';
import { siteContent } from '@/data/content';
import clsx from 'clsx';

export default function Services() {
    const { services } = siteContent;

    return (
        <section id="services" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-14 max-w-xl">
                    <p className="mb-3 text-sm font-medium tracking-wide text-blue-600 uppercase">
                        Our services
                    </p>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl">
                        Three ways we work with you.
                    </h2>
                    <p className="text-base text-gray-500">
                        Whether you&apos;re a college, a student, or a company — we have a model
                        that fits your context.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className={clsx(
                                'flex flex-col rounded-lg border p-6',
                                service.highlight
                                    ? 'border-blue-600 bg-blue-600 text-white'
                                    : 'border-gray-200 bg-white shadow-sm',
                            )}
                        >
                            <h3
                                className={clsx(
                                    'mb-3 text-lg font-semibold',
                                    service.highlight ? 'text-white' : 'text-gray-900',
                                )}
                            >
                                {service.title}
                            </h3>
                            <p
                                className={clsx(
                                    'mb-6 text-sm leading-relaxed',
                                    service.highlight ? 'text-blue-100' : 'text-gray-500',
                                )}
                            >
                                {service.description}
                            </p>
                            <ul className="mb-8 flex flex-1 flex-col gap-2.5">
                                {service.points.map((point) => (
                                    <li key={point} className="flex items-start gap-2.5">
                                        <span
                                            className={clsx(
                                                'mt-0.5 shrink-0',
                                                service.highlight
                                                    ? 'text-blue-200'
                                                    : 'text-blue-600',
                                            )}
                                        >
                                            <Check size={15} />
                                        </span>
                                        <span
                                            className={clsx(
                                                'text-sm',
                                                service.highlight
                                                    ? 'text-blue-50'
                                                    : 'text-gray-600',
                                            )}
                                        >
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="#contact"
                                className={clsx(
                                    'mt-auto rounded-lg px-4 py-2.5 text-center text-sm font-medium transition-colors',
                                    service.highlight
                                        ? 'bg-white text-blue-600 hover:bg-blue-50'
                                        : 'bg-blue-600 text-white hover:bg-blue-700',
                                )}
                            >
                                {service.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
