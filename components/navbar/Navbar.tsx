import Link from "next/link";
import NavLink from "./NavLink";

interface Props {}

const Navbar = ({}: Props) => {
  return (
    <div className="sticky top-0 z-30">
      <div className="container flex justify-between py-2">
        <Link
          href="/"
          className="flex h-14 w-14 items-center justify-center rounded-md bg-black text-2xl font-bold text-white">
          D
        </Link>

        <nav className="hidden gap-4 items-center lg:flex">
          <NavLink path="/" name="Home" />
          <NavLink path="/aboutme" name="About me" />
          <NavLink path="/experience" name="Experience" />
          <NavLink path="/contact" name="Contact" />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
