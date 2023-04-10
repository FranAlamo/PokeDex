import React from 'react'
import { Outlet } from 'react-router-dom'
import Card from '../Components/Card'
import './Home.css'

function Home() {



    return (
        <div className='Home'>

            <div className="header">

            </div>
            <div className="main">

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </div>
    )
}

export default Home