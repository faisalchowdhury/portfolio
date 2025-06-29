import React from "react";
import fLogo from "../../assets/fLogo.png";
import { Link } from "react-router";
const Logo = () => {
  return (
    <Link to={"/"}>
      <div>
        <img width={"200px"} src={fLogo} alt="" />
      </div>
    </Link>
  );
};

export default Logo;
