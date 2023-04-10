import React from 'react'
import { useParams } from 'react-router-dom'
import PokeData from '../../Components/Pokedata'
import './Details.css'
function Details() {
    const { id } = useParams()

    const pokemon = PokeData.find(pokemon => pokemon.id === id)

    return (
        <div className='pokemon-details'>
            <header className='pokemon-name' style={{ backgroundColor: pokemon.color }}>
                <div className='name-div'>
                    <svg
                        className='arrow-back'
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="#FFFFFF" d="m12.23 20.512.774-.774a.469.469 0 0 0 0-.663l-6.06-6.06h13.337c.26 0 .469-.21.469-.468v-1.094a.469.469 0 0 0-.469-.469H6.944l6.06-6.06a.469.469 0 0 0 0-.662l-.774-.774a.469.469 0 0 0-.662 0l-8.18 8.18a.469.469 0 0 0 0 .664l8.18 8.18c.183.183.48.183.662 0Z" />
                    </svg>

                    <p>{pokemon.name}</p>
                </div>
                <p className='pokemon-id'>#{pokemon.id}</p>
            </header>

            <main className='pokemon-info'>
                <img
                    className='pokemon-img'
                    src={pokemon.image}
                />
                <div className='about'>

                </div>
                <div className='stats'></div>
            </main>
        </div>
    )
}

export default Details
