import Button from "../components/Button";

const Hero = () => {
  return (
    <div
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
          <Button className="bg-white text-background">
            <a href="#contact">Make a reservation</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
