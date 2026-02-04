import Button from "../components/Button";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4">

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <div className="overflow-hidden rounded-lg aspect-square">
            <img
              src="/images/about.png"
              alt="Cafe"
              className="w-full h-full object-cover"
            />
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
          <Button className="bg-background text-white rounded-sm">
            <a href="#services">Find More</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
