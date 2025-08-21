import Link from "next/link";
import { Button } from "@/components/ui/button";
import Centerer from "./centerer";
import Logo from "./logo";
import NavLinks from "./nav-links";

const Navbar = () => {
  return (
    <>
      <Centerer>
        <header className="flex justify-between items-center h-[80px] sticky top-0 z-20">
          <div>
            <Logo />
          </div>
          <div>
            <NavLinks />
          </div>
          <div>
            <Button
              size="lg"
              className="bg-blue-500 text-white font-semibold hover:bg-blue-500/80"
              asChild
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </header>
      </Centerer>
    </>
  );
};

export default Navbar;
