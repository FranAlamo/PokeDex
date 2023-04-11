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

    const [filterType, setFilterType] = useState('name');
    const [pokemons, setPokemons] = useState(PokeData)

    const handleFilter = () => {
        const newFilterType = filterType === 'name' ? 'number' : 'name';
        setFilterType(newFilterType);

        if (pokemons === PokeData) {
            const pokemonsSortedByName = [...PokeData].sort((poke1, poke2) =>
                poke1.name.localeCompare(poke2.name)
            );
            setPokemons(pokemonsSortedByName);
        } else {
            setPokemons(PokeData);
        }

    };

    const [searchValue, setSearchValue] = useState("");

    const search = (e) => {
        const { value } = e.target;
        setSearchValue(value);

        const filteredPokemons = PokeData.filter(
            (pokemon) => pokemon.name.toLowerCase().includes(value.toLowerCase())
        );
        setPokemons(filteredPokemons);
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
                    />
                </div>
            </div>
            <div className="main">
                {pokemons.map((pokemon) =>
                    <Link to={pokemon.id.toString()}
                        key={pokemon.id}
                        style={{ textDecoration: "none", color: '#212121' }}
                    >  <Card
                            pokeid={pokemon.id}
                            pokeimg={pokemon.image}
                            pokename={pokemon.name}
                        />
                    </Link>
                )}



            </div>

        </div>
    )
}

export default Home