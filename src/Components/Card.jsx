import React from 'react'
import { Link } from 'react-router-dom'
function Card({ pokename, pokeimg, pokeid, pokemonColor, addToFavourite, pokemonFavourite }) {
    return (
        <div className="card" style={{ borderColor: pokemonColor }}>
            <div className='star-id-container'>
                {!pokemonFavourite ? <svg
                    onClick={() => addToFavourite(pokeid)}
                    xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                    viewBox="0 96 960 960" width="1.5rem">
                    <path fill='#80808056' d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" /></svg>
                    : <svg
                        onClick={() => addToFavourite(pokeid)}
                        xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                        viewBox="0 96 960 960" width="1.5rem">
                        <path fill='#f9cf30' d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" /></svg>
                }
                <p className='pokeid' style={{ color: pokemonColor }}>#{pokeid}</p>
            </div>
            <Link to={pokeid.toString()}
                style={{ textDecoration: "none", color: '#212121' }}>
                <img
                    className='pokeimg'
                    src={pokeimg}
                    alt="pokeimg" />
                <div className='name-container' style={{ backgroundColor: pokemonColor }}>
                    <p>{pokename}</p>
                </div>
            </Link>

        </div>
    )
}

export default Card