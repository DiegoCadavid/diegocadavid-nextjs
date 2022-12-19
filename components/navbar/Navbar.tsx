import Link from "next/link";
import NavLink from "./NavLink";

interface Props {}

const Navbar = ({}: Props) => {
  return (
    <div className="sticky top-0 z-30 bg-primary-500/50 backdrop-blur-md">
      <div className="container flex justify-between py-4 uppercase font-medium ">
        <Link href="/" className="font-black text-xl">Diego Cadavid</Link>

        <nav className=" hidden lg:flex gap-9">
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
