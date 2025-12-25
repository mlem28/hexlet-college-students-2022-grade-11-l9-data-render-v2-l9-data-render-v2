import React, { useState, useEffect } from 'react';
import FilterCafes from './FilterCafes.jsx';

const CafesTable = () => {
  const [cafes, setCafes] = useState([]);
  const [filteredCafes, setFilteredCafes] = useState([]);
  const [selectedSubway, setSelectedSubway] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCafes = async () => {
      try {
        const response = await fetch('/cafes');
        const data = await response.json();
        setCafes(data.cafes);
        setFilteredCafes(data.cafes);
        setLoading(false);
      } catch (error) {
        console.error('Ошибка при загрузке кафе:', error);
        setLoading(false);
      }
    };

    fetchCafes();
  }, []);

  useEffect(() => {
    if (selectedSubway === 'All') {
      setFilteredCafes(cafes);
    } else {
      const filtered = cafes.filter(cafe => cafe.subwayCode === selectedSubway);
      setFilteredCafes(filtered);
    }
  }, [selectedSubway, cafes]);

  const handleFilterChange = (subwayCode) => {
    setSelectedSubway(subwayCode);
  };

  const getSubwayName = (code) => {
    const subwayNames = {
      "All": "Все",
      "Arbat": "Арбатская",
      "Alexanders Garden": "Александровский сад",
      "Моэсом": "Московская",
      "Culture": "Парк Культуры",
      "Theatr": "Театральная"
    };
    return subwayNames[code] || code;
  };

  return (
    <div className="cafesTable">
      <FilterCafes onFilterChange={handleFilterChange} />
      
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <ul className="cardsList">
          {filteredCafes.map(cafe => (
            <li key={cafe.id} className="card">
              <img 
                src={cafe.img || 'https://via.placeholder.com/150'} 
                alt={cafe.name} 
              />
              <h2>{cafe.name}</h2>
              <p>{cafe.desc}</p>
              <p>{cafe.address}</p>
              <p>Subway: {getSubwayName(cafe.subwayCode)}</p>
              <p>{cafe.workTime}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CafesTable;