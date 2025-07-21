import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 6;

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1710752213640-aa9ed91a8646?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwZXRoaW9waWFufGVufDB8fDB8fHww",
      title: "Ethiopian Coffee Ceremony",
      category: "Culture",
    },
    {
      url: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Fresh Coffee Beans",
      category: "Coffee",
    },
    {
      url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Traditional Ethiopian Food",
      category: "Food",
    },
    {
      url: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Coffee Brewing",
      category: "Process",
    },
    {
      url: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Vegetarian Delights",
      category: "Food",
    },
    {
      url: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Specialty Dishes",
      category: "Food",
    },
    {
      url: "https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Coffee Beans Drying",
      category: "Coffee",
    },
    {
      url: "https://images.pexels.com/photos/1294831/pexels-photo-1294831.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Traditional Desserts",
      category: "Food",
    },
  ];

  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
  const currentImages = galleryImages.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-amber-600">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual journey through our café, from traditional Ethiopian
            coffee ceremonies to our modern culinary creations.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-amber-600 text-xs font-semibold rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-lg font-bold">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-3">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                  currentPage === i
                    ? "bg-amber-600 border-amber-600"
                    : "bg-gray-300 border-gray-300 hover:bg-amber-400"
                }`}
              ></button>
            ))}
          </div>
        )}

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We aim to share the rich tradition of Ethiopian coffee with the
            world. More than just a drink, our coffee is a cultural experience.
          </p>

          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 shadow-md"
            >
              <FaFacebookF className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-[#E1306C] text-white flex items-center justify-center transition-all duration-300 shadow-md"
            >
              <FaInstagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center transition-all duration-300 shadow-md"
            >
              <FaTwitter className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-[#FF0000] text-white flex items-center justify-center transition-all duration-300 shadow-md"
            >
              <FaYoutube className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
