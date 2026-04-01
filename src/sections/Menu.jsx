// 




import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuData = {
  appetizers: [
    { name: "Garlic Bread", price: "₹150", img: "/menu/appetizers/garlicbread.jpg" },
    { name: "Bruschetta", price: "₹180", img: "/menu/appetizers/bruschetta.jpg" },
    { name: "Cheese Balls", price: "₹200", img: "/menu/appetizers/cheeseballs.jpg" },
    { name: "Loaded Nachos", price: "₹220", img: "/menu/appetizers/loadednachos.jpg" },
  ],
  main: [
    { name: "Grilled Sandwich", price: "₹280", img: "/menu/main/sandwich.jpg" },
    { name: "Pasta Alfredo", price: "₹320", img: "/menu/main/pasta.jpg" },
    { name: "Paneer Steak", price: "₹350", img: "/menu/main/paneersteak.jpg" },
    { name: "Veg Burger", price: "₹260", img: "/menu/main/burger.jpg" },
  ],
  desserts: [
    { name: "Chocolate Brownie", price: "₹180", img: "/menu/desserts/brownie.jpg" },
    { name: "Cheesecake", price: "₹220", img: "/menu/desserts/cheesecake.jpg" },
    { name: "Tiramisu", price: "₹250", img: "/menu/desserts/tiramisu.jpg" },
    { name: "Ice Cream Sundae", price: "₹200", img: "/menu/desserts/icecreamsundae.jpg" },
  ],
  beverages: [
    { name: "Cappuccino", price: "₹180", img: "/menu/beverages/cappuccino.jpg" },
    { name: "Latte", price: "₹200", img: "/menu/beverages/latte.jpg" },
    { name: "Cold Brew", price: "₹220", img: "/menu/beverages/coldbrew.jpg" },
    { name: "Mocha", price: "₹210", img: "/menu/beverages/mocha.jpg" },
  ],
  snacks: [
    { name: "French Fries", price: "₹140", img: "/menu/snack/frenchfries.jpg" },
    { name: "Veg Puff", price: "₹120", img: "/menu/snack/vegpuff.jpg" },
    { name: "Vada Pav", price: "₹80", img: "/menu/snack/vadapav.jpg" },
    { name: "Onion Rings", price: "₹180", img: "/menu/snack/onionrings.jpg" },
  ],
};

const tabs = ["appetizers", "main", "desserts", "beverages", "snacks"];

const Menu = () => {
  const [activeTab, setActiveTab] = useState("desserts");

  return (
    <section
      id="menu"
      className="py-16 sm:py-20"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-20">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 flex flex-col items-center gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold glow-text text-background">
            Our Favourites Menu
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl">
            Our menu is a carefully curated selection of delicious masterpieces
            crafted with love and premium ingredients.
          </p>
        </div>

        {/* Tabs */}
        <div className="relative flex overflow-x-auto no-scrollbar justify-start sm:justify-center gap-3 mb-10 sm:mb-14 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm 
              transition-all duration-300 border border-background
              ${activeTab === tab ? "bg-background text-secondary-foreground glow-border" : "bg-transparent hover:bg-background/10"}`}
            >
              {tab === "main"
                ? "Main Course"
                : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <AnimatePresence mode="wait">
            {menuData[activeTab].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0 15px 25px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="glass rounded-2xl overflow-hidden transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-44 sm:h-48 object-cover"
                />
                <div className="p-4 bg-background">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-base sm:text-lg text-primary">
                      {item.name}
                    </h3>
                    <span className="text-primary font-semibold">{item.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Menu;