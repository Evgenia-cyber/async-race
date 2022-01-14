import { ORDERS, SORTS } from '../types/common';

const renderSortsButtons = () => `
<div class='buttons-sort'>
  <button class='button button-sort active-sort' id='sort-by-${SORTS.ID}-${ORDERS.ASC}'>Sort by ${SORTS.ID} &#8593;</button>
  <button class='button button-sort' id='sort-by-${SORTS.ID}-${ORDERS.DESC}'>Sort by ${SORTS.ID} &#8595;</button>
</div>
<div class='buttons-sort'>
  <button class='button button-sort' id='sort-by-${SORTS.WINS}-${ORDERS.ASC}'>Sort by ${SORTS.WINS} count &#8593;</button>
  <button class='button button-sort' id='sort-by-${SORTS.WINS}-${ORDERS.DESC}'>Sort by ${SORTS.WINS} count &#8595;</button>
</div>
<div class='buttons-sort'>
  <button class='button button-sort' id='sort-by-${SORTS.TIME}-${ORDERS.ASC}'>Sort by ${SORTS.TIME} &#8593;</button>
  <button class='button button-sort' id='sort-by-${SORTS.TIME}-${ORDERS.DESC}'>Sort by ${SORTS.TIME} &#8595;</button>
</div>
  `;

export default renderSortsButtons;
