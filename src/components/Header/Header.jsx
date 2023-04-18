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
        <div className="logo text-black dark:text-white">
          <img src={logo} alt="website logo" />
          <Link to="/">Sunflix</Link>
        </div>
        <div
          className="mobile-menu-btn ml-auto cursor-pointer text-4xl text-black dark:text-white md:hidden"
          onClick={handleMenu}
        >
          <AiOutlineMenu />
        </div>
        <ul className="header__nav text-black dark:text-white">
          {headerNav.map((e, index) => (
            <li key={index} className={`${index === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
          {!isDarkMode ? (
            <FaMoon
              size={"40px"}
              color="yellow"
              className="cursor-pointer rounded-full p-2 shadow-inner shadow-yellow-300"
              onClick={() => toggleDarkMode(!isDarkMode)}
            />
          ) : (
            <BsSunFill
              size={"40px"}
              color="orange"
              className="cursor-pointer rounded-full p-2 shadow-inner shadow-orange-300"
              onClick={() => toggleDarkMode(!isDarkMode)}
            />
          )}
        </ul>
      </div>

      <nav
        aria-label="Sidebar"
        className={`ease fixed inset-y-0 left-0 h-screen
                    w-80 transform  bg-white shadow-lg 
                    transition duration-500 ease-in-out dark:bg-zinc-800 
                    dark:text-white ${open ? null : "-translate-x-full"}`}
      >
        <div className="h-full overflow-y-auto px-2 py-4 text-black dark:text-white">
          <ul>
            {headerNav.map((item, index) => (
              <li
                key={index}
                className="mx-8 my-8  flex items-center text-3xl font-semibold "
                onClick={handleMenu}
              >
                <div className="mx-4 md:hidden">{item.icon}</div>
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))}

            {!isDarkMode ? (
              <div
                className="flex flex-col items-center
               "
              >
                <FaMoon
                  size={"40px"}
                  color="yellow"
                  className=" cursor-pointer rounded-full p-2 shadow-inner shadow-yellow-300"
                  onClick={() => toggleDarkMode(!isDarkMode)}
                />
                <h1 className=" mt-6 text-3xl font-semibold text-black dark:text-white">
                  Dark Mode
                </h1>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <BsSunFill
                  size={"40px"}
                  color="orange"
                  className="mx-auto cursor-pointer rounded-full p-2 shadow-inner shadow-yellow-300"
                  onClick={() => toggleDarkMode(!isDarkMode)}
                />
                <h1 className=" mt-6 text-3xl font-semibold text-black dark:text-white">
                  Light mode
                </h1>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
