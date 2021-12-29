import { VIEW_NAME } from '../constants';
import store from '../store';

const renderGarageView = () => `
<div class='garage-view'>
  <h2>${VIEW_NAME.garage} (${store.allCarsCount})</h2>
  <h3>Page#${store.garageCurrentPageNum}</h3>
</div>`;

export default renderGarageView;
