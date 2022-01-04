export const VIEW_NAME = {
    garage: 'Garage',
    winners: 'Winners',
};

export const DEFAULT_PAGE_NUMBER = 1;

export const COUNT_CARS_PER_PAGE = 7;

export const COUNT_WINNERS_PER_PAGE = 10;

const API_URL = 'http://127.0.0.1:3000';

export const ENDPOINTS = {
    garage: `${API_URL}/garage`,
    winners: `${API_URL}//winners`,
};

export const LOCAL_STORAGE_GARAGE_PAGE_NUM = 'garage-page-num';
