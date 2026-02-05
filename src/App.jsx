import "./index.css";
import Navbar from "./layouts/Navabar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Menu from "./sections/Menu";
import Services from "./sections/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Services />
    </div>
  );
}

export default App;
