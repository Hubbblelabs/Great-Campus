import { content } from "@/lib/content";

export default function Services() {
  const { services, about } = content;

  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          <div className="lg:w-1/3 mb-12 lg:mb-0 sticky top-24">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl text-balance">
              {about.heading}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {about.description}
            </p>
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
