import { useEffect, useState } from "react";
import { scrollContext } from "../../context/scrollContext";
import Cursor from "../UI/Cursor";
import Navbar from "../UI/navbar/Navbar";
import SocialBar from "../UI/socialBar/SocialBar";

interface Props {
  children: React.ReactNode;
  hiddenNavbar?: boolean
}

const Layout = ({ children, hiddenNavbar }: Props) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <scrollContext.Provider
        value={{
          isScrolled,
        }}>
        <Cursor />
        { !hiddenNavbar && <Navbar />}
        {children}
        <SocialBar />
      </scrollContext.Provider>
    </div>
  );
};

export default Layout;
