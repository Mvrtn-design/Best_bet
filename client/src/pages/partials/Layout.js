import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Home;
