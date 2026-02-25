import { content } from "@/lib/content";

const howItWorksImages = [
  "/photo-1576870397449-6ef1af18beb4.avif",
  "/photo-1613633606213-dc3ee9ee67af.avif",
  "/photo-1620459055536-b53f4b5ccb85.avif"
];

export default function HowItWorks() {
  const { howItWorks } = content;

  return (
    <section id="how-it-works" className="bg-gray-900 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Simple to implement.
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            We handle the heavy lifting so you don't have to disrupt your operations.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gray-800 transform -translate-x-1/2" />
          
          <div className="space-y-16 md:space-y-24">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                
                {/* Number Circle for mobile (flows naturally) and desktop (centered absolutely) */}
                <div className="md:absolute md:left-1/2 md:-ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-lg font-bold text-white shadow-md shrink-0 z-10">
                  {step.step}
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-last'}`}>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-last' : 'md:pr-16'}`}>
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-800 transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
                    <img src={howItWorksImages[index]} alt={step.title} className="w-full h-auto aspect-video object-cover" />
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
