import React from "react";
import Navbar from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function First() {
  return (
    <>
    <Header/>
      <Outlet />
      <Footer />
    </>
  );
}

export default First;
