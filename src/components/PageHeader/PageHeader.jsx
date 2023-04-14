import "./page-header.scss";
import bg from "../../assets/img/footer-bg.jpg";
// import bg from "../../assets/img/bg.jpeg";

const PageHeader = (props) => {
  return (
    <div
      className="page-header after:bg-gradient-to-t after:from-white dark:after:bg-gradient-to-t dark:after:from-black"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2 className="text-2xl font-bold text-black dark:text-white">
        {props.children}
      </h2>
    </div>
  );
};

export default PageHeader;
