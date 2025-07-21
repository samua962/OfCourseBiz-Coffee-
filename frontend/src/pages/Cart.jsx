import React from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
// Import this from your AuthContext
import { useAuth } from "../context/AuthContext"; // Ensure you have this context for authentication
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const { subtotal, tax, total } = getCartTotal();
  const { user } = useAuth();
  const navigate = useNavigate();

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const trashVariants = {
    hover: {
      rotate: [0, -15, 15, -10, 10, 0],
      transition: { duration: 0.6 },
    },
    tap: {
      scale: 0.9,
    },
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center px-4"
        >
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-8">
            Start adding items to your cart from our delicious menu.
          </p>
          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition"
            >
              Browse Menu
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="mb-10"
        >
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-2">
            Shopping Cart
          </h1>
          <p className="text-center text-gray-600">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
            your cart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, x: 50 }}
                  className="bg-white rounded-xl shadow-md p-4 flex flex-col sm:flex-row items-center gap-4 group hover:shadow-xl transition-all"
                >
                  {/* 3D Tilt Image */}
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    whileHover={{ rotateX: 5, rotateY: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-24 h-24 object-cover rounded-lg shadow-md"
                  />

                  <div className="flex-1 w-full sm:w-auto">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {item.description}
                    </p>
                    <p className="mt-1 text-amber-600 font-bold">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Buttons with Glow + Bounce */}
                  <div className="flex items-center space-x-2">
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      whileHover={{
                        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
                        scale: 1.1,
                      }}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4 text-gray-700" />
                    </motion.button>

                    <motion.span
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 150 }}
                      className="text-lg font-medium"
                    >
                      {item.quantity}
                    </motion.span>

                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      whileHover={{
                        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
                        scale: 1.1,
                      }}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4 text-gray-700" />
                    </motion.button>
                  </div>

                  <div className="text-lg font-semibold text-gray-900 w-24 text-center">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  {/* Trash Button with Shake */}
                  <motion.button
                    variants={trashVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-100 rounded-full transition"
                  >
                    <Trash2 className="h-5 w-5" />
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary with Scale Entrance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6 sticky top-10 h-fit"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Order Summary
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax (10%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4 flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span className="text-amber-600">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  if (!user) {
                    navigate("/login"); // or "/signin" based on your routing
                  } else {
                    navigate("/checkout");
                  }
                }}
                className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 flex items-center justify-center transition"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Proceed to Checkout
              </motion.button>

              <Link to="/checkout">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
                >
                  Continue Shopping
                </motion.button>
              </Link>
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-lg text-sm text-amber-800">
              <h3 className="font-medium mb-1">🚚 Free Delivery</h3>
              <p>Available within 5 miles from our shop. No hidden fees!</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
