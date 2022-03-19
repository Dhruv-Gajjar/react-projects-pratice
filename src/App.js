import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Intrest from "./components/Intrest";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Intrest />
      <Footer />
    </div>
  );
}
