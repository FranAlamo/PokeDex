import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Title from "../../Components/Title/Title.jsx";
import SearchBar from "../../Components/Search/Search.jsx";
import FilterButton from '../../Components/Filter/FilterButton.jsx';
import "./Home.css";
import Card from '../../Components/Card.jsx'
import './Home.css'
import PokeData from '../../Components/Pokedata.jsx';

function Home() {

    const [viewingFavourites, setViewingFavourites] = useState(false)
    const [filterType, setFilterType] = useState('name');
    const [pokemons, setPokemons] = useState(PokeData)

    const handleFilter = () => {
        const newFilterType = filterType === 'name' ? 'number' : 'name';
        setFilterType(newFilterType);
        if (filterType === 'name') {
            const pokemonsSortedByName = [...pokemons].sort((poke1, poke2) =>
                poke1.name.localeCompare(poke2.name)
            )
            setPokemons(pokemonsSortedByName);

        } else {
            const pokemonsSortedById = [...pokemons].sort((poke1, poke2) =>
                poke1.id.localeCompare(poke2.id))
            setPokemons(pokemonsSortedById)
        }

    };

    const [searchValue, setSearchValue] = useState("");

    const search = (e) => {
        const { value } = e.target;
        setSearchValue(value);

        const filteredPokemons = PokeData.filter((pokemon) => viewingFavourites ? pokemon.favourite : true).filter(
            (pokemon) => pokemon.name.toLowerCase().includes(value.toLowerCase())
        );
        setPokemons(filteredPokemons);
        if (value === '' && viewingFavourites) { setPokemons(favouritesPokemons) }
        if (value === '' && viewingFavourites === false) { setPokemons(PokeData) }

    }


    const addToFavourite = (id) => {
        const updatedPokemons = pokemons.map(
            (pokemon) => {
                if (pokemon.id == id) {
                    pokemon.favourite = (pokemon.favourite === true ? false : true)

                }
                return pokemon
            }
        )
        setPokemons(updatedPokemons)
    }

    const showFavourites = () => {
        const favouritesPokemons = pokemons.filter(
            pokemon => pokemon.favourite === true
        )

        setPokemons(favouritesPokemons)
        setViewingFavourites(true)
    }

    const showAll = () => {
        setPokemons(PokeData)
        setViewingFavourites(false)
    }

    return (
        <div className='Home'>

            <div className="header">
                <Title />
                <div className='input-container'>
                    <SearchBar
                        pokeData={pokemons}
                        search={search}
                        value={searchValue}
                    />
                    <FilterButton
                        filterType={filterType}
                        handleFilter={handleFilter}
                        showFavourites={showFavourites}
                        showAll={showAll}
                        viewingFavourites={viewingFavourites}
                    />
                </div>
            </div>
            <div className="main">
                {pokemons.map((pokemon) =>

                    <Card
                        key={pokemon.id}

                        pokeid={pokemon.id}
                        pokeimg={pokemon.image}
                        pokename={pokemon.name}
                        pokemonColor={pokemon.color}
                        addToFavourite={addToFavourite}
                        pokemonFavourite={pokemon.favourite}
                    />
                )}



            </div>

        </div>
    )
}

export default Home