import Header from "./Header_Footer/Header"
import Footer from "./Header_Footer/Footer"
import About_Page from "./pages/About_Page";
import Home_Page from "./pages/Home_Page";
import Products_Page from "./pages/Products_Page"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css"

function App() {
  const styles = {
    height: "100vh",
    width: "100vw"
  }

  const data_about = [{
    main_letter: "О",
    word: "НАС",
    link_img: ""
  }]
  console.log(data_about)
  return (
    <div className="wrapper" style={styles}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home_Page />}></Route>
          <Route path="/about" element={<About_Page />}></Route>
          <Route path="/products" element={<Products_Page />}></Route>
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
