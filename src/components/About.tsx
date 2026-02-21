import { siteContent } from '@/data/content';

export default function About() {
    const { about } = siteContent;

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Text */}
                    <div>
                        <p className="text-sm text-blue-600 font-medium mb-3 uppercase tracking-wide">
                            About us
                        </p>
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-5 leading-snug">
                            {about.headline}
                        </h2>
                        <p className="text-base text-gray-500 leading-relaxed mb-4">
                            {about.description}
                        </p>
                        <p className="text-base text-gray-500 leading-relaxed">{about.mission}</p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t border-gray-200">
                            {about.stats.map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-2xl font-semibold text-gray-900 mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Values */}
                    <div className="flex flex-col gap-5">
                        {about.values.map((value, index) => (
                            <div
                                key={value.title}
                                className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-blue-600">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
                                            {value.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            {value.description}
                                        </p>
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
