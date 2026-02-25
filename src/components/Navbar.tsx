"use client";

import { useState } from "react";
import Link from "next/link";
import { content } from "@/lib/content";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          {/* Logo placeholder */}
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand text-white font-bold shadow-sm">
            G
          </div>
          <Link href="/" className="text-xl font-semibold tracking-tight text-gray-900">
            Great Campus
          </Link>
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

        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="https://dcas.teammistake.com" target="_blank"
            className="rounded-lg bg-gradient-brand px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md"
          >
            {content.hero.ctaPrimary}
          </Link>
        </div>

        <div className="flex md:hidden items-center">
          <button
            type="button"
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {content.footer.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link 
                href="https://dcas.teammistake.com" target="_blank"
                className="block w-full text-center mt-2 rounded-lg bg-gradient-brand px-4 py-3 text-base font-medium text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {content.hero.ctaPrimary}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
