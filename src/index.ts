import renderApp from './app';
import { VIEW_NAME } from './constants';

import './index.scss';
import store from './store';
import createCar from './utils/createCar';
import selectCar from './utils/selectCar';

const root = document.querySelector('#root');
root.innerHTML = renderApp();

const garageViewEl = document.querySelector('.garage-view');
const winnersViewEl = document.querySelector('.winners-view');

const createCarNameInput = document.querySelector('#create-car-name') as HTMLInputElement;
const createCarColorInput = document.querySelector('#create-car-color') as HTMLInputElement;

const updateCarNameInput = document.querySelector('#update-car-name') as HTMLInputElement;
const updateCarColorInput = document.querySelector('#update-car-color') as HTMLInputElement;
const updateSubmit = document.querySelector('#submit-update-car') as HTMLInputElement;

const toGarageHandler = () => {
    store.currentView = VIEW_NAME.garage;
    winnersViewEl.classList.add('hide');
    garageViewEl.classList.remove('hide');
};
document.querySelector('#link-to-garage').addEventListener('click', toGarageHandler);

const toWinnersHandler = () => {
    store.currentView = VIEW_NAME.garage;
    garageViewEl.classList.add('hide');
    winnersViewEl.classList.remove('hide');
};
document.querySelector('#link-to-winners').addEventListener('click', toWinnersHandler);

const handlerOnClick = (event: MouseEvent) => {
    const { id } = event.target as HTMLElement;
    console.log(2, id);
    if (id === 'submit-create-car') {
        createCar(event, createCarNameInput, createCarColorInput);
    } else if (id.includes('select-car-')) {
        selectCar(event, id, updateCarNameInput, updateCarColorInput, updateSubmit);
    }
};
document.addEventListener('click', handlerOnClick);
