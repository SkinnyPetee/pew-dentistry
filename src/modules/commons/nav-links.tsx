// import Link from "next/link";

// const NavLinks = () => {
//   return (
//     <>
//       <ul className="flex gap-4 items-center justify-between">
//         <li className="font-semibold">
//           <Link href="#about">About</Link>
//         </li>
//         <li className="font-semibold">
//           <Link href="#services">Services</Link>
//         </li>
//         <li className="font-semibold">
//           <Link href="#testimonial">Testimonial</Link>
//         </li>
//         <li className="font-semibold">
//           <Link href="#how-it-works">How it works</Link>
//         </li>
//       </ul>
//     </>
//   );
// };

// export default NavLinks;

"use client";

import Link from "next/link";

type NavLinksProps = {
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
  className?: string;
};

export default function NavLinks({
  orientation = "horizontal",
  onNavigate,
  className,
}: NavLinksProps) {
  const base =
    orientation === "horizontal"
      ? "flex gap-4 items-center"
      : "flex flex-col gap-3 py-4";

  const handleClick = () => {
    onNavigate?.();
  };

  return (
    <ul className={`${base} ${className ?? ""}`}>
      <li className="font-semibold">
        <Link href="#about" onClick={handleClick}>
          About
        </Link>
      </li>
      <li className="font-semibold">
        <Link href="#services" onClick={handleClick}>
          Services
        </Link>
      </li>
      <li className="font-semibold">
        <Link href="#testimonial" onClick={handleClick}>
          Testimonial
        </Link>
      </li>
      <li className="font-semibold">
        <Link href="#how-it-works" onClick={handleClick}>
          How it works
        </Link>
      </li>
    </ul>
  );
}
