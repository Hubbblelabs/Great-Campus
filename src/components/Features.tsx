import { content } from "@/lib/content";
import { Users, Calendar, ShieldCheck } from "lucide-react";

const iconMap = {
  Users: Users,
  Calendar: Calendar,
  ShieldCheck: ShieldCheck,
};

const featureImages = [
  "/photo-1624388611710-bdf95023d1c2.avif",
  "/photo-1696834137451-f52f471a58bc.avif",
  "/photo-1696960190591-60d693f4d50d.avif"
];

export default function Features() {
  const { features } = content;

  return (
    <section id="features" className="bg-primary-50/50 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl text-balance">
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
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 duration-300"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img src={featureImages[index]} alt={feature.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
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
