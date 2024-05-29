import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Layout() {
  
    return (
      <>
        <Nav />
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }

export default Layout;  