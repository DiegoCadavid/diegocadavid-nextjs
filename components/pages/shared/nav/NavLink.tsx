import Link from "next/link";

interface Props {
  isActive?: boolean;
  title: string;
}

const NavLink = ({  isActive, title }: Props) => {
  return (
    <Link href="#" className={`px-6 py-2 font-semibold rounded-full whitespace-nowrap ${isActive ? "bg-background-200 dark:bg-background-dark-200" : ""}`}>
      { title}
    </Link>
  );
};

export default NavLink;
