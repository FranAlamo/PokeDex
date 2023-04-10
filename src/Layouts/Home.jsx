import React from 'react'
import { Outlet } from 'react-router-dom'
import Title from "../Components/Title/Title.jsx";
import SearchBar from "../Components/Search/Search.jsx";
import FilterButton from '../Components/Filter/Filter.jsx';
import "./Home.css";

function Home() {
    // const [filteredData, setFilteredData] = useState([]);
    // const [filterType, setFilterType] = useState('name');

    // const handleFilter = (type) => {
    //   setFilterType(type);
    //   // Implement your filter logic here
    //   // For example, filter the data based on the filter type
    //   const filtered = /* ... */;
    //   setFilteredData(filtered);


    return (
        <div className='Home'>
            <div className="header">
                <Title />
                <SearchBar />
                <FilterButton />
            </div>
            <div className="main">

            </div>

        </div>
    )
}

export default Home