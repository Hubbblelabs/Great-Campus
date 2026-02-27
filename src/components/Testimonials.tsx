import { Star } from 'lucide-react';
import { siteContent } from '@/data/content';

export default function Testimonials() {
    const { testimonials } = siteContent;

    return (
        <section id="testimonials" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-14 max-w-xl">
                    <p className="mb-3 text-sm font-medium tracking-wide text-blue-600 uppercase">
                        What people say
                    </p>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl">
                        From the placement offices and students themselves.
                    </h2>
                    <p className="text-base text-gray-500">
                        We let results speak. These are people who&apos;ve been inside the program.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="rounded-lg border border-gray-100 bg-gray-50 p-6"
                        >
                            {/* Stars */}
                            <div className="mb-4 flex gap-0.5">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        className="fill-amber-400 text-amber-400"
                                    />
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="mb-6 text-sm leading-relaxed text-gray-700">
                                &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>

                            {/* Person */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100">
                                    <span className="text-sm font-semibold text-blue-600">
                                        {testimonial.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-gray-900">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {testimonial.role} &middot; {testimonial.college}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
