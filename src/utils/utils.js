import { resList } from '../mocks/resMock';

export const topResFilter = () => {
    return (resList.filter((res) => res.starRating > 4))
}

export const fetchData = async (url) => {
    const data = await fetch(url);
    if (!data.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const json = await data.json();
    console.log(json);
    return json;
}

export const fetchResData = async (url) => {
    const resJson = await fetchData(url);
    const restaurants = resJson ? resJson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants : null;
    const resList = restaurants?.map((res) => {
        return ({
            id: res.info.id,
            resName: res.info.name,
            cusine: res.info.cuisines,
            starRating: res.info.avgRating,
            eta: res.info.sla.slaString,
            img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + res.info.cloudinaryImageId
        })

    })
    return resList;
}