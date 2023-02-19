import React from "react";
import logos from "./Logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logos} alt="logo" width="60px" />
        <h1> Write Diary</h1>
      </div>
    </>
  );
};

export default Header;
