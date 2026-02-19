import React from "react";

const Services = () => {
  return (
   <section id="services" className="py-20">
      <div className="container mx-auto px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT IMAGE SECTION */}
        <div className="relative w-full max-w-xl lg:max-w-2xl mx-auto lg:mx-0">
          {/* Tall Image */}
          <div
            className="overflow-hidden rounded-2xl shadow-xl h-[360px] sm:h-[440px] md:h-[520px] lg:h-[620px]"
          >
            <img
              src="/images/services.jpeg"
              alt="Coffee Maker"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quote Card */}
          <div
            className="absolute bottom-4 sm:bottom-4 left-4 sm:left-8 
                          bg-white p-5 sm:p-6 rounded-xl shadow-lg 
                          max-w-[90%] sm:max-w-sm"
          >
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Every cup of coffee is crafted with care, and every corner is designed for comfort. Relax, savor the flavors, and enjoy moments made just for you.
            </p>
            <p className="font-semibold text-sm text-gray-800">- Beanery</p>
          </div>
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="flex flex-col gap-6">
          {/* Small Heading */}
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">Why Choose us</p>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Experience the Perfect Blend of Taste & Ambience
          </h1>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed max-w-xl">
           At Beanery, we combine the finest coffee beans with a cozy, inviting atmosphere. Every cup is brewed to perfection, and every dish is prepared with care. Whether it's a casual catch-up or a special occasion, Beanery is the place where flavors meet comfort.
          </p>

          {/* FEATURES */}
          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 flex-shrink-0 flex items-center justify-center bg-background rounded-md">
                <img src="/images/coffee-icon.svg" alt="" className="h-10" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">High-Quality coffee</h3>
                <p className="text-gray-600 text-sm">
                  Sourced from premium beans and roasted to perfection, every sip is a journey of rich flavor and aroma
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-14 w-14 flex-shrink-0 flex items-center justify-center bg-background  rounded-md">
                <img src="/images/chef-icon.svg" alt="" className="h-10" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Talented Chef & Friendly Team</h3>
                <p className="text-gray-600 text-sm">
                  Our passionate chefs and welcoming staff make every visit memorable, serving delicious food with a smile.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-14 w-14 flex-shrink-0 flex items-center justify-center bg-background rounded-md">
                <img src="/images/deal-icon.svg" alt="" className="h-10" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Exclusive Promos & Seasonal Specials</h3>
                <p className="text-gray-600 text-sm">
                  Enjoy our curated offers, seasonal drinks, and treats that make every visit extra special.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
