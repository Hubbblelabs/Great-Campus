import Link from "next/link";
import { content } from "@/lib/content";

export default function Hero() {
  const { heading, subheading, ctaPrimary, ctaSecondary } = content.hero;

  return (
    <section id="about-us" className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-balance">
          {heading}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl text-balance">
          {subheading}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="https://dcas.teammistake.com" target="_blank"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-gradient-brand px-8 text-sm font-medium text-white shadow-md transition-all hover:opacity-90 hover:shadow-lg w-full sm:w-auto"
          >
            {ctaPrimary}
          </Link>
        </div>
        <div className="mt-16 w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-100 relative">
          <img 
            src="/photo-1565841327798-694bc2074762.avif" 
            alt="Students collaborating" 
            className="w-full h-auto object-cover aspect-video"
          />
        </div>
      </div>
    </section>
  );
}
