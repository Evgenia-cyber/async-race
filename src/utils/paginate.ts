import { getCars, getWinners } from '../api';
import renderCars from '../components/cars';
import renderWinnersTable from '../components/winnersTable';
import {
    DEFAULT_PAGE_NUMBER,
    VIEW_NAME,
    COUNT_CARS_PER_PAGE,
    LOCAL_STORAGE_GARAGE_PAGE_NUM,
    COUNT_WINNERS_PER_PAGE,
    LOCAL_STORAGE_WINNERS_PAGE_NUM,
} from '../constants';
import store from '../store';
import { disableBtn, enableBtn } from './utils';

export const getMaxPageNum = (allCount: string, countPerPage: number) => Math.ceil(Number(allCount) / countPerPage);

const paginate = async (
    prevBtnEl: HTMLButtonElement,
    nextBtnEl: HTMLButtonElement,
    currentPageNumEl: HTMLElement,
    rerenderedEl: HTMLElement,
    isNextBtnClicked: boolean = false
) => {
    const isGarageView = store.currentView === VIEW_NAME.garage;

    const currentPageNum = isGarageView ? store.garageCurrentPageNum : store.winnersCurrentPageNum;

    const newPageNum = isNextBtnClicked ? currentPageNum + 1 : currentPageNum - 1;

    if (newPageNum === DEFAULT_PAGE_NUMBER) {
        prevBtnEl.disabled = true;
    } else {
        prevBtnEl.disabled = false;
    }

    const maxPageNum = isGarageView
        ? getMaxPageNum(store.allCarsCount, COUNT_CARS_PER_PAGE)
        : getMaxPageNum(store.allWinnersCount, COUNT_WINNERS_PER_PAGE);

    if (newPageNum === maxPageNum) {
        nextBtnEl.disabled = true;
    } else {
        nextBtnEl.disabled = false;
    }

    if (isGarageView) {
        store.garageCurrentPageNum = newPageNum;

        currentPageNumEl.innerHTML = `Page#${store.garageCurrentPageNum}`;

        const result = await getCars(newPageNum);
        store.cars = result.cars;

        rerenderedEl.innerHTML = renderCars();

        disableBtn('#reset-cars');
        enableBtn('#race-cars');
    } else {
        store.winnersCurrentPageNum = newPageNum;

        currentPageNumEl.innerHTML = `Page#${store.winnersCurrentPageNum}`;

        const result = await getWinners(newPageNum);
        store.winners = result.winners;

        rerenderedEl.innerHTML = renderWinnersTable();
    }

    const localStorageName = isGarageView ? LOCAL_STORAGE_GARAGE_PAGE_NUM : LOCAL_STORAGE_WINNERS_PAGE_NUM;

    localStorage.setItem(localStorageName, newPageNum.toString());
};

export default paginate;
