import renderApp from './app';
import { VIEW_NAME } from './constants';

import './index.scss';
import store from './store';

const root = document.querySelector('#root');
root.innerHTML = renderApp();

const garageViewEl = document.querySelector('.garage-view');
const winnersViewEl = document.querySelector('.winners-view');

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
