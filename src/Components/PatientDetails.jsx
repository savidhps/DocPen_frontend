import React, { useState } from 'react';

function PatientDetails() {
  const allPatients = [
    { id: 1, name: 'John Doe', phone: '+91 9876543210', age: 45, location: 'Chennai' },
    { id: 2, name: 'Anita Sharma', phone: '+91 9123456789', age: 32, location: 'Mumbai' },
    { id: 3, name: 'Rahul Verma', phone: '+91 9988776655', age: 27, location: 'Delhi' },
    { id: 4, name: 'Divya R', phone: '+91 9111222333', age: 39, location: 'Hyderabad' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [patients, setPatients] = useState(allPatients);

  const handleSearch = () => {
    const filtered = allPatients.filter((patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPatients(filtered);
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">Patient Details</h2>

      {/* Search Box */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by patient name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleSearch}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Search
        </button>
      </div>

      {/* Patient Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {patients.length > 0 ? (
          patients.map((patient) => (
            <div
              key={patient.id}
              className="bg-white p-5 rounded-lg shadow border hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">{patient.name}</h3>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Phone:</span> {patient.phone}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Age:</span> {patient.age}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Location:</span> {patient.location}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No patients found.</p>
        )}
      </div>
    </div>
  );
}

export default PatientDetails;
