import { content } from "@/lib/content";

export default function HowItWorks() {
  const { howItWorks } = content;

  return (
    <section id="how-it-works" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Simple to implement.
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We handle the heavy lifting so you don't have to disrupt your operations.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gray-200 transform -translate-x-1/2" />
          
          <div className="space-y-16 md:space-y-24">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                
                {/* Number Circle for mobile (flows naturally) and desktop (centered absolutely) */}
                <div className="md:absolute md:left-1/2 md:-ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-lg font-bold text-white shadow-sm shrink-0 z-10">
                  {step.step}
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-last'}`}>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-last' : 'md:pr-16'}`}>
                  {/* Empty space for alternating layout */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
