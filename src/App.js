import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Favourites from "./components/Favourites";
import Home from "./components/Home";
import Episodes from "./components/Episodes";
import GetEpisodes from "./components/GetEpisodes";
import Profile from "./components/Login/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./components/Login/Login";
import "./App.css";
import Characters from "./components/Characters";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          {/* <Route exact path="/" element={<GetEpisodes/>} /> */}
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/" element={<Login/>} />
          {/* <Route
            exact
            path="/"
            element={isAuthenticated ? <Favourites /> : <Login />}
          /> */}
          <Route exact path="/Episodes" element={<Episodes />} />
          <Route exact path="/Characters" element={<Characters />} />

          <Route exact path="/favourites" element={<Favourites />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
