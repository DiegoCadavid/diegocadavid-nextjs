import Link from "next/link";
import NavLink from "./NavLink";

interface Props {}

const Navbar = ({}: Props) => {
  return (
    <div className="sticky top-0 z-30">
      <div className="container flex justify-between py-2 items-center">
        <Link
          href="/"
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-2xl font-bold text-white">
          D
        </Link>

        <nav className="hidden items-center gap-4 lg:flex">
          <NavLink path="/" name="Home" />
          <NavLink path="/aboutme" name="About me" />
          <NavLink path="/experience" name="Experience" />
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
