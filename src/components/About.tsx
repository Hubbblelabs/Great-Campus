import { siteContent } from '@/data/content';

export default function About() {
    const { about } = siteContent;

    return (
        <section id="about" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
                    {/* Left: Text */}
                    <div>
                        <p className="mb-3 text-sm font-medium tracking-wide text-blue-600 uppercase">
                            About us
                        </p>
                        <h2 className="mb-5 text-2xl leading-snug font-semibold text-gray-900 md:text-3xl">
                            {about.headline}
                        </h2>
                        <p className="mb-4 text-base leading-relaxed text-gray-500">
                            {about.description}
                        </p>
                        <p className="text-base leading-relaxed text-gray-500">{about.mission}</p>

                        {/* Stats */}
                        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-gray-200 pt-8">
                            {about.stats.map((stat) => (
                                <div key={stat.label}>
                                    <div className="mb-1 text-2xl font-semibold text-gray-900">
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
                                className="rounded-lg border border-gray-100 bg-white p-5 shadow-sm"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-50">
                                        <span className="text-xs font-bold text-blue-600">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="mb-1.5 text-sm font-semibold text-gray-900">
                                            {value.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-gray-500">
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
