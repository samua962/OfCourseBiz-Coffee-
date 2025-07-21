import React from "react";
import {
  Coffee,
  Utensils,
  Globe,
  Quote,
  Newspaper,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Coffee className="h-12 w-12 text-amber-800" />,
      title: "Food Online Ordering",
      description: "Order your coffee and food anywhere, anytime.",
      color: "from-amber-50 to-orange-50",
    },
    {
      icon: <Quote className="h-12 w-12 text-blue-600" />,
      title: "Daily Quotes",
      description:
        "Start your day with a touch of inspiration! Check today’s quote.",
      color: "from-blue-50 to-indigo-50",
    },
    {
      icon: <Newspaper className="h-12 w-12 text-green-600" />,
      title: "Latest News",
      description:
        "Stay updated with the latest news and trends from reputable sources.",
      color: "from-green-50 to-emerald-50",
    },
  ];

  const offerings = [
    {
      icon: <Utensils className="h-8 w-8 text-amber-800" />,
      title: "Organic Ingredients",
      description:
        "We use only the freshest, organic ingredients in all our dishes. From locally sourced vegetables to ethically raised meats, every dish is created with health, taste, and sustainability in mind.",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Daily Fresh",
      description:
        "Freshness is at the heart of Ethiopian cooking, and we ensure that all our meals are prepared daily to maintain their original flavors and nutritional value.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-green-600" />,
      title: "Best Chefs",
      description:
        "Our kitchen is helmed by top Ethiopian chefs who are passionate about their craft. With years of experience and a deep knowledge of Ethiopian culinary traditions, they bring authentic recipes to life with a modern twist.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-amber-600">Website</span> Offers
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to Of Course Coffee Official Website!
          </p>
        </motion.div>

        {/* Service Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`bg-gradient-to-br ${service.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group`}
            >
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Café Offerings */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-amber-600">Café</span> Offers
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are committed to serving you the best of Ethiopian cuisine, with
            the convenience of a modern, tech-powered ordering system.
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {offering.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {offering.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {offering.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
