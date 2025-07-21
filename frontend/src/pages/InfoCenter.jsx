import React, { useState, useEffect } from "react";
import { RefreshCw, Twitter, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InfoCenter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentQuote, setCurrentQuote] = useState({
    text: "Coffee is a language in itself.",
    author: "Jackie Chan",
  });

  const [isLoading, setIsLoading] = useState(false);

  const quotes = [
    { text: "Coffee is a language in itself.", author: "Jackie Chan" },
    { text: "Life begins after coffee.", author: "Unknown" },
    { text: "Coffee first. Schemes later.", author: "Leanna Renee Hieber" },
    { text: "But first, coffee.", author: "Unknown" },
    { text: "Coffee is my love language.", author: "Unknown" },
  ];

  const blogPosts = [
    {
      title: "Echoes of a Lost Gaza – 2024 version",
      date: "October 27, 2024",
      category: "News",
    },
    {
      title: "Interesting ingredients can come into play here",
      date: "July 29, 2021",
      category: "Recipes",
    },
    {
      title: "Cooking as a whole package item like it did",
      date: "July 26, 2021",
      category: "Tips",
    },
    {
      title: "The Restaurant Items That Wins Customers",
      date: "July 26, 2021",
      category: "Business",
    },
    {
      title: "Interesting ingredients can come into play here",
      date: "July 22, 2021",
      category: "Recipes",
    },
  ];

  const getNewQuote = () => {
    setIsLoading(true);
    setTimeout(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setCurrentQuote(randomQuote);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Info <span className="text-amber-600">Center</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Quote of the Day */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Quote of the day
              </h3>
              <motion.button
                onClick={getNewQuote}
                disabled={isLoading}
                className="p-2 bg-amber-100 hover:bg-amber-200 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <RefreshCw
                  className={`h-5 w-5 text-amber-800 ${
                    isLoading ? "animate-spin" : ""
                  }`}
                />
              </motion.button>
            </div>

            <motion.div
              key={currentQuote.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "{currentQuote.text}"
              </blockquote>
              <cite className="text-amber-800 font-semibold">
                — {currentQuote.author}
              </cite>
            </motion.div>

            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors duration-300">
                New Quote
              </button>
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors duration-300 flex items-center space-x-2">
                <Twitter className="h-4 w-4" />
                <span>Tweet</span>
              </button>
            </div>

            {/* Daily Quotes Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 bg-gradient-to-r from-amber-800 to-amber-900 text-white p-6 rounded-xl"
            >
              <h4 className="text-xl font-bold mb-3">Daily Quotes</h4>
              <p className="text-amber-100">Coffee is a language in itself.</p>
            </motion.div>
          </motion.div>

          {/* Recent Blogs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Recent Blogs
            </h3>

            <div className="space-y-4">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="border-l-4 border-amber-600 pl-4 py-2 hover:bg-gray-50 transition-colors duration-300 cursor-pointer group"
                >
                  <h4 className="font-semibold text-gray-900 group-hover:text-amber-800 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h4>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 w-full bg-gradient-to-r from-amber-800 to-amber-900 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              View All Blogs
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoCenter;
