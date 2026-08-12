import React from 'react'

const ResturantCard = ({resName, cusine, starRating, eta, img}) => {
    return (
        <div className='res-card'>
            <img className='res-img' src={img} />
            <h3 className='res-name'>{resName}</h3>
            <h4 className='res-cusine'>{cusine}</h4>
            <h4 className='res-star'>{starRating}</h4>
            <h4 className='res-timing'>{eta} minutes</h4>
        </div>
    )

}

export default ResturantCard