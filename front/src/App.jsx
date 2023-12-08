import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import LandingPageHome from "./LandingPageHome";
import HeaderHome from "./HeaderHome.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <LandingPageHome></LandingPageHome>
        <Section2></Section2>
        <Section3></Section3>
        <Footer></Footer>
      </div>

    </>
  );
}

export default App;
