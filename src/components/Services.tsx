import Link from 'next/link';
import { Check } from 'lucide-react';
import { siteContent } from '@/data/content';
import clsx from 'clsx';

export default function Services() {
    const { services } = siteContent;

    return (
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="max-w-xl mb-14">
                    <p className="text-sm text-blue-600 font-medium mb-3 uppercase tracking-wide">
                        Our services
                    </p>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                        Three ways we work with you.
                    </h2>
                    <p className="text-base text-gray-500">
                        Whether you&apos;re a college, a student, or a company — we have a model
                        that fits your context.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className={clsx(
                                'rounded-lg p-6 border flex flex-col',
                                service.highlight
                                    ? 'bg-blue-600 border-blue-600 text-white'
                                    : 'bg-white border-gray-200 shadow-sm',
                            )}
                        >
                            <h3
                                className={clsx(
                                    'text-lg font-semibold mb-3',
                                    service.highlight ? 'text-white' : 'text-gray-900',
                                )}
                            >
                                {service.title}
                            </h3>
                            <p
                                className={clsx(
                                    'text-sm leading-relaxed mb-6',
                                    service.highlight ? 'text-blue-100' : 'text-gray-500',
                                )}
                            >
                                {service.description}
                            </p>
                            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
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
                                    'text-sm font-medium px-4 py-2.5 rounded-lg text-center transition-colors mt-auto',
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
