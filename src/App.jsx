import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Project from "./components/Project";
import Experties from "./components/Experties";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Project />
      <Experties />
      <Footer />
    </>
  );
}
export default App;
