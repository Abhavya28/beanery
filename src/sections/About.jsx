import React from "react";

const About = () => {
  return (
    <section id="about" className="relative py-3">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center p-10">
          
          {/* Left Column - Heading */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold glow-text font-serif text-background">
              About Us
            </h1>
          </div>

          {/* Right Column - Description */}
          <div>
            <p className="text-xl md:text-xl text-muted-foreground leading-relaxed font-serif">
              Step Into a Space Where Fresh Ingredients and Passion Come Together to Create Unforgettable Experiences.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
