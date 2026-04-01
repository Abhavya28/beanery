"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "/images/coffee-icon.svg",
    title: "High-Quality Coffee",
    description:
      "Sourced from premium beans and roasted to perfection, every sip is a journey of rich flavor and aroma.",
  },
  {
    icon: "/images/chef-icon.svg",
    title: "Talented Chef & Friendly Team",
    description:
      "Our passionate chefs and welcoming staff make every visit memorable, serving delicious food with a smile.",
  },
  {
    icon: "/images/deal-icon.svg",
    title: "Exclusive Promos & Seasonal Specials",
    description:
      "Enjoy our curated offers, seasonal drinks, and treats that make every visit extra special.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative w-full max-w-xl lg:max-w-2xl mx-auto lg:mx-0">
            <div className="overflow-hidden rounded-2xl shadow-xl h-[360px] sm:h-[440px] md:h-[520px] lg:h-[620px]">
              <img
                src="/images/services.jpeg"
                alt="Coffee Maker"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 sm:bottom-4 left-4 sm:left-8 
                          bg-white p-5 sm:p-6 rounded-xl shadow-lg 
                          max-w-[90%] sm:max-w-sm"
            >
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Every cup of coffee is crafted with care, and every corner is
                designed for comfort. Relax, savor the flavors, and enjoy
                moments made just for you.
              </p>
              <p className="font-semibold text-sm text-[#1A1110]">- Beanery</p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-600">Why Choose Us</p>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1110] leading-tight">
              Experience the Perfect Blend of Taste & Ambience
            </h1>

            <p className="text-gray-600 leading-relaxed max-w-xl">
              At Beanery, we combine the finest coffee beans with a cozy,
              inviting atmosphere. Every cup is brewed to perfection, and every
              dish is prepared with care. Whether it's a casual catch-up or a
              special occasion, Beanery is the place where flavors meet comfort.
            </p>

            <div className="flex flex-col gap-6 mt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="h-14 w-14 flex-shrink-0 flex items-center justify-center bg-background hover:bg-background/90 rounded-md">
                    <img src={feature.icon} alt="" className="h-10" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;