import React from 'react';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const CaseStudies = () => {
  // Slider settings for react-slick with autoplay feature enabled
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="case-studies-section bg-gray-100 py-16 px-8 text-gray-800">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold mb-8 text-center">Energy Impact Insights</h2>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        Discover how our services can optimize your energy consumption and save costs while making a positive impact on the environment.
      </p>

      {/* Slider Component */}
      <Slider {...settings}>
        {caseStudiesData.map((caseStudy, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 text-center p-6">
              <div className="image-container bg-gray-200 h-40 w-full rounded-md mb-4 overflow-hidden">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                <CountUp start={0} end={caseStudy.statistic} duration={3} suffix={caseStudy.suffix} />
              </h3>
              <p className="text-sm">{caseStudy.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaArrowRight className="text-gray-600 text-2xl hover:text-black transition-colors duration-200" />
    </div>
  );
};

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaArrowLeft className="text-gray-600 text-2xl hover:text-black transition-colors duration-200" />
    </div>
  );
};

// Sample Case Studies Data for Current and Potential Metrics
const caseStudiesData = [
  {
    title: 'Current Energy Usage',
    statistic: 5000,
    suffix: ' kWh',
    description: 'Current average energy consumption across our users per month.',
    image: '/images/current_usage.jpg',
  },
  {
    title: 'Potential Energy Savings',
    statistic: 40,
    suffix: '%',
    description: 'Projected energy savings through our AI-driven optimization solutions.',
    image: '/images/energy_saving.png',
  },
  {
    title: 'Cost Savings per Household',
    statistic: 150,
    suffix: ' USD',
    description: 'Estimated monthly savings on energy bills for each household using our solution.',
    image: '/images/cost_saving.jpg',
  },
  {
    title: 'Carbon Emission Reduction',
    statistic: 2000,
    suffix: ' kg CO2',
    description: 'Estimated reduction in carbon emissions for our customers using renewable solutions.',
    image: '/images/carbon_reduction.jpg',
  },
  {
    title: 'Homes Ready for Efficiency',
    statistic: 500,
    suffix: '+',
    description: 'Number of households ready to benefit from our energy efficiency services.',
    image: '/images/households_ready.jpg',
  },
  {
    title: 'Efficiency Growth',
    statistic: 30,
    suffix: '%',
    description: 'Increase in energy efficiency reported by our early users over a six-month period.',
    image: '/images/efficiency_growth.jpg',
  },
];

export default CaseStudies;
