import React from "react";

const Footer = ({ items }) => {
  return (
    <footer className="footer">
      <h3>{`${items.length} item${items.length === 1 ? "" : "s"}`}</h3>
    </footer>
  );
};

export default Footer;
