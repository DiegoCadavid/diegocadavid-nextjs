import Link from "next/link";
import NavLink from "./NavLink";

interface Props {}

const Navbar = ({}: Props) => {
  return (
    <div className="sticky top-0 z-30">
      <div className="container flex items-center justify-between py-2">
        <Link
          href="/"
          className="flex items-center justify-center text-2xl font-bold text-white bg-black h-14 w-14 rounded-2xl">
          D
        </Link>

        <nav className="items-center hidden gap-4 lg:flex">
          <NavLink path="/" name="Home" />
          <NavLink path="/aboutme" name="About me" />
          <NavLink path="/works" name="Works" />
          <NavLink path="/contact" name="Contact" />
        </nav>

        <button className="btn btn-outline pointer lg:hidden">
          Menu
        </button>
      </div>
    </div>
  );
};

export default Navbar;
