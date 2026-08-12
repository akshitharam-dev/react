import React from 'react'
import ResturantCard from './ResturantCard'
import Shimmer from './Shimmer'
import { topResFilter, fetchResData } from '../utils/utils'
import { useState, useEffect } from 'react'
import { swiggyApi } from '../utils/constants';
import { resList } from '../mocks/resMock'

const Body = () => {
    const [ resturants, setResturants ] = useState([]);
    const [ searchText, setSearchText ] = useState('');
    const [ noResults, setNoResults ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    useEffect(() => {
        fetchResturants();
    }, [])
    const fetchResturants = async () => {
        setLoading(true);
        const resList = await fetchResData(swiggyApi);
        setResturants(resList);
        setLoading(false);
    }
    const handleTopRes = () => setResturants(topResFilter());
    const handleShowAll = async () => {
        await fetchResturants();
        setSearchText('');
        setNoResults(false);
    }
    const handleSearch = () => {
        const filteredRes = resList.filter(res => res.resName.toLowerCase().includes(searchText.toLowerCase()));
        filteredRes.length > 0 ? setResturants(filteredRes) : setNoResults(true);
        setSearchText('');
    }
    return (
            loading ? <Shimmer /> :
            noResults ? <div>
                    <p>No Results Found..!</p>
                    <p>
                        <button className='filter-btn' onClick={handleShowAll}>Show all Resturants</button>
                    </p>
                </div> : 
        <div className='body'>
            <div className='search'>
                <input type='text' value={searchText} onChange={(e)=>setSearchText(e.target.value)} className='search-box' />
                <button className='search-btn' onClick={handleSearch}>Search..!</button>
            </div>
            <div className='filter'>
                <button className='filter-btn' onClick={handleTopRes}>Top rated Resturants</button>
                <button className='filter-btn' onClick={handleShowAll}>Show all Resturants</button>
            </div>
            <div className='res-container'>
                {resturants?.map((res) => (
                    <ResturantCard key={res.id} resName={res.resName} cusine={res.cusine} img={res.img} starRating={res.starRating} eta={res.eta} />
                ))}
            </div>
        </div>
    )

}

export default Body