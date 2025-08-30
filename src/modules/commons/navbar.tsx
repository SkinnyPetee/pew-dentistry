import Link from "next/link";
import { Button } from "@/components/ui/button";
import Centerer from "./centerer";
import Logo from "./logo";
import NavLinks from "./nav-links";

const Navbar = () => {
  return (
    <>
      <header className="bg-white/30 backdrop-blur-md w-full  px-6  lg:px-60  flex justify-between items-center h-[80px] fixed top-0 z-20">
        <div>
          <Logo />
        </div>
        <div>
          <NavLinks />
        </div>
        <div>
          <Button
            size="lg"
            className="bg-teal-500 text-white font-semibold hover:bg-teal-500/80"
            asChild
          >
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
