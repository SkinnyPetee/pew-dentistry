// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import Centerer from "./centerer";
// import Logo from "./logo";
// import NavLinks from "./nav-links";

// const Navbar = () => {
//   return (
//     <>
//       <header className="bg-white/30 backdrop-blur-md w-full  px-6  lg:px-60  flex justify-between items-center h-[80px] fixed top-0 z-20">
//         <div>
//           <Logo />
//         </div>
//         <div>
//           <NavLinks />
//         </div>
//         <div>
//           <Button
//             size="lg"
//             className="bg-teal-500 text-white font-semibold hover:bg-teal-500/80"
//             asChild
//           >
//             <Link href="#contact">Contact Us</Link>
//           </Button>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;

"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import NavLinks from "./nav-links";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  // Close on Escape for accessibility
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="bg-white/30 backdrop-blur-md w-full flex justify-between items-center h-[80px] fixed top-[40px] z-40 px-6 lg:px-60">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <NavLinks orientation="horizontal" />
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Contact button stays visible on all sizes; hide on very small if you prefer */}
          <Button
            size="lg"
            className="hidden md:flex bg-teal-500 text-white font-semibold hover:bg-teal-500/80"
            asChild
          >
            <Link href="#contact">Contact Us</Link>
          </Button>

          {/* Mobile menu toggle */}
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls={panelId}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-5 w-5 text-black" />
            ) : (
              <Menu className="h-5 w-5 text-black" />
            )}
          </Button>
        </div>
      </header>

      {/* Mobile overlay + panel */}
      {/* Overlay */}
      {open && (
        <button
          aria-label="Close menu"
          className="fixed inset-0 bg-black/30 md:hidden z-30"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-down panel under header */}
      <div
        id={panelId}
        role="dialog"
        aria-modal="true"
        className={`md:hidden fixed inset-x-0 top-[80px] z-40 transition-transform duration-200 ${
          open
            ? "translate-y-0"
            : "-translate-y-4 pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-4 rounded-lg border bg-white shadow-lg">
          <nav className="px-4">
            <NavLinks
              orientation="vertical"
              onNavigate={() => setOpen(false)}
            />
            <div className="pt-2 pb-4">
              <Button
                className="w-full bg-teal-500 text-white font-semibold hover:bg-teal-500/80"
                asChild
              >
                <Link href="#contact" onClick={() => setOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Spacer to offset fixed header */}
      {/* <div className="h-[80px]" /> */}
    </>
  );
}
