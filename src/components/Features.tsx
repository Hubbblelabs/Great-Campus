import { content } from "@/lib/content";
import { Users, Calendar, ShieldCheck } from "lucide-react";

const iconMap = {
  Users: Users,
  Calendar: Calendar,
  ShieldCheck: ShieldCheck,
};

export default function Features() {
  const { features } = content;

  return (
    <section id="features" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Everything you need.
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Tools designed to simplify daily tasks so you can focus on building a better campus.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div 
                key={index}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 text-gray-900">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
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
