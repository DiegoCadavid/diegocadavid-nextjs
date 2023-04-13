import Cursor from "../UI/Cursor";
import Navbar from "../navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Cursor />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
