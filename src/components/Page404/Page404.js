import React from "react";
import { Link } from "react-router-dom";
import page404 from "../../assets/other/page404.svg";

const Page404 = () => {
  return (
    <div className="main-screen-bg" style={{ textAlign: "center" }}>
      <img src={page404} alt="404 error" className="sadFace404" />
      <h1 className="error404">404</h1>
      <h1 className="smthWentWrongText">
        Oops... Looks like something went wrong on our end...
      </h1>
      <Link to="/">
        <button className="backToHomeButton404">Back to homepage</button>
      </Link>
    </div>
  );
};

export default Page404;
