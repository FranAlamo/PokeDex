import React from 'react'
import { Outlet } from 'react-router-dom'
import Card from '../Components/Card'
import './Home.css'
import bulbasaurimg from '../Iconos e imagenes/bulbasaur.png'

function Home() {



    return (
        <div className='Home'>

            <div className="header">

            </div>
            <div className="main">
                <Card
                    pokeid='001'
                    pokeimg={bulbasaurimg}
                    pokename='Bulbasaur'
                />
                <Card
                    pokeid='001'
                    pokeimg={bulbasaurimg}
                    pokename='Bulbasaur'
                />
                <Card
                    pokeid='001'
                    pokeimg={bulbasaurimg}
                    pokename='Bulbasaur'
                />
                <Card
                    pokeid='001'
                    pokeimg={bulbasaurimg}
                    pokename='Bulbasaur'
                />
                <Card
                    pokeid='001'
                    pokeimg={bulbasaurimg}
                    pokename='Bulbasaur'
                />
                <Card
                    pokeid='001'
                    pokeimg={bulbasaurimg}
                    pokename='Bulbasaur'
                />
                <Card
                    pokeid='001'
                    pokeimg={bulbasaurimg}
                    pokename='Bulbasaur'
                />
                <Card
                    pokeid='001'
                    pokeimg={bulbasaurimg}
                    pokename='Bulbasaur'
                />
                <Card
                    pokeid='001'
                    pokeimg={bulbasaurimg}
                    pokename='Bulbasaur'
                />
            </div>

        </div>
    )
}

export default Home