import React from "react";

const customersReview = [
  {
    id: 1,
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi, ultricies. Consectetur et faucibus vivamus lorem hendrerit enim donec ut. Nec blandit vulputate varius at quis non. ",
    img: "/images/Archie.png",
    name: "Archie Kerry",
  },
//   {
//     id: 2,
//     desc:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi, ultricies. Consectetur et faucibus vivamus lorem hendrerit enim donec ut. Nec blandit vulputate varius at quis non. ",
//     img: "/images/Archie.png",
//     name: "Archie Kerry",
//   },
//   {
//     id: 3,
//     desc:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi, ultricies. Consectetur et faucibus vivamus lorem hendrerit enim donec ut. Nec blandit vulputate varius at quis non. ",
//     img: "/images/Archie.png",
//     name: "Archie Kerry",
//   },
];
const Testimonials = () => {
  return (
    <div>
      {/* Left */}
      <div className="bg-[#0C0B0C] p-2 text-white flex flex-col gap-4 items-center">
        <p>Testimonials</p>
        <h1 className="text-2xl font-bold">Our Customer say</h1>
        <img src="/images/Quotes.svg" alt="Quotes" />
        {customersReview.map((review)=>(
            <div id={review.id} className="flex flex-col gap-4 items-center">
                <p className="">{review.desc}</p>
                <div className="rounded-full border-2 border-black h-14 w-14 flex items-center justify-center"><img src={review.img} alt={review.name} className="rounded-full h-13 w-13"/></div>
                <h1 className="font-bold">{review.name}</h1>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
