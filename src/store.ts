import { getCars } from './api';
import { VIEW_NAME, DEFAULT_PAGE_NUMBER } from './constants';

const { cars, allCarsCount } = await getCars(DEFAULT_PAGE_NUMBER);

const store = {
    currentView: VIEW_NAME.garage,
    garageViewCurrentPageNum: DEFAULT_PAGE_NUMBER,
    cars,
    allCarsCount,
};

export default store;
