import React from 'react'
import ResturantCard from './ResturantCard'
import { resList } from '../mocks/resMock'
import { topResFilter } from '../utils/utils'
import { useState } from 'react'

const Body = () => {
    const [ resturants, setResturants ] = useState(resList);
    const handleTopRes = () => setResturants(topResFilter());
    const handleShowAll = () => setResturants(resList);
    return (
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn' onClick={handleTopRes}>Top rated Resturants</button>
                <button className='filter-btn' onClick={handleShowAll}>Show all Resturants</button>
            </div>
            <div className='res-container'>
                {resturants?.map((res) => (
                    <ResturantCard resName={res.resName} cusine={res.cusine} img={res.imageUrl} starRating={res.starRating} eta={res.eta} />
                ))}
            </div>
        </div>
    )

}

export default Body