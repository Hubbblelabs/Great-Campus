'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { siteContent } from '@/data/content';

export default function FAQ() {
    const { faq } = siteContent;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Left: header */}
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <p className="text-sm text-blue-600 font-medium mb-3 uppercase tracking-wide">
                            FAQ
                        </p>
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                            Common questions answered.
                        </h2>
                        <p className="text-base text-gray-500 leading-relaxed">
                            If you have something specific in mind, reach out to our team directly.
                        </p>
                    </div>

                    {/* Right: accordion */}
                    <div className="lg:col-span-2">
                        <div className="divide-y divide-gray-100">
                            {faq.map((item, i) => (
                                <div key={item.question} className="py-5">
                                    <button
                                        className="flex items-start justify-between w-full text-left gap-4 group"
                                        onClick={() => toggle(i)}
                                        aria-expanded={openIndex === i}
                                    >
                                        <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors leading-relaxed">
                                            {item.question}
                                        </span>
                                        <span className="shrink-0 mt-0.5 text-gray-400">
                                            {openIndex === i ? (
                                                <Minus size={16} />
                                            ) : (
                                                <Plus size={16} />
                                            )}
                                        </span>
                                    </button>
                                    {openIndex === i && (
                                        <p className="mt-3 text-sm text-gray-500 leading-relaxed pr-8">
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
