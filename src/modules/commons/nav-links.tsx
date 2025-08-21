import Link from "next/link";

const NavLinks = () => {
  return (
    <>
      <ul className="flex gap-4 items-center">
        <li className="font-semibold">
          <Link href="#about">About</Link>
        </li>
        <li className="font-semibold">
          <Link href="#services">Services</Link>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
