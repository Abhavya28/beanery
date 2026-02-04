import Button from "../components/Button";


const Hero = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-background bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      {/* Overlay for darker effect */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center px-6 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100 text-foreground ">
          Your Cozy Corner for
          <br />
          <span className="font-serif italic font-normal text-white">
            Coffee & Conversations
          </span>
        </h1>

        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in animation-delay-300">
          <Button className="bg-white text-background">
            <a href="#contact">Make a reservation</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
