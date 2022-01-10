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
    winners: `${API_URL}/winners`,
    engine: `${API_URL}/engine`,
};

export const LOCAL_STORAGE_GARAGE_PAGE_NUM = 'garage-page-num';

export const TIME_TO_SHOW_THE_WINNER = 3000;

export const CAR_BRANDS = [
    'Audi',
    'Bentley',
    'BMW',
    'Bugatti',
    'Cadillac',
    'Chevrolet',
    'Citroen',
    'DODGE',
    'Ferrari',
    'FIAT',
    'Ford',
    'Honda',
    'Hummer',
    'Infiniti',
    'Jaguar',
];

export const CAR_MODELS = [
    'Lanos',
    'Priora',
    'Logan',
    'Granta',
    'Nexia',
    'Kalina',
    'Patriot',
    'Largus',
    'Combi',
    '452',
];

export const RANDOM_CARS_COUNT = 100;

export const TOTAL_NUMBER_OF_COLORS = 16777215; // is 256×256×256, the total number of colors that can be displayed using #RRGGBB color format (or with CSS rgb())

export const COUNT_OF_SYMBOLS_IN_HEX = 6;
