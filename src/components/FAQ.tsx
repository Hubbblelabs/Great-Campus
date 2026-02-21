"use client";

import { useState } from "react";
import { content } from "@/lib/content";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {item.question}
                  </span>
                  <span className={`ml-6 flex shrink-0 items-center justify-center h-8 w-8 rounded-full bg-gray-50 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 text-base text-gray-600">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
