import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  name: string;
  path: string;
}

const NavLink = ({ name, path }: Props) => {
  const { pathname } = useRouter();

  return (
    <Link
      href={path}
      className={`relative ${pathname === path && "text-primary-500"} `}>
      {name}
      {pathname === path && (
        <span className="absolute bg-black -top-4 -bottom-4 -inset-x-4 -z-10"></span>
      )}
    </Link>
  );
};

export default NavLink;
