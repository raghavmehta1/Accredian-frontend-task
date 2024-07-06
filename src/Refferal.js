// src/ReferralSection.js
import React from 'react';

const ReferralSection = () => {
  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">How Do I <span className="text-blue-600">Refer?</span></h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a5 5 0 100-10 5 5 0 000 10zm0 2a8 8 0 00-7.938 7h15.876A8 8 0 0010 14z" />
              </svg>
            </div>
            <p>Submit referrals easily via our website's referral section.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10a8 8 0 1016 0 8 8 0 00-16 0zm8-5a1 1 0 100 2h4a1 1 0 100-2H10z" />
              </svg>
            </div>
            <p>Earn rewards once your referral joins an Accredian program.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 4a1 1 0 01.993.883L11 5v3h3a1 1 0 01.117 1.993L14 10h-3v3a1 1 0 01-1.993.117L9 13v-3H6a1 1 0 01-.117-1.993L6 8h3V5a1 1 0 011-1z" />
              </svg>
            </div>
            <p>Both parties receive a bonus 30 days after program enrollment.</p>
          </div>
        </div>
        <button className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-full">Refer Now</button>
      </div>
    </div>
  );
};

export default ReferralSection;
