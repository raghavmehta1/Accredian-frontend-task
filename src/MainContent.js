import React, { useState } from 'react';
import Picture1 from './Picture1.png';
import ReferralForm from './referrals.js';

function MainContent() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-blue-100 rounded-lg m-4 relative overflow-hidden">
      <div className="md:w-1/2 space-y-6 z-10">
        <h1 className="text-4xl font-bold">Let's Learn & Earn</h1>
        <p className="text-xl">Get a chance to win up to Rs. 15,000</p>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
          onClick={handleOpenModal}
        >
          Refer Now
        </button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 z-10">
        <div className="relative">
          <img src={Picture1} alt="Smartphone" className="w-3/4 mx-auto" />
        </div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full -mr-16 -mt-16 z-0"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-200 rounded-full -ml-16 -mb-16 z-0"></div>
      <ReferralForm isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default MainContent;
