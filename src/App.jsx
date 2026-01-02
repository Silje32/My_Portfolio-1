import { Outlet } from "react-router-dom";
import styles from "./styles/Global.css";
import Nav from "./components/layout/Nav";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div>
        <Nav />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
