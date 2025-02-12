import React from "react";
import Styles from "./navbar.module.css";

const Logo = () => {
  return (
    <div className={Styles.logoBlock}>
      <img
        src="https://edisonlms-fs.s3.amazonaws.com/tenant_onlinelearning/iidt_logo_137.png"
        alt="Excelr logo"
      />
    </div>
  );
};

export default Logo;
