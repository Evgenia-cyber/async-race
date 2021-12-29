import { getCars, getWinners } from './api';
import { VIEW_NAME, DEFAULT_PAGE_NUMBER } from './constants';
import { ORDERS, SORTS, IStore } from './types/common';

const { cars, allCarsCount } = await getCars(DEFAULT_PAGE_NUMBER);
const { winners, allWinnersCount } = await getWinners(DEFAULT_PAGE_NUMBER);

const store: IStore = {
    currentView: VIEW_NAME.garage,
    garageCurrentPageNum: DEFAULT_PAGE_NUMBER,
    cars,
    allCarsCount,
    winnersCurrentPageNum: DEFAULT_PAGE_NUMBER,
    winners,
    allWinnersCount,
    sort: SORTS.ID,
    order: ORDERS.ASC,
};

export default store;
