import React, { useState } from 'react';
import './App.css';

const initialVendors = [
  { id: 1, name: 'ABC Corporation', category: 'Electronics', location: 'New York' },
  { id: 2, name: 'XYZ Enterprises', category: 'Clothing', location: 'Los Angeles' },
  { id: 3, name: 'Global Foods Inc.', category: 'Food & Beverage', location: 'Chicago' },
  { id: 4, name: 'Tech Innovations Ltd.', category: 'Technology', location: 'San Francisco' },
  { id: 5, name: 'Green Eco Solutions', category: 'Environmental Services', location: 'Seattle' },
  { id: 6, name: 'Swift Logistics', category: 'Transportation', location: 'Houston' },
  { id: 7, name: 'Golden Harvest Farms', category: 'Agriculture', location: 'Miami' },
  { id: 8, name: 'Fashion Plus', category: 'Fashion', location: 'New York' },
  { id: 9, name: 'Healthcare Innovations', category: 'Healthcare', location: 'Boston' },
  { id: 10, name: 'Global Marketing Solutions', category: 'Marketing', location: 'Washington D.C.' }
];

function App() {
  const [vendors] = useState(initialVendors);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredVendors = vendors.filter((vendor) => {
    return (
      vendor.name.toLowerCase().includes(filter.toLowerCase()) ||
      vendor.category.toLowerCase().includes(filter.toLowerCase()) ||
      vendor.location.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vendor List</h1>
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Filter by name, category, or location"
          className="search-bar"
        />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {filteredVendors.map((vendor) => (
              <tr key={vendor.id}>
                <td>{vendor.id}</td>
                <td>{vendor.name}</td>
                <td>{vendor.category}</td>
                <td>{vendor.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
