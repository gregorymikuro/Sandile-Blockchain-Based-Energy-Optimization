import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat py-16 px-8 text-center" 
      style={{ backgroundImage: "/images/background-placeholder.jpg" }} // Replace with your background image path
    >
      {/* Section Heading */}
      <h2 className="text-5xl font-bold mb-12 font-serif text-black">How It Works</h2>
      <p className="text-base text-gray-800 mb-16 max-w-2xl mx-auto">
        Understand how our energy solutions work to make your life more sustainable.
      </p>


      {/* Steps with Mixed Layouts */}
      <div className="relative z-10 space-y-16">
        {/* Step 1: Large Card */}
        <motion.div
          key={1}
          className="step-card p-10 rounded-xl shadow-lg bg-white border mx-auto w-full lg:w-3/4 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="image-placeholder bg-gray-200 h-64 w-full rounded-md mb-6">
            <img src="/images/step1.jpg" alt="Step 1: Initial Assessment" className="w-full h-full object-cover rounded-md" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Step 1: Initial Assessment</h3>
          <p className="text-base text-gray-600 leading-relaxed">
            We begin by analyzing your current energy usage using AI-driven analytics to identify areas for improvement. This assessment is comprehensive and identifies energy leaks, inefficiencies, and areas for immediate optimization.
          </p>
        </motion.div>

        {/* Steps 2 & 3: Smaller Cards Side by Side */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 lg:w-3/4 mx-auto">
          <motion.div
            key={2}
            className="step-card p-10 rounded-xl shadow-lg bg-white border w-full md:w-1/2 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="image-placeholder bg-gray-200 h-48 w-full rounded-md mb-6">
              <img src="/images/step2.jpg" alt="Step 2: Customized Solutions" className="w-full h-full object-cover rounded-md" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Step 2: Customized Solutions</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Based on the assessment, we use machine learning models to design tailored energy solutions. These solutions are crafted to suit your specific needs and prioritize both efficiency and sustainability.
            </p>
          </motion.div>

          <motion.div
            key={3}
            className="step-card p-10 rounded-xl shadow-lg bg-white border w-full md:w-1/2 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="image-placeholder bg-gray-200 h-48 w-full rounded-md mb-6">
              <img src="/images/step3.jpg" alt="Step 3: Implementation" className="w-full h-full object-cover rounded-md" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Step 3: Implementation</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Our expert team implements the customized energy solutions, ensuring that every change is done with precision. We use the latest technology to seamlessly integrate these solutions into your existing systems.
            </p>
          </motion.div>
        </div>

        {/* Step 4: Large Card */}
        <motion.div
          key={4}
          className="step-card p-10 rounded-xl shadow-lg bg-white border mx-auto w-full lg:w-3/4 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="image-placeholder bg-gray-200 h-64 w-full rounded-md mb-6">
            <img src="/images/step4.jpg" alt="Step 4: Monitoring & Optimization" className="w-full h-full object-cover rounded-md" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Step 4: Monitoring & Optimization</h3>
          <p className="text-base text-gray-600 leading-relaxed">
            We monitor your energy systems in real time using AI. This ensures ongoing optimization and allows us to proactively address any inefficiencies that arise, guaranteeing continued energy savings.
          </p>
        </motion.div>

        {/* Steps 5 & 6: Smaller Cards Side by Side */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 lg:w-3/4 mx-auto">
          <motion.div
            key={5}
            className="step-card p-10 rounded-xl shadow-lg bg-white border w-full md:w-1/2 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="image-placeholder bg-gray-200 h-48 w-full rounded-md mb-6">
              <img src="/images/step5.jpg" alt="Step 5: Energy Audits" className="w-full h-full object-cover rounded-md" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Step 5: Energy Audits</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              We conduct regular energy audits to ensure your systems are performing optimally. These audits help identify any new opportunities for improvements in energy efficiency.
            </p>
          </motion.div>

          <motion.div
            key={6}
            className="step-card p-10 rounded-xl shadow-lg bg-white border w-full md:w-1/2 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="image-placeholder bg-gray-200 h-48 w-full rounded-md mb-6">
              <img src="/images/step6.jpg" alt="Step 6: Reporting" className="w-full h-full object-cover rounded-md" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Step 6: Reporting</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              We generate detailed reports on energy usage and savings, providing full transparency. These reports highlight the positive impact of our solutions, helping you understand the value of your investment.
            </p>
          </motion.div>
        </div>

        {/* Step 7: Large Card */}
        <motion.div
          key={7}
          className="step-card p-10 rounded-xl shadow-lg bg-white border mx-auto w-full lg:w-3/4 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <div className="image-placeholder bg-gray-200 h-64 w-full rounded-md mb-6">
            <img src="/images/step7.jpg" alt="Step 7: Customer Support" className="w-full h-full object-cover rounded-md" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Step 7: Customer Support</h3>
          <p className="text-base text-gray-600 leading-relaxed">
            Our dedicated support team, powered by AI-driven assistance tools, is always available to assist with any questions or concerns you may have.
          </p>
        </motion.div>

        {/* Steps 8 & 9: Smaller Cards Side by Side */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 lg:w-3/4 mx-auto">
          <motion.div
            key={8}
            className="step-card p-10 rounded-xl shadow-lg bg-white border w-full md:w-1/2 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="image-placeholder bg-gray-200 h-48 w-full rounded-md mb-6">
              <img src="/images/step8.jpg" alt="Step 8: Energy Optimization Tips" className="w-full h-full object-cover rounded-md" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Step 8: Energy Optimization Tips</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              Receive practical, AI-driven tips to further optimize your energy consumption on a daily basis. We provide step-by-step guidance for maximum efficiency.
            </p>
          </motion.div>

          <motion.div
            key={9}
            className="step-card p-10 rounded-xl shadow-lg bg-white border w-full md:w-1/2 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <div className="image-placeholder bg-gray-200 h-48 w-full rounded-md mb-6">
              <img src="/images/step9.jpg" alt="Step 9: Scaling & Expansion" className="w-full h-full object-cover rounded-md" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Step 9: Scaling & Expansion</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              We help you scale and expand your energy solutions as your needs grow, with support from machine learning models for predictive scaling.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
