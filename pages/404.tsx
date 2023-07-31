import Link from "next/link";

const Error = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
      <div className="flex flex-col items-center max-w-sm">
        <h2 className="text-6xl font-bold">404</h2>
        <p className="mt-2 text-center">
          Sorry, we couldn't find the site you were looking for u_u
        </p>

        <div className="mt-8">
          <Link
            className="px-4 py-2 rounded-full bg-background-dark-200"
            href="/">
            {" "}
            Home{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
