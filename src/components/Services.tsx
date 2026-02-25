import { content } from "@/lib/content";

export default function Services() {
  const { services, about } = content;

  return (
    <section id="services" className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          <div className="lg:w-1/3 mb-12 lg:mb-0 lg:sticky lg:top-24">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl text-balance">
              {about.heading}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {about.description}
            </p>
            <div className="mt-8 rounded-xl overflow-hidden border border-gray-100 shadow-sm hidden lg:block">
              <img 
                src="/photo-1571677246347-5040036b95cc.avif" 
                alt="Student studying with AI" 
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>
          
          <div className="lg:w-2/3 flex flex-col gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-base text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
