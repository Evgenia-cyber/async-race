import { COUNT_WINNERS_PER_PAGE, DEFAULT_PAGE_NUMBER } from '../constants';
import store from '../store';
import { getMaxPageNum } from '../utils/paginate';

const renderWinnersPagination = () => `
<div class='pagination winners-pagination'>
  <button class='button' id='winners-pagination-prev' ${
      store.winnersCurrentPageNum === DEFAULT_PAGE_NUMBER ? 'disabled' : ''
  }>Prev</button>
  <button class='button' id='winners-pagination-next' ${
      store.winnersCurrentPageNum === getMaxPageNum(store.allWinnersCount, COUNT_WINNERS_PER_PAGE) ||
      store.allWinnersCount === '0'
          ? 'disabled'
          : ''
  }>Next</button>
</div>`;

export default renderWinnersPagination;
