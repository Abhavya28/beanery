import { useState } from "react";

const menuData = {
  appetizers: [
    {
      name: "Garlic Bread",
      price: "₹150",
      img: "/menu/appetizers/garlicbread.jpg",
    },
    {
      name: "Bruschetta",
      price: "₹180",
      img: "/menu/appetizers/bruschetta.jpg",
    },
    {
      name: "Cheese Balls",
      price: "₹200",
      img: "/menu/appetizers/cheeseballs.jpg",
    },
    {
      name: "Loaded Nachos",
      price: "₹220",
      img: "/menu/appetizers/loadednachos.jpg",
    },
  ],

  main: [
    {
      name: "Grilled Sandwich",
      price: "₹280",
      img: "/menu/main/sandwich.jpg",
    },
    {
      name: "Pasta Alfredo",
      price: "₹320",
      img: "/menu/main/pasta.jpg",
    },
    {
      name: "Paneer Steak",
      price: "₹350",
      img: "/menu/main/paneersteak.jpg",
    },
    {
      name: "Veg Burger",
      price: "₹260",
      img: "/menu/main/burger.jpg",
    },
  ],

  desserts: [
    {
      name: "Chocolate Brownie",
      price: "₹180",
      img: "/menu/desserts/brownie.jpg",
    },
    {
      name: "Cheesecake",
      price: "₹220",
      img: "/menu/desserts/cheesecake.jpg",
    },
    {
      name: "Tiramisu",
      price: "₹250",
      img: "/menu/desserts/tiramisu.jpg",
    },
    {
      name: "Ice Cream Sundae",
      price: "₹200",
      img: "/menu/desserts/icecreamsundae.jpg",
    },
  ],

  beverages: [
    {
      name: "Cappuccino",
      price: "₹180",
      img: "/menu/beverages/cappuccino.jpg",
    },
    {
      name: "Latte",
      price: "₹200",
      img: "/menu/beverages/latte.jpg",
    },
    {
      name: "Cold Brew",
      price: "₹220",
      img: "/menu/beverages/coldbrew.jpg",
    },
    {
      name: "Mocha",
      price: "₹210",
      img: "/menu/beverages/mocha.jpg",
    },
  ],

  snacks: [
    {
      name: "French Fries",
      price: "₹140",
      img: "/menu/snack/frenchfries.jpg",
    },
    {
      name: "Veg Puff",
      price: "₹120",
      img: "/menu/snack/vegpuff.jpg",
    },
    {
      name: "Vada Pav",
      price: "₹80",
      img: "/menu/snack/vadapav.jpg",
    },
    {
      name: "Onion Rings",
      price: "₹180",
      img: "/menu/snack/onionrings.jpg",
    },
  ],
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState("desserts");

  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-6">

        <div className="text-center mb-14 flex flex-col items-center gap-4">
          <h2 className="text-4xl md:text-5xl font-bold glow-text text-background">
            Our Menu
          </h2>
          <p className="text-gray-700 text-2xl">Our Menu is Carefully Curated Selection Of Delicious Masterpieces</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {["appetizers", "main", "desserts", "beverages", "snacks"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm transition-all duration-800 border-2 border-background
                  ${
                    activeTab === tab
                      ? "bg-background text-secondary-foreground glow-border"
                      : " border-1 border-background"
                  }`}
              >
                {tab === "main" ? "Main Course" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
          {menuData[activeTab].map((item, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden hover:scale-[1.03] transition-all"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 bg-background">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg text-primary">
                    {item.name}
                  </h3>
                  <span className="text-primary font-semibold">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
  
      </div>
    </section>
  );
};

export default Menu;
