import { getId } from './utils/utils';
import renderApp from './app';
import { VIEW_NAME } from './constants';
import createCar from './utils/createCar';
import linkTo from './utils/linkTo';
import selectCar from './utils/selectCar';
import updateCar from './utils/updateCar';
import paginate from './utils/paginate';
import raceCar from './utils/raceCar';
import resetCar from './utils/resetCar';
import raceAll from './utils/raceAll';
import resetAll from './utils/resetAll';
import generateCars from './utils/generateCars';

import './index.scss';

const root = document.querySelector('#root');
root.innerHTML = renderApp();

const garageViewEl = document.querySelector('.garage-view') as HTMLElement;
const winnersViewEl = document.querySelector('.winners-view') as HTMLElement;

const createCarNameInput = document.querySelector('#create-car-name') as HTMLInputElement;
const createCarColorInput = document.querySelector('#create-car-color') as HTMLInputElement;

const updateCarNameInput = document.querySelector('#update-car-name') as HTMLInputElement;
const updateCarColorInput = document.querySelector('#update-car-color') as HTMLInputElement;
const updateSubmit = document.querySelector('#submit-update-car') as HTMLInputElement;

const garagePaginationPrevBtn = document.querySelector('#garage-pagination-prev') as HTMLButtonElement;
const garagePaginationNextBtn = document.querySelector('#garage-pagination-next') as HTMLButtonElement;
const garageCurrentPageEl = document.querySelector('#garage-current-page-num') as HTMLElement;

const winnersPaginationPrevBtn = document.querySelector('#winners-pagination-prev') as HTMLButtonElement;
const winnersPaginationNextBtn = document.querySelector('#winners-pagination-next') as HTMLButtonElement;
const winnersCurrentPageEl = document.querySelector('#winners-current-page-num') as HTMLElement;

const carsEl = document.querySelector('#cars') as HTMLElement;
const winnersEl = document.querySelector('tbody') as HTMLElement;

const handlerOnClick = async (event: MouseEvent) => {
    const { id } = event.target as HTMLElement;
    console.log(2, id);
    if (id === 'link-to-winners') {
        linkTo(garageViewEl, winnersViewEl, VIEW_NAME.winners);
    } else if (id === 'link-to-garage') {
        linkTo(winnersViewEl, garageViewEl, VIEW_NAME.garage);
    } else if (id === 'submit-create-car') {
        createCar(event, createCarNameInput, createCarColorInput);
    } else if (id.includes('select-car-')) {
        selectCar(id, updateCarNameInput, updateCarColorInput, updateSubmit);
    } else if (id === 'submit-update-car') {
        updateCar(event, updateCarNameInput, updateCarColorInput, updateSubmit);
    } else if (id.includes('remove-car-')) {
        // TODO remove car from garage and from winners
        console.log('remove this car');
    } else if (id.includes('race-car-')) {
        const carId = getId('race-car-', id);
        raceCar(carId);
    } else if (id.includes('reset-car-')) {
        const carId = getId('reset-car-', id);
        resetCar(carId);
    } else if (id === 'race-cars') {
        raceAll();
    } else if (id === 'reset-cars') {
        resetAll();
    } else if (id === 'generate-cars') {
        generateCars();
    } else if (id === 'garage-pagination-next') {
        paginate(garagePaginationPrevBtn, garagePaginationNextBtn, garageCurrentPageEl, carsEl, true);
    } else if (id === 'garage-pagination-prev') {
        paginate(garagePaginationPrevBtn, garagePaginationNextBtn, garageCurrentPageEl, carsEl, false);
    } else if (id === 'winners-pagination-next') {
        paginate(winnersPaginationPrevBtn, winnersPaginationNextBtn, winnersCurrentPageEl, winnersEl, true);
    } else if (id === 'winners-pagination-prev') {
        paginate(winnersPaginationPrevBtn, winnersPaginationNextBtn, winnersCurrentPageEl, winnersEl, false);
    }
};

document.addEventListener('click', handlerOnClick);
