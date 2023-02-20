import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Footers = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <p>copy write Ⓒ {year} </p>
      </footer>
    </>
  );
};

export default Footers;
