import React from "react";
import { Award, Heart, Leaf, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Award className="h-8 w-8 text-amber-800" />,
      title: "Premium Quality",
      description:
        "We source only the finest Ethiopian coffee beans, carefully selected from the best regions.",
    },
    {
      icon: <Heart className="h-8 w-8 text-amber-800" />,
      title: "Made with Love",
      description:
        "Every dish and cup is prepared with passion and dedication to authentic Ethiopian flavors.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-amber-800" />,
      title: "Organic & Fresh",
      description:
        "We use organic ingredients and traditional cooking methods to preserve authentic taste.",
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-800" />,
      title: "Fast Delivery",
      description:
        "Quick and reliable delivery service to bring Ethiopian cuisine right to your door.",
    },
  ];

  return (
    <section id="company" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-amber-600">Story</span>
            </h2>
            <div className="w-24 h-1 bg-amber-600 mb-8"></div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              A Blend of Tradition & Innovation
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Of Course Coffee was born from a passion for sharing the rich
              heritage of Ethiopian coffee and cuisine. We believe that food is
              more than sustenance—it's a connection to culture, tradition, and
              community.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our journey began with a simple mission: to bring authentic
              Ethiopian flavors to coffee lovers and food enthusiasts
              everywhere. From our carefully sourced beans to our traditional
              recipes passed down through generations, every element of our menu
              tells a story of Ethiopian heritage.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-amber-800 mb-2">
                  50+
                </div>
                <div className="text-gray-600">Coffee Varieties</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-amber-800 mb-2">
                  5000+
                </div>
                <div className="text-gray-600">Happy Customers</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                src="https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Ethiopian coffee ceremony"
                className="rounded-2xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src="https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Coffee preparation"
                className="rounded-2xl shadow-lg mt-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-800 to-amber-900 text-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-2xl font-bold">Est. 2020</div>
              <div className="text-sm text-amber-100">
                Serving Authentic Ethiopian Coffee
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Our Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Our <span className="text-amber-600">Vision</span>
          </h3>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Of Course Cafe, coffee is more than just a drink – it's a
            centuries-old tradition, a ceremony, and a way of life. Our coffee
            is sourced from the lush, fertile regions of Ethiopia, where the
            coffee bean was first discovered. Every cup you sip is a journey
            through Ethiopian culture, brewed with the same care and reverence
            that has been passed down through generations.
          </p>
        </motion.div>

        {/* Features */}
        <div className="mt-20">
          <motion.h3
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Why Choose Of Course Coffee?
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-amber-50 transition-colors duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
