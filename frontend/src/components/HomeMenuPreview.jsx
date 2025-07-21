// src/components/HomeMenuPreview.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { useCart } from "../context/CartContext";

const menuItems = [
  {
    id: 1,
    name: "Ethiopian Espresso",
    description: "Rich, full-bodied espresso from the highlands of Ethiopia",
    price: 3.5,
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    name: "Yirgacheffe Pour Over",
    description: "Bright, floral notes with citrus undertones",
    price: 4.25,
    image:
      "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    name: "Sidamo Cold Brew",
    description: "Smooth, chocolatey cold brew perfect for hot days",
    price: 3.75,
    image:
      "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    name: "Injera with Doro Wat",
    description: "Traditional Ethiopian flatbread with spicy chicken stew",
    price: 16.99,
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 5,
    name: "Kitfo",
    description: "Ethiopian steak tartare with mitmita spice and ayib cheese",
    price: 18.99,
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 6,
    name: "Honey Baklava",
    description: "Flaky pastry with honey and mixed nuts",
    price: 4.5,
    image:
      "https://images.pexels.com/photos/6086/food-essen-pastry-bakery.jpg?auto=compress&cs=tinysrgb&w=400",
  },
];

const HomeMenuPreview = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Popular Menu Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover rounded-t-xl"
              />
              <div className="p-4 text-left">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className="text-amber-700 font-bold">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {item.description}
                </p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-3 w-full bg-amber-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-amber-800 transition"
                >
                  <Plus className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="mt-10">
          <button
            onClick={() => navigate("/menu")}
            className="px-6 py-3 bg-amber-800 text-white rounded-lg font-semibold hover:bg-amber-900 transition"
          >
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeMenuPreview;
