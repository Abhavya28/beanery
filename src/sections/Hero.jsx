import { useState } from "react";
import Button from "../components/Button";

const Hero = () => {
  const [showReservation, setShowReservation] = useState(false);

  return (
    <div
      id="hero"
      className="relative min-h-screen flex items-center bg-background bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg-hero.png')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative px-8 z-10 max-w-4xl w-full text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100 text-foreground">
          Your Cozy Corner for
          <br />
          <span className="font-serif italic font-normal text-white">
            Coffee & Conversations
          </span>
        </h1>

        <div className="mt-8 flex flex-wrap justify-start gap-4 animate-fade-in animation-delay-300">
          <Button
            className="bg-white text-background"
            onClick={() => setShowReservation(true)}
          >
            Make a reservation
          </Button>
        </div>
      </div>

      {/* Reservation Overlay */}
      {showReservation && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl w-11/12 max-w-md p-8 relative shadow-lg">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
              onClick={() => setShowReservation(false)}
            >
              ✖
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-center">
              Make Your Reservation
            </h2>

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault(); 
                setShowReservation(false);
                alert("Reservation booked!");
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-background"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-background"
              />
              <input
                type="datetime-local"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-background"
              />

              <button
                type="submit"
                className="bg-background text-white py-2 rounded hover:bg-gray-800 transition"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
