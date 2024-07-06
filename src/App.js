import React from 'react';
import Picture1 from './Picture1.png';
import Refferal from './Refferal.js';
import Ref from './Ref.js';
import Last from './last.js';
import MainContent from './MainContent';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">Accredian</div>
      <div className="hidden md:flex space-x-4">
        <button className="hover:text-blue-600">Courses</button>
        <button className="hover:text-blue-600">Refer & Earn</button>
        <button className="hover:text-blue-600">Resources</button>
        <button className="hover:text-blue-600">About Us</button>
        <button className="hover:text-blue-600">Login</button>
      </div>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Try for free</button>
    </nav>
  );
}

function TabBar() {
  return (
    <div className="flex justify-center space-x-8 my-4">
      <button className="text-blue-600 border-b-2 border-blue-600 pb-2">Refer</button>
      <button className="text-gray-600 hover:text-blue-600">Benefits</button>
      <button className="text-gray-600 hover:text-blue-600">FAQs</button>
      <button className="text-gray-600 hover:text-blue-600">Support</button>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-50 text-center py-2 text-sm">
        Navigate your ideal career path with tailored expert advice 
        <a href="#" className="text-blue-600 ml-2 hover:underline">Contact Expert</a>
      </div>
      <Navbar />
      <TabBar />
      <MainContent />
      <Refferal />
      <Ref />
      <Last />
    </div>
  );
}

export default App;
