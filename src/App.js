import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Hero></Hero>

    <Footer></Footer>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
