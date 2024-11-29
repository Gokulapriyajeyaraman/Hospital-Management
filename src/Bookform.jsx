import React, { useState } from 'react';

function Bookform({ isOpen, closeModal }) {
    if (!isOpen) return null;

    // State hooks to capture the form data
    const [name, setName] = useState('');
    const [userId, setUserId] = useState('');
    const [age, setAge] = useState('');
    const [date, setDate] = useState('');
    const [timeSegment, setTimeSegment] = useState(''); // Initially empty or default value
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate form fields
        if (!name || !userId || !age || !date || !timeSegment) {
            setError('Please fill in all required fields.');
            return;
        }

        const formData = {
            name,
            userId,
            age,
            appointmentDate: date,
            timeSegment,
            message,
        };

        try {
            const response = await fetch('http://localhost:5000/book-appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage('Appointment booked successfully!');
                // Display alert with patient details
                alert(
                    `Appointment successfully booked!\n\nPatient Details:\nName: ${name}\nUser ID: ${userId}\nAge: ${age}\nDate: ${date}\nTime Segment: ${timeSegment}`
                );
                closeModal(); // Close the modal after successful booking
            } else {
                setError(data.message || 'Failed to book appointment');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while booking the appointment');
        }
    };

    return (
        <div>
            <div
                id="static-modal"
                data-modal-backdrop="static"
                className="overflow-y-auto overflow-x-hidden fixed z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Book an Appointment</h3>
                            <button
                                onClick={closeModal}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-4">
                            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                            {successMessage && <div className="text-green-500 text-sm mb-4">{successMessage}</div>}

                            <form onSubmit={handleSubmit} className="max-w-sm mx-auto mb-4">
                                <label htmlFor="patient-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient's Name</label>
                                <input
                                    type="text"
                                    id="patient-name"
                                    className="block w-full text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />

                                <label htmlFor="patient-id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User ID</label>
                                <input
                                    type="text"
                                    id="patient-id"
                                    className="block w-full text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Enter your user ID"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    required
                                />

                                <label htmlFor="patient-age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                                <input
                                    type="number"
                                    id="patient-age"
                                    className="block w-full text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Enter your age"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    required
                                />

                                <label htmlFor="appointment-date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Appointment Date</label>
                                <input
                                    type="date"
                                    id="appointment-date"
                                    className="block w-full text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />

                                <label htmlFor="time-segment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time Segment</label>
                                <select
                                    id="time-segment"
                                    className="block w-full text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    value={timeSegment}
                                    onChange={(e) => setTimeSegment(e.target.value)}
                                    required
                                >
                                    <option value="">Select Time Segment</option>
                                    <option value="Morning">Morning</option>
                                    <option value="Afternoon">Afternoon</option>
                                    <option value="Evening">Evening</option>
                                </select>

                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                                <textarea
                                    id="message"
                                    className="block w-full text-sm p-2.5 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Enter any additional message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />

                                <button type="submit" className="bg-blue-500 text-white p-2.5 rounded-md mt-4">Book Appointment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bookform;
