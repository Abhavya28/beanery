import { useState } from "react";

const socialHandles = [
  {id:1,icon:"/images/instagram.png",title:"Instagram"},
  {id:2,icon:"/images/facebook.png",title:"Facebook"},
  {id:3,icon:"/images/youtube.png",title:"Youtube"}
]
const Footer = () => {
  const [email, setEmail] = useState("");

  function handleEmailSubmit(e) {
    e.preventDefault();
    if (!email) return;
    console.log("Email submitted:", email);
    setEmail("");
  }
  return (
    <footer className="relative pt-24 md:pt-28">
      {/* Newsletter */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[92%] sm:w-[85%] md:w-[70%] bg-white shadow-md px-4 py-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 z-20 rounded-md border-2 border-gray-100">
        <h2 className="text-lg sm:text-xl font-bold text-background text-center md:text-left">
          Subscribe To Our Newsletter
        </h2>

        <form onSubmit={handleEmailSubmit} className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 px-3 py-2 w-full md:w-60 text-sm focus:outline-none"
          />
          <button
            className="bg-background text-white px-4 py-2 text-sm whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        <div className="flex gap-2">
          {socialHandles.map((i) => (
            <span
              key={i.id}
              className="w-5 h-5 bg-white text-white flex items-center justify-center rounded text-sm"
            >
              <img src={i.icon} alt={i.title} />
            </span>
          ))}
        </div>
      </div>

      {/* Footer Background */}
      <div
        className="relative bg-cover bg-center pt-24 sm:pt-24 md:pt-0"
        style={{ backgroundImage: "url('/images/footer.png')" }}
      >
        {/* Overlay (only on background) */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Footer Content */}
        <div className="relative z-10 container mx-auto px-6 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-2 hover:text-background">
              Beanery
            </h3>
            <p className="text-sm leading-relaxed">
              Your Cozy Corner for Coffee & Conversations
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Explore</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact us</h3>
            <p className="space-y-1 text-sm">
              Sector 26, Chandigarh,
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="relative z-10 bg-background text-center text-xs sm:text-sm text-white py-2">
          Copyright © 2022 . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
