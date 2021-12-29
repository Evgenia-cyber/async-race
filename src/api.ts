import { COUNT_CARS_PER_PAGE, ENDPOINTS, COUNT_WINNERS_PER_PAGE } from './constants';
import { ORDERS, SORTS } from './types/common';

export const getCars = async (pageNum: number, limit = COUNT_CARS_PER_PAGE) => {
    const response = await fetch(`${ENDPOINTS.garage}?_page=${pageNum}&_limit=${limit}`);

    const cars = await response.json();

    const allCarsCount = response.headers.get('X-Total-Count');

    return { cars, allCarsCount };
};

export const getWinners = async (
    pageNum: number,
    limit: number = COUNT_WINNERS_PER_PAGE,
    sort: SORTS = SORTS.ID,
    order: ORDERS = ORDERS.ASC
) => {
    const response = await fetch(`${ENDPOINTS.winners}?_page=${pageNum}&_limit=${limit}&_sort=${sort}&_order=${order}`);

    let winners;
    let allWinnersCount;

    if (!response.ok) {
        winners = [];
        allWinnersCount = 0;
    } else {
        winners = await response.json();

        allWinnersCount = response.headers.get('X-Total-Count');
    }

    return { winners, allWinnersCount };
};
