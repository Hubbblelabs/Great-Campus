import { content } from '@/lib/content';

export default function Services() {
    const { services, about } = content;

    return (
        <section id="services" className="bg-white py-8 sm:py-12">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
                    <div className="mb-12 lg:sticky lg:top-24 lg:mb-0 lg:w-1/3">
                        <h2 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 md:text-4xl">
                            {about.heading}
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">{about.description}</p>
                        <div className="mt-8 hidden overflow-hidden rounded-xl border border-gray-100 shadow-sm lg:block">
                            <img
                                src="/photo-1571677246347-5040036b95cc.avif"
                                alt="Student studying with AI"
                                className="aspect-square h-auto w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 lg:w-2/3">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
                            >
                                <div className="mb-3 flex flex-col gap-4 sm:flex-row sm:items-baseline">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-base text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
