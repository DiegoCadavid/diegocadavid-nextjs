import Link from "next/link";
import Layout from "../components/layout/Layout";

interface Props {}

const Error = ({}: Props) => {
  return (
    <Layout hiddenNavbar={true}>
      <div className=" min-h-screen flex flex-col items-center justify-center gap-8">
        <div className="text-center">
          <p className="font-bold text-8xl">404</p>
          <p className="font-medium">no found</p>
        </div>

        <Link href="/" className="btn btn-outline pointer">
          Home
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="btn-icon">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </Link>
      </div>
    </Layout>
  );
};

export default Error;
