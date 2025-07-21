import React, { useState } from "react";
import { Plus, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("coffee");
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();

  const menuItems = [
    {
      id: 1,
      name: "Ethiopian Espresso",
      description: "Rich, full-bodied espresso from the highlands of Ethiopia",
      price: 3.5,
      image:
        "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "coffee",
    },
    {
      id: 2,
      name: "Yirgacheffe Pour Over",
      description: "Bright, floral notes with citrus undertones",
      price: 4.25,
      image:
        "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "coffee",
    },
    {
      id: 3,
      name: "Sidamo Cold Brew",
      description: "Smooth, chocolatey cold brew perfect for hot days",
      price: 3.75,
      image:
        "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "coffee",
    },
    {
      id: 4,
      name: "Harar Cappuccino",
      description: "Traditional cappuccino with wine-like Ethiopian beans",
      price: 4.0,
      image:
        "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "coffee",
    },
    {
      id: 5,
      name: "Injera with Doro Wat",
      description: "Traditional Ethiopian flatbread with spicy chicken stew",
      price: 16.99,
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "food",
    },
    {
      id: 6,
      name: "Vegetarian Combo",
      description: "Assortment of lentils, vegetables, and Ethiopian spices",
      price: 14.99,
      image:
        "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "food",
    },
    {
      id: 7,
      name: "Kitfo",
      description: "Ethiopian steak tartare with mitmita spice and ayib cheese",
      price: 18.99,
      image:
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "food",
    },
    {
      id: 8,
      name: "Shiro",
      description: "Ground chickpea stew with berbere spices",
      price: 12.99,
      image:
        "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "food",
    },
    {
      id: 9,
      name: "Honey Baklava",
      description: "Flaky pastry with honey and mixed nuts",
      price: 4.5,
      image:
        "https://images.pexels.com/photos/6086/food-essen-pastry-bakery.jpg?auto=compress&cs=tinysrgb&w=400",
      category: "pastries",
    },
    {
      id: 10,
      name: "Ethiopian Cookies",
      description: "Traditional spiced cookies with cardamom and cinnamon",
      price: 3.25,
      image:
        "https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "pastries",
    },
    {
      id: 11,
      name: "Coffee Cake",
      description: "Moist cake infused with Ethiopian coffee",
      price: 5.99,
      image:
        "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "pastries",
    },
    {
      id: 12,
      name: "Chocolate Croissant",
      description: "Buttery croissant filled with rich Ethiopian chocolate",
      price: 3.75,
      image:
        "https://images.pexels.com/photos/2228553/pexels-photo-2228553.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "pastries",
    },
  ];

  const categories = [
    { id: "all", name: "All", icon: "🍽️" },
    { id: "coffee", name: "Coffee", icon: "☕" },
    { id: "food", name: "Ethiopian Food", icon: "🍛" },
    { id: "pastries", name: "Pastries", icon: "🥐" },
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const isShowingAll = activeCategory === "all" && searchTerm === "";

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover authentic Ethiopian flavors and premium coffee experiences
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-6"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-amber-800 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-amber-50 border border-gray-200"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center mt-4 mb-10">
          <button
            onClick={() =>
              isShowingAll
                ? setActiveCategory("coffee") // Reset to default
                : (setActiveCategory("all"), setSearchTerm(""))
            }
            className="px-6 py-3 bg-amber-700 text-white rounded-lg font-semibold hover:bg-amber-800 transition-all duration-300"
          >
            {isShowingAll ? "View Filtered Menu" : "View All Menu"}
          </button>
        </div>

        {/* Menu Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-amber-700">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {item.description}
                </p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-3 bg-amber-600 hover:bg-amber-700 text-white text-sm py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">😔</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No items found
            </h3>
            <p className="text-gray-600">Try a different search or category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Menu;
