import renderApp from './app';
import { VIEW_NAME } from './constants';

import './index.scss';
import createCar from './utils/createCar';
import linkTo from './utils/linkTo';
import selectCar from './utils/selectCar';

const root = document.querySelector('#root');
root.innerHTML = renderApp();

const garageViewEl = document.querySelector('.garage-view') as HTMLElement;
const winnersViewEl = document.querySelector('.winners-view') as HTMLElement;

const createCarNameInput = document.querySelector('#create-car-name') as HTMLInputElement;
const createCarColorInput = document.querySelector('#create-car-color') as HTMLInputElement;

const updateCarNameInput = document.querySelector('#update-car-name') as HTMLInputElement;
const updateCarColorInput = document.querySelector('#update-car-color') as HTMLInputElement;
const updateSubmit = document.querySelector('#submit-update-car') as HTMLInputElement;

const handlerOnClick = (event: MouseEvent) => {
    const { id } = event.target as HTMLElement;
    console.log(2, id);
    if (id === 'link-to-winners') {
        linkTo(garageViewEl, winnersViewEl, VIEW_NAME.winners);
    } else if (id === 'link-to-garage') {
        linkTo(winnersViewEl, garageViewEl, VIEW_NAME.garage);
    } else if (id === 'submit-create-car') {
        createCar(event, createCarNameInput, createCarColorInput);
    } else if (id.includes('select-car-')) {
        selectCar(event, id, updateCarNameInput, updateCarColorInput, updateSubmit);
    }
};
document.addEventListener('click', handlerOnClick);
