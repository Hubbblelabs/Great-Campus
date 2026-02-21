import { Star } from 'lucide-react';
import { siteContent } from '@/data/content';

export default function Testimonials() {
    const { testimonials } = siteContent;

    return (
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="max-w-xl mb-14">
                    <p className="text-sm text-blue-600 font-medium mb-3 uppercase tracking-wide">
                        What people say
                    </p>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                        From the placement offices and students themselves.
                    </h2>
                    <p className="text-base text-gray-500">
                        We let results speak. These are people who&apos;ve been inside the program.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="bg-gray-50 rounded-lg p-6 border border-gray-100"
                        >
                            {/* Stars */}
                            <div className="flex gap-0.5 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        className="text-amber-400 fill-amber-400"
                                    />
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-sm text-gray-700 leading-relaxed mb-6">
                                &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>

                            {/* Person */}
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                    <span className="text-blue-600 font-semibold text-sm">
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
