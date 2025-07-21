import React from "react";
import { Plus, Star } from "lucide-react";
import { MenuItem } from "../types";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(item);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        {item.featured && (
          <div className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
            <Star className="h-3 w-3 mr-1" />
            Featured
          </div>
        )}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 bg-amber-600 text-white p-2 rounded-full hover:bg-amber-700 transition-colors shadow-lg"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-amber-600">
            ${item.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors text-sm font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
