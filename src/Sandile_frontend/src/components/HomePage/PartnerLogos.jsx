import React from 'react';

const PartnerLogos = () => {
  return (
    <div className="partner-logos-section py-8 text-center bg-white text-black overflow-hidden">
      <h2 className="text-4xl font-bold mb-6">Our Partners</h2>
      <div className="partner-marquee relative flex items-center gap-12">
        {/* Logo Wrapper for Animation */}
        <div className="flex whitespace-nowrap animate-marquee">
          {/* Example Partner Logos */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" alt="Tesla" className="w-32 h-auto mx-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/88/General_Electric_logo.svg" alt="GE" className="w-32 h-auto mx-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Shell_logo.svg" alt="Shell" className="w-32 h-auto mx-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/IKEA_logo.svg" alt="IKEA" className="w-32 h-auto mx-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="w-32 h-auto mx-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="w-32 h-auto mx-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/BP_logo.svg" alt="BP" className="w-32 h-auto mx-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Siemens_logo.svg" alt="Siemens" className="w-32 h-auto mx-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Schneider_Electric_logo.svg" alt="Schneider Electric" className="w-32 h-auto mx-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Enel_logo.svg" alt="Enel" className="w-32 h-auto mx-4" />
          <img src="/logo2.svg" alt="ICP" className="w-32 h-auto mx-4" />
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
