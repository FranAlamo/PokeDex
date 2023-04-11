import React, { useState } from 'react';
import "./Filter.css";

const FilterButton = ({ filterType, handleFilter }) => {


    return (
        <div>
            <button onClick={handleFilter}>
                {filterType === 'name' ? '#' : 'A'}
            </button>
        </div>
    );
};

export default FilterButton;
