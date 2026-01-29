import React from "react";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-15 items-center">
          {/* Left Coloumn - Text */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                Your Cozy Corner for
                <br />
                <span className="font-serif italic font-normal text-white">
                  Coffee & Conversations
                </span>
              </h1>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button>
                <a href="#contact">Make a reservation</a>
              </Button>
            </div>
          </div>
          {/* Right Image */}
          <div className="relative flex items-end justify-center w-full h-full pt-10">
            {/* Circle Background */}
            {/* <div className="relative w-64 h-64 rounded-full bg-primary shadow-lg mx-auto overflow-visible"> */}
            {/* Chef Image - popping out */}
            <img src="/images/chef.png" alt="Chef" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
