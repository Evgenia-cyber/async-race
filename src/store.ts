import { getCars, getWinners } from './api';
import {
    VIEW_NAME,
    DEFAULT_PAGE_NUMBER,
    LOCAL_STORAGE_GARAGE_PAGE_NUM,
    LOCAL_STORAGE_WINNERS_PAGE_NUM,
} from './constants';
import { ORDERS, SORTS, IStore } from './types/common';

const garagePageNumFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_GARAGE_PAGE_NUM);
const initGaragePageNum = garagePageNumFromLocalStorage ? Number(garagePageNumFromLocalStorage) : DEFAULT_PAGE_NUMBER;

const winnersPageNumFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_WINNERS_PAGE_NUM);
const initWinnersPageNum = winnersPageNumFromLocalStorage
    ? Number(winnersPageNumFromLocalStorage)
    : DEFAULT_PAGE_NUMBER;

const { cars, allCarsCount } = await getCars(initGaragePageNum);

const { winners, allWinnersCount } = await getWinners(initWinnersPageNum);

const store: IStore = {
    currentView: VIEW_NAME.garage,
    garageCurrentPageNum: initGaragePageNum,
    cars,
    allCarsCount,
    winnersCurrentPageNum: initWinnersPageNum,
    winners,
    allWinnersCount,
    sort: SORTS.ID,
    order: ORDERS.ASC,
    controller: new AbortController(),
};

export default store;
