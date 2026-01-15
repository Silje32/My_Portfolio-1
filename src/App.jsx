import { Outlet } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./Global.css";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
