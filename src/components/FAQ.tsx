'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { siteContent } from '@/data/content';

export default function FAQ() {
    const { faq } = siteContent;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section id="faq" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
                    {/* Left: header */}
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <p className="mb-3 text-sm font-medium tracking-wide text-blue-600 uppercase">
                            FAQ
                        </p>
                        <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl">
                            Common questions answered.
                        </h2>
                        <p className="text-base leading-relaxed text-gray-500">
                            If you have something specific in mind, reach out to our team directly.
                        </p>
                    </div>

                    {/* Right: accordion */}
                    <div className="lg:col-span-2">
                        <div className="divide-y divide-gray-100">
                            {faq.map((item, i) => (
                                <div key={item.question} className="py-5">
                                    <button
                                        className="group flex w-full items-start justify-between gap-4 text-left"
                                        onClick={() => toggle(i)}
                                        aria-expanded={openIndex === i}
                                    >
                                        <span className="text-sm leading-relaxed font-medium text-gray-900 transition-colors group-hover:text-blue-600">
                                            {item.question}
                                        </span>
                                        <span className="mt-0.5 shrink-0 text-gray-400">
                                            {openIndex === i ? (
                                                <Minus size={16} />
                                            ) : (
                                                <Plus size={16} />
                                            )}
                                        </span>
                                    </button>
                                    {openIndex === i && (
                                        <p className="mt-3 pr-8 text-sm leading-relaxed text-gray-500">
                                            {item.answer}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
