import React from "react";
import Style from "./header.module.scss";
import Image from "./img/gs-logo-removebg-preview.png";

const Header = () => {
  return (
    <div className={Style.headerbar}>
      <div className={Style.wrapper}>
        <div className={Style.mainhead}>
          <img src={Image} alt="" />
        </div>
        <div className={Style.iconbar}>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-solid fa-link"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
