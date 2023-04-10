import React, { useState } from 'react';

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
                {filterType === 'name' ? 'Filter by Name' : 'Filter by Number'}
            </button>
        </div>
    );
};

export default FilterButton;
