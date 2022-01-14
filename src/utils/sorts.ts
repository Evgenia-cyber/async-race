import { SORTS, ORDERS } from '../types/common';
import { getWinners } from '../api';
import renderWinnersTable from '../components/winnersTable';
import store from '../store';

const sorts = async (id: string) => {
    const sortsButtons: Array<HTMLButtonElement> = Array.from(document.querySelectorAll('.button-sort'));

    sortsButtons.forEach((button) => {
        button.disabled = true;
    });

    const [, , sort, order] = id.split('-');
    store.sort = sort as SORTS;
    store.order = order as ORDERS;

    const { winners } = await getWinners(store.winnersCurrentPageNum, store.sort, store.order);

    if (winners.length) {
        store.winners = winners;
        document.querySelector('#winners').innerHTML = renderWinnersTable();
    }

    sortsButtons.forEach((button) => {
        button.disabled = false;
        button.classList.remove('active-sort');
        if (button.id === id) {
            button.classList.add('active-sort');
        }
    });
};

export default sorts;
