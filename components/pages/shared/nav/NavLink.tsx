import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  title: string;
  href: string;
}

const NavLink = ({ title, href }: Props) => {
  const router = useRouter();
  const isActive = router.pathname == href;

  return (
    <Link
      href={href}
      className={`whitespace-nowrap rounded-full px-6 py-2 font-semibold capitalize ${
        isActive ? "bg-background-200 dark:bg-background-dark-200" : ""
      }`}>
      {title}
    </Link>
  );
};

export default NavLink;
