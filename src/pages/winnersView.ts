import renderWinnersTable from '../components/winnersTable';
import { VIEW_NAME } from '../constants';
import store from '../store';

const renderWinnersView = () => `
<div class='winners-view hide'>
  <h2>${VIEW_NAME.winners} (${store.allWinnersCount})</h2>
  <h3>Page#${store.winnersCurrentPageNum}</h3>
   ${store.allWinnersCount === '0' ? '<p>There are no winners yet</p>' : renderWinnersTable()}
</div>`;

export default renderWinnersView;
