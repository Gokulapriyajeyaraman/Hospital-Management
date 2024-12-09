import React, { useState } from "react";
import Modal from "./Modal"; // Import the Modal component
import Profile from "./Profile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for the menu
  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal
  const [openProfile, setProfileOpen] = useState(false); // State for profile visibility

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleProfile = () => {
    setProfileOpen(!openProfile); // Toggle the profile visibility
  };

  return (
    <>
      <nav className="fixed w-full h-20 z-20 top-0 left-0 bg-teal-900">
        <div className="flex flex-wrap items-center justify-between pb-2 p-4">
          <div className="flex items-center justify-start ml-0">
            <img
              src="/images/lightlogo.png"
              className="h-16 mr-3"
              alt="doctorly Logo"
            />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg bg-teal-700 hover:bg-teal-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-200 md:hidden"
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          </button>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 pb-2 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-teal z-30 md:bg-teal-900">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-teal-600 rounded md:bg-transparent md:text-teal-500 md:hover:text-teal-500 md:p-0 text-white md:text-teal-400"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-500 md:p-0 text-white md:hover:text-teal-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Doctors
                </a>
              </li>
              <li>
                <button
                  onClick={openModal}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-500 md:p-0 text-white md:hover:text-teal-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Book Test
                </button>
              </li>
              <li>
                <button
                  onClick={handleProfile} // Handle profile toggle
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-500 md:p-0 text-white md:hover:text-teal-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Profile
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        className="relative h-[500px] bg-gray-100 flex items-center justify-center pt-[88px]"
        style={{ paddingTop: "88px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/health-still-life-with-copy-space_23-2148854031.jpg')",
          }}
        ></div>

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-2">View Doctors</h1>
          <h2 className="text-4xl">Book an Appointment</h2>
        </div>
      </section>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4">Book a Test</h2>
        <p className="mb-4">Fill in the details to book your test.</p>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full p-2 mb-4 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full p-2 mb-4 border rounded"
          />
          <input
            type="date"
            className="block w-full p-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
          >
            Submit
          </button>
        </form>
      </Modal>

      {/* Profile Component */}
      <Profile isVisible={openProfile} handleClose={handleProfile} />
    </>
  );
};

export default Navbar;
