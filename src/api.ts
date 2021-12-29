import { COUNT_CARS_PER_PAGE, ENDPOINTS } from './constants';

export const a = 1;

export const getCars = async (pageNum: number, limit = COUNT_CARS_PER_PAGE) => {
    const response = await fetch(`${ENDPOINTS.garage}?_page=${pageNum}&_limit=${limit}`);

    const cars = await response.json();

    const allCarsCount = response.headers.get('X-Total-Count');

    return { cars, allCarsCount };
};
