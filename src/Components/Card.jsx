import React from 'react'

function Card({ pokename, pokeimg, pokeid }) {
    return (
        <div className="card">
            <p>#{pokeid}</p>
            <img src={pokeimg} alt="pokeimg" />
            <p>{pokename}</p>
        </div>)
}

export default Card