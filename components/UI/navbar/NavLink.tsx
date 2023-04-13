import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  name: string;
  path: string;
}

const NavLink = ({ name, path }: Props) => {
  const { pathname } = useRouter();
  const isActive = pathname === path;

  return (
    <Link
      className={`cursor-pointer group relative flex w-32 items-center justify-center overflow-hidden rounded-full border-2 border-black py-2 text-center hover:text-white ${
        isActive && "text-white"
      }`}
      href={path}>
      {name}

      <span
        className={`absolute inset-x-0 -z-10 h-full w-full bg-black transition-all ease-out ${
          isActive ? "top-0" : "-top-full group-hover:top-0"
        }`}
      />
    </Link>
  );
};

export default NavLink;
