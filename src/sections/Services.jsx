import React from "react";

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col lg:flex-row items-center gap-16">

        <div className="lg:w-1/2 w-full">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl aspect-square shadow-xl">
              <img
                src="/images/services.jpg"
                alt="Cafe Services"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-amber-50 -z-10 shadow-lg transition-shadow"></div>
            <div className="absolute bottom-0 left-0 h-60 w-60 rounded-2xl bg-background flex flex-col gap-4 items-center justify-center shadow-lg shadow-black/60 hover:scale-105 transition">
                <div>
                    <img src="/images/circle-star.svg" alt="" />
                </div>
                <div>
                    <p className="text-white text-xl text-center">5 Years of Culinary Excellence</p>
                </div>
            </div>

          </div>
        </div>

        <div className="lg:w-1/2 w-full flex flex-col gap-14">

          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-background mb-4">
              Our Services
            </h1>
            <p className="text-gray-600 max-w-lg leading-relaxed">
              Thoughtfully crafted experiences designed to make every visit to
              Beanery Café warm, memorable, and comforting.
            </p>
          </div>

    
          <div className="flex flex-col gap-10">
          <div className="group flex items-start gap-4">
              <span className="text-background text-xl group-hover:translate-x-1 transition">
                →
              </span>
              <div>
                <h2 className="text-lg font-semibold mb-1">
                  Dine In Experience
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Settle into our cozy space with calming interiors, friendly
                  service, and a peaceful atmosphere perfect for every mood.
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-4">
              <span className="text-background text-xl group-hover:translate-x-1 transition">
                →
              </span>
              <div>
                <h2 className="text-lg font-semibold mb-1">
                  Online Ordering & Delivery
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Enjoy your favorite brews and treats from the comfort of your
                  home with our quick and reliable delivery service.
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-4">
              <span className="text-background text-xl group-hover:translate-x-1 transition">
                →
              </span>
              <div>
                <h2 className="text-lg font-semibold mb-1">Event Catering</h2>
                <p className="text-gray-600 leading-relaxed">
                  From intimate gatherings to corporate events, we curate menus
                  and moments that feel personal and unforgettable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
