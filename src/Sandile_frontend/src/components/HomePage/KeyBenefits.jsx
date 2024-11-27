import React from 'react';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaBolt, FaLeaf } from 'react-icons/fa';

const KeyBenefits = () => {
  // Animation settings for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  return (
    <div className="key-benefits-section bg-gray-50 py-16 px-8 flex justify-center">
      <div className="text-center max-w-6xl w-full">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-6 font-serif text-gray-800">
          Key Benefits of Our Solutions
        </h2>
        <p className="text-base text-gray-600 mb-12 max-w-2xl mx-auto">
          Our energy solutions are designed to optimize efficiency, reduce costs, and make your life more sustainable.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8 mx-auto">
          {/* Benefit 1 */}
          <motion.div
            className="benefit-card p-8 rounded-xl shadow-lg bg-white border transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            custom={0}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
          >
            <div className="icon mb-6 text-green-500">
              <FaMoneyBillWave className="text-5xl mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Cost Savings on Energy Bills
            </h3>
            <p className="text-sm text-gray-600">
              Reduce your monthly energy expenses significantly with our smart solutions, tailored to save you money.
            </p>
          </motion.div>

          {/* Benefit 2 */}
          <motion.div
            className="benefit-card p-8 rounded-xl shadow-lg bg-white border transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            custom={1}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
          >
            <div className="icon mb-6 text-blue-500">
              <FaBolt className="text-5xl mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Increased Efficiency
            </h3>
            <p className="text-sm text-gray-600">
              Boost your energy efficiency, ensuring maximum productivity while using minimal energy, thanks to our innovative solutions.
            </p>
          </motion.div>

          {/* Benefit 3 */}
          <motion.div
            className="benefit-card p-8 rounded-xl shadow-lg bg-white border transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            custom={2}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
          >
            <div className="icon mb-6 text-teal-500">
              <FaLeaf className="text-5xl mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Sustainable Living for Future Generations
            </h3>
            <p className="text-sm text-gray-600">
              Contribute to a cleaner, greener planet by adopting sustainable energy solutions that benefit future generations.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;
