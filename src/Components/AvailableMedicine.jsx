import React, { useState } from 'react';

function AvailableMedicine() {
  const [searchTerm, setSearchTerm] = useState("");

  const medicines = [
    { name: "Paracetamol", company: "Cipla", price: "₹20" },
    { name: "Amoxicillin", company: "Sun Pharma", price: "₹35" },
    { name: "Ibuprofen", company: "Dr. Reddy's", price: "₹25" },
    { name: "Cetirizine", company: "Zydus", price: "₹15" },
    { name: "Azithromycin", company: "Lupin", price: "₹45" },
    // Add more dummy medicines here if needed
  ];

  const filteredMedicines = medicines.filter(
    med =>
      med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Available Medicines</h2>
      <p className="text-gray-600 mb-4">Check medicines availability and details.</p>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search medicine or company..."
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredMedicines.map((med, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold text-gray-800">{med.name}</h3>
            <p className="text-gray-600">Company: {med.company}</p>
            <p className="text-green-700 font-bold">Price: {med.price}</p>
          </div>
        ))}
        {filteredMedicines.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">No medicines found.</p>
        )}
      </div>
    </div>
  );
}

export default AvailableMedicine;
