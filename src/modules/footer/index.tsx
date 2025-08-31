// const Footer = () => {
//   return (
//     <>
//       <footer
//         className="border-t bg-teal-500"
//         role="contentinfo"
//         aria-label="Footer"
//       >
//         <div className="mx-auto w-full max-w-7xl px-4 py-6 text-center">
//           <p className="text-sm  text-white font-semibold">
//             © {new Date().getFullYear()} Pewsey Dental, UK
//           </p>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default function PewseyDentalFooter({ className }: Props) {
  return (
    <footer className={cn("bg-teal-700 text-white", className)}>
      <div className="mx-auto w-full px-6 lg:px-30  py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h2 className="text-balance text-xl font-semibold tracking-tight">
              Pewsey Dental Practice
            </h2>
            <p className="text-pretty text-sm text-teal-50/80 leading-6">
              Gentle, modern dentistry in the heart of Pewsey.
            </p>
          </div>

          <nav aria-label="Footer" className="md:justify-self-center">
            <ul className="flex flex-wrap items-center gap-3">
              <li>
                <a
                  href="#about"
                  className="rounded px-1 text-sm text-white/90 underline-offset-4 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="rounded px-1 text-sm text-white/90 underline-offset-4 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="rounded px-1 text-sm text-white/90 underline-offset-4 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="rounded px-1 text-sm text-white/90 underline-offset-4 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <address className="not-italic text-sm text-teal-50/90 md:justify-self-end">
            <p className="leading-6">
              Pewsey Dental Practice, 15 North Street, Pewsey, Wiltshire, SN9
              5ES
            </p>
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
            <p className="mt-1 leading-6">
              Mon–Thu: 8:30AM–1:00PM <br /> 2:00PM-5:00PM <br />
              Fri: 8:30AM-3:30PM
            </p>
          </address>
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
