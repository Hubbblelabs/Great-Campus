import Link from "next/link";
import { content } from "@/lib/content";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-brand text-white font-bold">
                G
              </div>
              <span className="text-xl font-semibold tracking-tight text-white">
                Great Campus
              </span>
            </div>
            
            <div className="flex flex-col items-center md:items-start gap-2 text-sm text-gray-400 mt-2">
              <a href="mailto:contact@greatcampus.in" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                contact@greatcampus.in
              </a>
              <a href="tel:+919217666272" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                +91 92176 66272
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 md:mt-2">
            {content.footer.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>{content.footer.copyright}</p>
          <div className="flex gap-4 text-sm">
            <Link href="#terms" className="hover:text-white">Terms of Service</Link>
            <Link href="#privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
