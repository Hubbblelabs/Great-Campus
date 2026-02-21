import Link from "next/link";
import { content } from "@/lib/content";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          {/* Logo placeholder */}
          <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-900 text-white font-bold">
            G
          </div>
          <span className="text-xl font-semibold tracking-tight text-gray-900">
            Great Campus
          </span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          {content.footer.links.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="#login" 
            className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Log in
          </Link>
          <Link 
            href="#contact"
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {content.hero.ctaPrimary}
          </Link>
        </div>
      </div>
    </header>
  );
}
