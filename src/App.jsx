import "./index.css";
import Navbar from "./layouts/Navabar";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
