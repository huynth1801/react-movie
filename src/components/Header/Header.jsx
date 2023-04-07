import "./Header.scss";
import logo from "../../assets/img/netflix-icon-26.jpg";
import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../../theme/useDarkMode";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV series",
    path: "/tv",
  },
];

const Header = () => {
  // const [theme, toggleDarkMode] = useDarkMode();
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.add("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="website logo" />
          <Link to="/">NMovies</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, index) => (
            <li key={index} className={`${index === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
          {/* <DarkModeSwitch
            style={{ marginLeft: "1.5rem" }}
            checked={theme === "light" ? true : false}
            onChange={toggleDarkMode}
            size={30}
            moonColor="yellow"
            sunColor="orange"
            className="theme-mode"
          /> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
