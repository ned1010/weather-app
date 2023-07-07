import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <h5> ❤️ Nidup Dorji &copy; {year}</h5>
    </div>
  );
}

export default Footer;
