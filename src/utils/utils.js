import { resList } from '../mocks/resMock';

export const topResFilter = () => {
    return ( resList.filter((res) => res.starRating > 4))
}