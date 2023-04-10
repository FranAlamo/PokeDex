import React from 'react'

function Card({ pokename, pokeimg, pokeid }) {
    return (
        <div className="card">
            <p className='pokeid'>#{pokeid}</p>
            <img
                className='pokeimg'
                src={pokeimg}
                alt="pokeimg" />
            <div className='name-container'>
                <p>{pokename}</p>
            </div>
        </div>)
}

export default Card