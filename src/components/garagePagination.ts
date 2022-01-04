import { COUNT_CARS_PER_PAGE, DEFAULT_PAGE_NUMBER } from '../constants';
import store from '../store';
import { getMaxPageNum } from '../utils/paginate';

const renderGaragePagination = () => `
<div class='pagination'>
  <button class='button' id='garage-pagination-prev' ${
      store.garageCurrentPageNum === DEFAULT_PAGE_NUMBER ? 'disabled' : ''
  }>Prev</button>
  <button class='button' id='garage-pagination-next' ${
      store.garageCurrentPageNum === getMaxPageNum(store.allCarsCount, COUNT_CARS_PER_PAGE) ? 'disabled' : ''
  }>Next</button>
</div>`;

export default renderGaragePagination;
