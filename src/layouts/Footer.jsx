import { useState } from "react";

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
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[80%] sm:w-[70%] md:w-[55%] bg-white shadow-md px-4 py-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 z-20 rounded-md border-2 border-gray-100">
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
          <button className="bg-background text-white px-4 py-2 text-sm whitespace-nowrap">
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Background */}
      <div
        className="relative bg-cover bg-center pt-24 sm:pt-24 md:pt-0"
        style={{ backgroundImage: "url('/images/footer.png')" }}
      >
        {/* Overlay (only on background) */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Footer Content */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-6 py-12 
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 text-white"
        >
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 hover:underline cursor-pointer transition-all duration-300">
              Beanery
            </h3>
            <p className="text-sm leading-relaxed text-white/80">
              Your Cozy Corner for Coffee & Conversations. We create a warm and
              welcoming space where you can savor freshly brewed coffee,
              delectable pastries, and good company.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-4 hover:underline cursor-pointer transition-all duration-300">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#hero" className="hover:underline transition-all">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline transition-all">
                  About
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:underline transition-all">
                  Menu
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline transition-all">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:underline transition-all"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Our Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4 hover:underline cursor-pointer transition-all duration-300">
              Our Address
            </h3>
            <div className="space-y-1 text-sm text-white/80">
              <p>SCO 3, Ground Floor</p>
              <p>Sector 26, Chandigarh</p>
              <p>160019</p>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 hover:underline cursor-pointer transition-all duration-300">
              Contact Us
            </h3>
            <div className="space-y-1 text-sm text-white/80">
              <p>+91 9876543210</p>
              <p>+91 9876543210</p>
            </div>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 hover:underline cursor-pointer transition-all duration-300">
              Connect With Us
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:underline transition-all">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Twitter
                </a>
              </li>
            </ul>
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
