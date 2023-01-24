import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Favourites from "./components/Favourites";
import Home from "./components/Home"


function App() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Routes>
    <Route exact path="/home" element={<Home/>} />

      <Route exact path="/favourites" element={<Favourites/>} />
    </Routes>


    <Footer></Footer>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
