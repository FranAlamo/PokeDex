import React, { useState } from 'react';
import "./Filter.css";

const FilterButton = ({ onFilter }) => {
    const [filterType, setFilterType] = useState('name');

    const handleFilter = () => {
        const newFilterType = filterType === 'name' ? 'number' : 'name';
        setFilterType(newFilterType);
        onFilter(newFilterType);
    };

    return (
        <div>
            <button onClick={handleFilter}>
                {filterType === 'name' ? 'A' : '#'}
            </button>
        </div>
    );
};

export default FilterButton;
