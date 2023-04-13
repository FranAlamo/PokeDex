import React, { useState } from 'react';
import "./Filter.css";

const FilterButton = ({ filterType, handleFilter, showFavourites, showAll, viewingFavourites }) => {


    return (
        <div className='button-container'>
            <button onClick={handleFilter}>
                {filterType === 'name' ? '#' : 'A'}
            </button>
            <button
                style={viewingFavourites === true ? { backgroundColor: '#f9cf30' } : { backgroundColor: '#FFF' }}

                onClick={showFavourites}>
                <svg

                    xmlns="http://www.w3.org/2000/svg" height="1rem"
                    viewBox="0 0 960 960" width="1rem">
                    <path fill='#212121' d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" /></svg>

            </button>
            <button onClick={showAll}
                style={viewingFavourites === false ? { backgroundColor: '#666' } : { backgroundColor: '#FFF' }}
            >All</button>
        </div>
    );
};

export default FilterButton;
