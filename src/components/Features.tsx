import {
    GraduationCap,
    Users,
    FileText,
    Mic,
    Building2,
    BarChart3,
    type LucideIcon,
} from 'lucide-react';
import { siteContent } from '@/data/content';

const iconMap: Record<string, LucideIcon> = {
    GraduationCap,
    Users,
    FileText,
    Mic,
    Building2,
    BarChart3,
};

export default function Features() {
    const { features } = siteContent;

    return (
        <section id="features" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-14 max-w-xl">
                    <p className="mb-3 text-sm font-medium tracking-wide text-blue-600 uppercase">
                        What we do
                    </p>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl">
                        Everything placement prep needs, in one program.
                    </h2>
                    <p className="text-base text-gray-500">
                        We cover every gap between a student&apos;s current state and job-readiness.
                        No handholding, no fluff — just structured work.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = iconMap[feature.icon];
                        return (
                            <div
                                key={feature.title}
                                className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                                    {Icon && <Icon size={20} className="text-blue-600" />}
                                </div>
                                <h3 className="mb-2 text-base font-semibold text-gray-900">
                                    {feature.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-500">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
