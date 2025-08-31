import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

type Props = {
  className?: string;
};

export default function PewseyDentalFooter({ className }: Props) {
  return (
    <footer className={cn("bg-teal-700 text-white", className)}>
      <div className="mx-auto w-full  px-6 lg:px-60 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-balance text-xl font-semibold tracking-tight">
              Pewsey Dental Practice
            </h2>
            {/* <p className="text-pretty text-sm text-teal-50/80 leading-6">
              Gentle, modern dentistry in the heart of Pewsey.
            </p> */}
            <nav aria-label="Social media" className="mt-4">
              <ul className="flex flex-wrap items-center gap-3">
                <li>
                  <a
                    href="https://facebook.com/pewseydental"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pewsey Dental on Facebook"
                    className="rounded px-1 text-sm text-white/90 underline-offset-4 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/pewseydental"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pewsey Dental on X (Twitter)"
                    className="rounded px-1 text-sm text-white/90 underline-offset-4 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <Twitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/pewseydental"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pewsey Dental on Instagram"
                    className="rounded px-1 text-sm text-white/90 underline-offset-4 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/pewseydental"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pewsey Dental on LinkedIn"
                    className="rounded px-1 text-sm text-white/90 underline-offset-4 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <Linkedin />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="md:justify-self-end">
            <nav aria-label="Legal policies">
              <ul className="flex flex-col flex-no-wrap items-start gap-3">
                <li>
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    className="rounded px-1 text-sm text-white/90 underline-offset-4 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/t&c"
                    target="_blank"
                    className="rounded px-1 text-sm text-white/90 underline-offset-4 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* <address className="not-italic text-sm text-teal-50/90 md:justify-self-end">
            <p className="leading-6">12 High Street, Pewsey, SN9 5AA</p>
            <p className="mt-1 leading-6">
              Phone:{" "}
              <a
                href="tel:+441672000000"
                className="rounded px-0.5 underline underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                01672 563622
              </a>
            </p>
            <p className="mt-1 leading-6">
              Email:{" "}
              <a
                href="mailto:hello@pewseydental.co.uk"
                className="rounded px-0.5 underline underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                pewseydental@btconnect.com
              </a>
            </p>
          </address> */}
        </div>

        <div className="mt-8 border-t border-white/15 pt-6">
          <p className="text-center text-xs text-teal-50/80">
            © {new Date().getFullYear()} Pewsey Dental Practice. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
