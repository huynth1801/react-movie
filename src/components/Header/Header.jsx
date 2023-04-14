import "./Header.scss";
import logo from "../../assets/img/netflix-icon-26.jpg";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { TfiVideoCamera } from "react-icons/tfi";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import useDarkMode from "../../theme/useDarkMode";

const headerNav = [
  {
    display: "Home",
    path: "/",
    icon: <AiOutlineHome />,
  },
  {
    display: "Movies",
    path: "/movie",
    icon: <BiMoviePlay />,
  },
  {
    display: "TV series",
    path: "/tv",
    icon: <TfiVideoCamera />,
  },
];

const Header = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
        headerRef.current.classList.add("dark:bg-black");
        headerRef.current.classList.add("bg-white");
      } else {
        headerRef.current.classList.add("shrink");
        headerRef.current.classList.add("dark:bg-black");
        headerRef.current.classList.add("bg-white");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap containers">
        <div className="logo dark:text-white text-black">
          <img src={logo} alt="website logo" />
          <Link to="/">Sunflix</Link>
        </div>
        <div
          className="text-4xl cursor-pointer ml-auto md:hidden mobile-menu-btn dark:text-white text-black"
          onClick={handleMenu}
        >
          <AiOutlineMenu />
        </div>
        <ul className="header__nav dark:text-white text-black">
          {headerNav.map((e, index) => (
            <li key={index} className={`${index === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
          {!isDarkMode ? (
            <FaMoon
              size={"30px"}
              color="yellow"
              className="cursor-pointer "
              onClick={() => toggleDarkMode(!isDarkMode)}
            />
          ) : (
            <BsSunFill
              size={"30px"}
              color="orange"
              className="cursor-pointer"
              onClick={() => toggleDarkMode(!isDarkMode)}
            />
          )}
        </ul>
      </div>

      <nav
        aria-label="Sidebar"
        className={`fixed h-screen shadow-lg dark:bg-zinc-800 bg-white
                    dark:text-white inset-y-0  left-0 w-80 
                    transition duration-500 ease transform ease-in-out ${
                      open ? null : "-translate-x-full"
                    }`}
      >
        <div className="h-full px-2 py-4 overflow-y-auto dark:text-white text-black">
          <ul>
            {headerNav.map((item, index) => (
              <li
                key={index}
                className="mx-8 my-8  text-3xl font-semibold flex items-center "
                onClick={handleMenu}
              >
                <div className="md:hidden mx-4">{item.icon}</div>
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))}

            {!isDarkMode ? (
              <FaMoon
                size={"30px"}
                color="yellow"
                className="cursor-pointer mx-auto"
                onClick={() => toggleDarkMode(!isDarkMode)}
              />
            ) : (
              <BsSunFill
                size={"30px"}
                color="orange"
                className="cursor-pointer mx-auto"
                onClick={() => toggleDarkMode(!isDarkMode)}
              />
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
