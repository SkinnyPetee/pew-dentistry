import Link from "next/link";

const NavLinks = () => {
  return (
    <>
      <ul className="flex gap-4 items-center justify-between">
        <li className="font-semibold">
          <Link href="#about">About</Link>
        </li>
        <li className="font-semibold">
          <Link href="#services">Services</Link>
        </li>
        <li className="font-semibold">
          <Link href="#testimonial">Testimonial</Link>
        </li>
        <li className="font-semibold">
          <Link href="#how-it-works">How it works</Link>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
