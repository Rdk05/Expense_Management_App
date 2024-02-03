import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../../App.css";

const Layout = ({ children }) => {
  return (
    <div className="main-cont">
      <Header />
      <div className="content container mt-4">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
