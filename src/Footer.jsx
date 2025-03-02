import React from 'react';
import { FaGreaterThan, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <div className="flex pt-20">
      <footer className="bg-gray-900 p-10 w-full  text-white py-10 px-4">
        <div className="container p-15 mx-auto flex flex-wrap justify-between flex-grow ">
    
          <div className="flex-1 min-w-[250px] mr-8 mb-8">
            <div >
              <h2 className=" text-4xl font-teal text-[#0f766e] text-teal">
                <b>DOCTORLY</b>
              </h2>
            </div>
            <p className=" text-sm  pt-7 ">
              Doctorly is a registered start-up company empaneled with 10000+ Doctors, 500+ Hospitals, lives touched of more than 2 Million patients.
            </p>
            <div className="social-icons mt-4 flex">
              <FaFacebook className="hover:text-[#0f766e] text-white-600 text-2xl" />
              <a href="#" className=" text-white  text-xl mx-2 ">
                <i className="fab fa-facebook" />
              </a>
              <a href="#" className=" hover:text-[#0f766e] text-white  text-xl mx-2 ">
                <FaTwitter className="text-white-600 text-2xl" />
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className=" hover:text-[#0f766e] text-white  text-xl mx-2 ">
                <FaLinkedin className="text-white-600 text-2xl" />
                <i className="fab fa-linkedin" />
              </a>
              <a href="#" className=" hover:text-[#0f766e] text-white  text-xl mx-2 ">
                <FaInstagram className="text-white-600 text-2xl" />
                <i className="fab fa-instagram" />
              </a>
              <a href="#" className="hover:text-[#0f766e] text-white  text-xl mx-2 ">
                <FaYoutube className="text-white-600 text-2xl" />
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>

          
          <div className="flex-1  mr-8 mb-8 flexwrap">
            <h1 className=" space-y-8 text-xl mb-4 relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-[#0f766e] font-bold after:mt-2">For Information</h1>
            <ul className="space-y-6">
              <li className="column1"><a href="#" className="flex items-center space-x-2 text-white hover:text-[#0f766e]  font-medium"><FaGreaterThan className="mr-2" />About Us</a></li>
              <li className="column1"><a href="#" className="flex items-center space-x-2 text-white hover:text-[#0f766e]  font-medium"><FaGreaterThan className="mr-2" />Booking Guide</a></li>
              <li className="column1"><a href="#" className="flex items-center space-x-2 text-white hover:text-[#0f766e]  font-medium"><FaGreaterThan className="mr-2" />Pharmacy</a></li>
              <li className="column1"><a href="#" className="flex items-center space-x-2 text-white  hover:text-[#0f766e] font-medium"><FaGreaterThan className="mr-2" />Careers</a></li>
              <li className="column1"><a href="#" className="flex items-center space-x-2 text-white hover:text-[#0f766e]  font-medium"><FaGreaterThan className="mr-2" />Press Release</a></li>
              <li className="column1"><a href="#" className="flex items-center space-x-2 text-white hover:text-[#0f766e]  font-medium"><FaGreaterThan className="mr-2" />FAQ's</a></li>
            </ul>
          </div>

          
          <div className="flex-1 min-w-[250px] mr-8 mb-8">
            <h1 className=" text-xl mb-4 relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-teal-500 font-bold after:mt-2">Helpful Links</h1>
            <ul className="space-y-6">
              <li className="column2"><a href="#" className="flex items-center space-x-2 text-white hover:text-[#0f766e] font-medium "><FaGreaterThan className="mr-2" />Book Appointment</a></li>
              <li className="column2"><a href="#" className="flex items-center space-x-2 text-white hover:text-[#0f766e] font-medium"><FaGreaterThan className="mr-2" />Search for doctors</a></li>
              <li className="column2"><a href="#" className="flex items-center space-x-2 text-white hover:text-[#0f766e] font-medium"><FaGreaterThan className="mr-2" />Search for hospitals</a></li>
              <li className="column2"><a href="#" className="flex items-center space-x-2 text-white hover:text-[#0f766e] font-medium"><FaGreaterThan className="mr-2" />Book Lab/Diagnostics Test</a></li>
              <li className="column2"><a href="#" className="flex items-center space-x-2 text-white hover:text-[#0f766e] font-medium"><FaGreaterThan className="mr-2" />Franchisee Register</a></li>
              <li className="column2"><a href="#" className="flex items-center space-x-2 text-white  hover:text-[#0f766e] font-medium"><FaGreaterThan className="mr-2" />SMS Booking</a></li>
              <li className="column2"><a href="#" className="flex items-center space-x-2 text-white hover:text-[#0f766e] font-medium "><FaGreaterThan className="mr-2" />Services</a></li>
            </ul>
          </div>


          <div className="flex-1 min-w-[250px] mb-8">
            <h1 className=" space-y-8 text-xl mb-4 relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-[#0f766e] font-bold after:mt-2">Contact Us</h1>
            <p className="flex items-center space-x-2 mb-4"><FaMapMarkerAlt className="text-white-500 text-2xl mr-2" />ABCDE CONSULTANCY PVT LTD, Chennai, Tamilnadu</p>
            <p className="flex items-center space-x-2 mb-4"><FaPhoneAlt className="text-white-500 text-2xl mr-2" /> +91 943 520 0024</p>
            <p className="flex items-center space-x-2 mb-4"><FaEnvelope className="text-white-500 text-2xl mr-3" />info@doctorly.com</p>
          </div>
        </div>

     
        <div className="border-t border-gray-700 mt-6 pt-4 flex justify-between  text-xs">
          <p>© 2024 Doctorly. All rights reserved.</p>
          <p><a href="#" className=" text-white hover:text-teal-500">Terms and Conditions</a></p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
