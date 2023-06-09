import "./Footer.scss";
import { Link } from "react-router-dom";
import bg from "../../assets/img/footer-bg.jpg";
import logo from "../../assets/img/netflix-icon-26.jpg";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `$(${bg})` }}>
      <div className="footer__content containers">
        <div className="footer__content__logo">
          <div className="logo dark:text-white text-black">
            <img src={logo} alt="" />
            <Link to="/">Sunflix</Link>
          </div>
        </div>
        <div className="footer__content__menus dark:text-white text-black">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
