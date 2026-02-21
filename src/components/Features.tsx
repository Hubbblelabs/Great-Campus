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
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="max-w-xl mb-14">
                    <p className="text-sm text-blue-600 font-medium mb-3 uppercase tracking-wide">
                        What we do
                    </p>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                        Everything placement prep needs, in one program.
                    </h2>
                    <p className="text-base text-gray-500">
                        We cover every gap between a student&apos;s current state and job-readiness.
                        No handholding, no fluff — just structured work.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature) => {
                        const Icon = iconMap[feature.icon];
                        return (
                            <div
                                key={feature.title}
                                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                                    {Icon && <Icon size={20} className="text-blue-600" />}
                                </div>
                                <h3 className="text-base font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
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
