import Link from "next/link";

interface Props {}

const Error = ({}: Props) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <div className="text-center">
        <p className="text-8xl font-bold">404</p>
        <p className="font-medium">no found</p>
      </div>

      <Link href="/" className="bg-black p-3 text-primary-500 hover:scale-105 active:scale-110">
        Home
      </Link>
    </div>
  );
};

export default Error;
