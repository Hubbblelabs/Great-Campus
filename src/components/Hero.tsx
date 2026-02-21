import Link from "next/link";
import { content } from "@/lib/content";

export default function Hero() {
  const { heading, subheading, ctaPrimary, ctaSecondary } = content.hero;

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32 lg:pt-36 lg:pb-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-balance">
          {heading}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl text-balance">
          {subheading}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#start"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 w-full sm:w-auto"
          >
            {ctaPrimary}
          </Link>
          <Link
            href="#demo"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-200 bg-white px-8 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 w-full sm:w-auto"
          >
            {ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
