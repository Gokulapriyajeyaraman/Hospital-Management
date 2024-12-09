import React, { useState } from 'react';

const PatientProfile = ({ isVisible, handleClose }) => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    age: 30,
    gender: "Male",
    contact: "1234567890",
    address: "123 Street, City",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Updated Profile:", profile);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (!isVisible) return null; // If not visible, return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center w-full items-center z-30">
      <div className="max-w-md mx-auto p-6 border-2 border-teal-900 w-80 bg-white rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-teal-900 text-center mb-6">Patient Profile</h2>
        <div className="mb-4">
          {/* Correct image path */}
          <div>
            <img src="/images/images.png" alt="Profile" className="h-30 w-30 mx-auto mb-4" />
          </div>
          <label className="block text-teal-900 font-medium mb-2">Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-teal-900 rounded focus:outline-none focus:ring-2 focus:ring-teal-900"
            />
          ) : (
            <p className="text-gray-700">{profile.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-teal-900 font-medium mb-2">Age:</label>
          {isEditing ? (
            <input
              type="number"
              name="age"
              value={profile.age}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-teal-900 rounded focus:outline-none focus:ring-2 focus:ring-teal-900"
            />
          ) : (
            <p className="text-gray-700">{profile.age}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-teal-900 font-medium mb-2">Gender:</label>
          {isEditing ? (
            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-teal-900 rounded focus:outline-none focus:ring-2 focus:ring-teal-900"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-900">{profile.gender}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-teal-900 font-medium mb-2">Contact:</label>
          {isEditing ? (
            <input
              type="text"
              name="contact"
              value={profile.contact}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-teal-900 rounded focus:outline-none focus:ring-2 focus:ring-teal-900"
            />
          ) : (
            <p className="text-gray-700">{profile.contact}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-teal-900 font-medium mb-2">Address:</label>
          {isEditing ? (
            <textarea
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-teal-900 rounded focus:outline-none focus:ring-2 focus:ring-teal-900"
            ></textarea>
          ) : (
            <p className="text-gray-700">{profile.address}</p>
          )}
        </div>
        {isEditing ? (
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-teal-900 text-white px-4 py-2 rounded mr-2 hover:bg-teal-900"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-white text-teal-900 border border-teal-900 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-teal-900 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
        )}
        <button
          onClick={handleClose} // Close Profile when clicking the close button
          className="absolute top-2 h-10 w-10 rounded right-2 bg-white font-bold text-teal-900"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default PatientProfile;
