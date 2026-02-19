import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const customersReview = [
  {
    id: 1,
    desc: "The coffee at Beanery is incredible! Every cup feels freshly brewed, and the cozy atmosphere makes it my favorite spot to relax with friends.",
    img: "/images/Archie.png",
    name: "Archie Kerry",
  },
  {
    id: 2,
    desc: "I love visiting Beanery! The pastries are always fresh, and the staff is so friendly. It’s the perfect place to spend a quiet afternoon.",
    img: "/images/Kenneth.png",
    name: "Kenneth Johnson",
  },
  {
    id: 3,
    desc: "Beanery never disappoints! From the rich aroma of coffee to the warm ambiance, every visit feels special. Highly recommended!",
    img: "/images/Malanie.png",
    name: "Malanie Smith",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-2 md:px-20 grid grid-cols-1 md:grid-cols-2">
        {/* Left */}
        <div className="bg-[#1e1e1e] p-6 text-white flex flex-col items-center">
          <p>Testimonials</p>
          <h1 className="text-3xl font-bold text-center">Our Customer say</h1>
          <img src="/images/Quotes.svg" alt="Quotes" className="my-4" />

          <Swiper
            className="testimonial-swiper w-full max-w-xl pb-10"
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={700}
            slidesPerView={1}
          >
            {customersReview.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="flex flex-col gap-4 items-center text-center px-2 pb-12">
                  <p className="text-sm">{review.desc}</p>
                  <div className="rounded-full border-2 border-white h-16 w-16 flex items-center justify-center">
                    <img
                      src={review.img}
                      alt={review.name}
                      className="rounded-full h-14 w-14 object-cover"
                    />
                  </div>
                  <h1 className="font-bold text-lg">{review.name}</h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right */}
        <div className="flex items-center bg-yellow-300">
          <img
            src="/images/testimonials.png"
            alt="Testimonials"
            className="object-contain w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
