import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import GlobalStyles from "./styles/GlobalStyles";

const theme = {
  colors: {
    header: "#E8E0D1",
    body: "#E8E0D1",
    footer: "black",
  },
  mobile: "768px",
}

  
function App() {
  return (
      <ThemeProvider theme = {theme}>
        <>
          <GlobalStyles />
          <Routes>
             <Route path="/" element={<Layout />} >
             <Route index element={<Home />} />
             <Route path="home" element={<Home />} />
             </Route>
          </Routes>
        </>
      </ThemeProvider>
  );
}
  
  export default App;  
