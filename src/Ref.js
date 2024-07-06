import React from 'react';

const programs = [
  {
    name: 'Professional Certificate Program in Product Management',
    referrerBonus: '₹ 7,000',
    refereeBonus: '₹ 9,000',
  },
  {
    name: 'PG Certificate Program in Strategic Product Management',
    referrerBonus: '₹ 9,000',
    refereeBonus: '₹ 11,000',
  },
  {
    name: 'Executive Program in Data Driven Product Management',
    referrerBonus: '₹ 10,000',
    refereeBonus: '₹ 10,000',
  },
  {
    name: 'Executive Program in Product Management and Digital Transformation',
    referrerBonus: '₹ 10,000',
    refereeBonus: '₹ 10,000',
  },
  {
    name: 'Executive Program in Product Management',
    referrerBonus: '₹ 10,000',
    refereeBonus: '₹ 10,000',
  },
  {
    name: 'Advanced Certification in Product Management',
    referrerBonus: '₹ 10,000',
    refereeBonus: '₹ 10,000',
  },
  {
    name: 'Executive Program in Product Management and Project Management',
    referrerBonus: '₹ 10,000',
    refereeBonus: '₹ 10,000',
  },
];

const ReferralBenefits = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        What Are The <span className="text-blue-500">Referral Benefits?</span>
      </h1>
      <div className="flex">
        <div className="w-1/4">
          <nav>
            <ul className="space-y-2">
              <li className="font-semibold">ALL PROGRAMS</li>
              <li className="pl-4">PRODUCT MANAGEMENT</li>
              <li className="pl-4">STRATEGY & LEADERSHIP</li>
              <li className="pl-4">BUSINESS MANAGEMENT</li>
              <li className="pl-4">FINTECH</li>
              <li className="pl-4">SENIOR MANAGEMENT</li>
              <li className="pl-4">DATA SCIENCE</li>
              <li className="pl-4">DIGITAL TRANSFORMATION</li>
              <li className="pl-4">BUSINESS ANALYTICS</li>
            </ul>
          </nav>
        </div>
        <div className="w-3/4">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="border-b-2 py-2">Programs</th>
                <th className="border-b-2 py-2">Referrer Bonus</th>
                <th className="border-b-2 py-2">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) => (
                <tr key={index}>
                  <td className="py-2">{program.name}</td>
                  <td className="py-2">{program.referrerBonus}</td>
                  <td className="py-2">{program.refereeBonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Refer Now</button>
        </div>
      </div>
    </div>
  );
};

export default ReferralBenefits;
