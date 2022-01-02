import renderCar from '../components/carItem';
import renderCreateCarComponent from '../components/createCar';
import renderUpdateCarComponent from '../components/updateCar';
import { VIEW_NAME } from '../constants';
import store from '../store';

const renderGarageView = () => `
<div class='garage-view'>
  ${renderCreateCarComponent()}
  ${renderUpdateCarComponent()}
  <h2>${VIEW_NAME.garage} (${store.allCarsCount})</h2>
  <h3>Page#${store.garageCurrentPageNum}</h3>
  ${store.cars.map((car) => renderCar(car)).join('')}
</div>`;

export default renderGarageView;
