import React from 'react';

const FaqContactSection = () => {
  return (
    <div>
    
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked <span className="text-blue-600">Questions</span></h2>
          <div className="mb-4">
            <button className="px-6 py-2 bg-gray-200 rounded-full mr-2">Eligibility</button>
            <button className="px-6 py-2 bg-gray-200 rounded-full mr-2">How To Use?</button>
            <button className="px-6 py-2 bg-gray-200 rounded-full">Terms & Conditions</button>
          </div>
          <div className="text-left mx-auto max-w-4xl">
            <div className="mb-4">
              <h3 className="font-semibold">Do I need to have prior Product Management and Project Management experience to enroll in the program?</h3>
              <p className="mt-2">No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">What is the minimum system configuration required?</h3>
              <p className="mt-2">The details regarding the minimum system configuration required will be provided upon enrollment.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-bold mb-4">Want to delve deeper into the program?</h2>
          <p className="mb-8">Share your details to receive expert insights from our program team!</p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full">Get in touch</button>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul>
              <li>Data Science & AI</li>
              <li>Product Management</li>
              <li>Business Analytics</li>
              <li>Digital Transformation</li>
              <li>Business Management</li>
              <li>Project Management</li>
              <li>Strategy & Leadership</li>
              <li>Senior Management</li>
              <li>Fintech</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <p>Email us (For Data Science Queries): admissions@accredian.com</p>
            <p>Email us (For Product Management Queries): pm@accredian.com</p>
            <p>Data Science Admission Helpline: +91 0076543229 (9 AM - 7 PM)</p>
            <p>Product Management Admission Helpline: +91 0061151096</p>
            <p>Enrolled Student Helpline: +91 7999252397</p>
            <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Why Accredian</h3>
            <ul>
              <li>About</li>
              <li>Career</li>
              <li>Blog</li>
              <li>Admission Policy</li>
              <li>Referral Policy</li>
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
              <li>Master FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
              <li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href=""><i className="fab fa-twitter"></i></a></li>
              <li><a href=""><i className="fab fa-youtube"></i></a></li>
              <li><a href=""><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FaqContactSection;
