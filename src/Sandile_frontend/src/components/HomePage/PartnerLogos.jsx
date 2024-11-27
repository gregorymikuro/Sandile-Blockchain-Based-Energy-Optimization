import React from 'react';

const PartnerLogos = () => {
  return (
    <div className="partner-logos-section py-8 text-center bg-white text-black overflow-hidden">
      <h2 className="text-4xl font-bold mb-6">Our Partners</h2>
      <div className="partner-marquee relative flex items-center gap-12">
        {/* Logo Wrapper for Animation */}
        <div className="flex whitespace-nowrap animate-marquee">
          {/* Updated Partner Logos */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" alt="Tesla" className="w-32 h-auto mx-4" />
          <img src="/images/gelogo.jpg" alt="GE" className="w-32 h-auto mx-4" />
          <img src="/images/shelllogo.png" alt="Shell" className="w-32 h-auto mx-4" />
          <img src="/images/ikealogo.png" alt="IKEA" className="w-32 h-auto mx-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="w-32 h-auto mx-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="w-32 h-auto mx-4" />
          <img src="/images/bplogo.jpg" alt="BP" className="w-32 h-auto mx-4" />
          <img src="/images/siemenslogo.png" alt="Siemens" className="w-32 h-auto mx-4" />
          <img src="/images/schneiderlogo.png" alt="Schneider Electric" className="w-32 h-auto mx-4" />
          <img src="/images/enellogo.jpg" alt="Enel" className="w-32 h-auto mx-4" />
          <img src="/images/icplogo.png" alt="ICP" className="w-32 h-auto mx-4" />
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
