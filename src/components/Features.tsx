import { content } from '@/lib/content';
import { Users, Calendar, ShieldCheck } from 'lucide-react';

const iconMap = {
    Users: Users,
    Calendar: Calendar,
    ShieldCheck: ShieldCheck,
};

const featureImages = [
    '/photo-1624388611710-bdf95023d1c2.avif',
    '/photo-1696834137451-f52f471a58bc.avif',
    '/photo-1696960190591-60d693f4d50d.avif',
];

export default function Features() {
    const { features } = content;

    return (
        <section id="features" className="bg-primary-50/50 py-8 sm:py-12">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 md:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-balance text-gray-900 md:text-4xl">
                        Everything you need.
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                        Tools designed to simplify daily tasks so you can focus on building a better
                        campus.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = iconMap[feature.icon as keyof typeof iconMap];
                        return (
                            <div
                                key={index}
                                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="h-48 w-full overflow-hidden">
                                    <img
                                        src={featureImages[index]}
                                        alt={feature.title}
                                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="bg-gradient-brand mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="text-base leading-relaxed text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
