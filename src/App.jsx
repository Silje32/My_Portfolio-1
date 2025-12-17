import { Route, Routes } from "react-router-dom";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import Layout from "./components/layout/Layout";
import styles from "./styles/Global.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Frontend />} />
        <Route path="frontend" element={<Frontend />} />
        <Route path="/backend" element={<Layout />}>
          <Route index element={<Backend />} />
          <Route path="backend" element={<Backend />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
