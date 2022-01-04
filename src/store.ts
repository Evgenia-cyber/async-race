import { getCars, getWinners } from './api';
import { VIEW_NAME, DEFAULT_PAGE_NUMBER, LOCAL_STORAGE_GARAGE_PAGE_NUM } from './constants';
import { ORDERS, SORTS, IStore } from './types/common';

const garagePageNumFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_GARAGE_PAGE_NUM);
const initGaragePageNum = garagePageNumFromLocalStorage ? Number(garagePageNumFromLocalStorage) : DEFAULT_PAGE_NUMBER;

const { cars, allCarsCount } = await getCars(initGaragePageNum);
const { winners, allWinnersCount } = await getWinners(DEFAULT_PAGE_NUMBER);

const store: IStore = {
    currentView: VIEW_NAME.garage,
    garageCurrentPageNum: initGaragePageNum,
    cars,
    allCarsCount,
    winnersCurrentPageNum: DEFAULT_PAGE_NUMBER,
    winners,
    allWinnersCount,
    sort: SORTS.ID,
    order: ORDERS.ASC,
};

export default store;
