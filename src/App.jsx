import "./index.css";
import Navbar from "./layouts/Navabar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Menu from "./sections/Menu";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Footer from "./layouts/Footer";
import Chatbot from "./ai-chatbot/chatbot";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Chatbot />
      <About />
      <Menu />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
