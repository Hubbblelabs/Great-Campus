import Link from 'next/link';

export default function CTA() {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
            <div className="max-w-6xl mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                        Ready to fix placement at your college?
                    </h2>
                    <p className="text-blue-100 text-base mb-8 leading-relaxed">
                        We work with a limited number of new colleges each quarter. If you&apos;re
                        serious about improving outcomes for your students, let&apos;s talk.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            href="mailto:hello@greatcampus.in"
                            className="inline-flex items-center justify-center bg-white text-blue-600 text-sm font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            Schedule a call
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="inline-flex items-center justify-center text-blue-100 text-sm font-medium px-6 py-3 rounded-lg border border-blue-400 hover:bg-blue-500 transition-colors"
                        >
                            See how it works first
                        </Link>
                    </div>
                    <p className="text-blue-200 text-xs mt-6">
                        No commitment required. We&apos;ll understand your situation and tell you
                        honestly if we&apos;re a good fit.
                    </p>
                </div>
            </div>
        </section>
    );
}
