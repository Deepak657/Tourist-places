import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Resevations from "./pages/Resevations";
import Blogs from "./pages/Blogs";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NavbarComponent from "./components/NavbarComponent";
import { GlobalStyle } from "./globalstyle/GlobalStyle";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    colors: {
      heading: "rgb(11,151,252)",
      text: "#000",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="resevations" element={<Resevations />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
