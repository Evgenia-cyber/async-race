import renderCars from '../components/cars';
import renderCreateCarComponent from '../components/createCar';
import renderGaragePagination from '../components/garagePagination';
import renderUpdateCarComponent from '../components/updateCar';
import { VIEW_NAME } from '../constants';
import store from '../store';

const renderGarageView = () => `
<div class='garage-view'>
  ${renderCreateCarComponent()}
  ${renderUpdateCarComponent()}
  <h2>${VIEW_NAME.garage} (${store.allCarsCount})</h2>
  <h3 id='garage-current-page-num'>Page#${store.garageCurrentPageNum}</h3>
  <div id='cars'>${renderCars()}</div>
  ${renderGaragePagination()}
</div>`;

export default renderGarageView;
