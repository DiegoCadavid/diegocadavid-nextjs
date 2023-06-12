import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

interface Props {
  name: string;
  path: string;
}

const NavLink = ({ name, path }: Props) => {
  const { pathname } = useRouter();
  const isActive = pathname === path;

  return (
    <Link className= {clsx(["btn", "btn-outline", !isActive ? "pointer" : "bg-black text-white"])} href={path}>
      {name}
    </Link>
  );
};

export default NavLink;
