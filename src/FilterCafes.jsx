import React, { useState } from 'react';

const FilterCafes = ({ onFilterChange }) => {
  const subwayOptions = [
    { name: "Все", code: "All" },
    { name: "Арбатская", code: "Arbat" },
    { name: "Александровский сад", code: "Alexanders Garden" },
    { name: "Московская", code: "Моэсом" },
    { name: "Парк Культуры", code: "Culture" },
    { name: "Театральная", code: "Theatr" }
  ];

  const [selectedSubway, setSelectedSubway] = useState('All');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedSubway(value);
    if (onFilterChange) {
      onFilterChange(value);
    }
  };

  return (
    <div className="controls">
      <select 
        name="subway" 
        id="subway" 
        value={selectedSubway}
        onChange={handleChange}
      >
        {subwayOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCafes;