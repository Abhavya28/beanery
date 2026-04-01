import { motion } from "framer-motion";
import Button from "../components/Button";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4" id="about">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 relative">
          <div className="overflow-hidden rounded-lg aspect-square">
            <motion.img
              src="/images/about.png"
              alt="Cafe"
              className="w-full h-full object-cover"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Steam Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-6 bg-white/50 rounded-full"
                  animate={{ y: [-10, -40], opacity: [0.5, 0] }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold mb-4">
            Welcome to <br />
            <span className="text-background">Beanery</span>
          </h2>
          <p className="text-gray-700 mb-4">
            At Beanery Café, we create a warm and welcoming space where you can
            savor freshly brewed coffee, delectable pastries, and good company.
            Whether you're here to relax, work, or catch up with friends,
            Beanery Café is your perfect retreat.
          </p>
          <p className="text-gray-700">
            We take pride in sourcing the finest beans and crafting each drink
            with care. Come experience the comforting aroma, cozy ambiance, and
            the passion we pour into every cup at Beanery Café.
          </p>
          <br />
          <div className="flex items-center justify-center">
            <Button className="bg-background text-white rounded-sm">
              <a href="#services">Find More</a>
            </Button>
          </div>
        </div>
      </div>
      <hr className="mt-8" />
    </section>
  );
};

export default About;

