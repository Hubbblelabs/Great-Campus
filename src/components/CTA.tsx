import Link from 'next/link';

export default function CTA() {
    return (
        <section id="contact" className="bg-blue-600 px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
                        Ready to fix placement at your college?
                    </h2>
                    <p className="mb-8 text-base leading-relaxed text-blue-100">
                        We work with a limited number of new colleges each quarter. If you&apos;re
                        serious about improving outcomes for your students, let&apos;s talk.
                    </p>
                    <div className="flex flex-col justify-center gap-3 sm:flex-row">
                        <Link
                            href="mailto:hello@greatcampus.in"
                            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50"
                        >
                            Schedule a call
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="inline-flex items-center justify-center rounded-lg border border-blue-400 px-6 py-3 text-sm font-medium text-blue-100 transition-colors hover:bg-blue-500"
                        >
                            See how it works first
                        </Link>
                    </div>
                    <p className="mt-6 text-xs text-blue-200">
                        No commitment required. We&apos;ll understand your situation and tell you
                        honestly if we&apos;re a good fit.
                    </p>
                </div>
            </div>
        </section>
    );
}
