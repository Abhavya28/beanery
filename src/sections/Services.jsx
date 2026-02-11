import React from "react";

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa
              turpis pulvinar interdum in imperdiet pellentesque.
            </p>
            <p className="font-semibold text-sm text-gray-800">Alen Barg</p>
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
            Best quality food and <br /> coffee maker
          </h1>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat donec id elementum.
          </p>

          {/* FEATURES */}
          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 flex-shrink-0 flex items-center justify-center bg-background rounded-md">
                <img src="/images/coffee-icon.svg" alt="" className="h-10" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">High quality coffee</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-14 w-14 flex-shrink-0 flex items-center justify-center bg-background  rounded-md">
                <img src="/images/chef-icon.svg" alt="" className="h-10" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Best chef & team</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-14 w-14 flex-shrink-0 flex items-center justify-center bg-background rounded-md">
                <img src="/images/deal-icon.svg" alt="" className="h-10" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Promo and deal</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
