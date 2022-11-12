import "./index.scss";
import React from "react";
import footer from "../../Images/footer.png";

function Footer() {
  return (
    <div className="container-fluid navbar-fixed-bottom mt-5">
      <img src={footer} alt="footer" />
    </div>
  );
}

export default Footer;
