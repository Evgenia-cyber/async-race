import { getWinners, saveWinner } from '../api';
import renderWinners from '../components/winners';
import { DEFAULT_PAGE_NUMBER, VIEW_NAME } from '../constants';
import store from '../store';

const addWinner = async (carId: string, time: number) => {
    await saveWinner(carId, time);

    const { winners, allWinnersCount } = await getWinners(DEFAULT_PAGE_NUMBER);

    store.winners = winners;
    store.allWinnersCount = allWinnersCount;

    document.querySelector('#winners-title').innerHTML = `${VIEW_NAME.winners} (${store.allWinnersCount})`;

    document.querySelector('tbody').innerHTML = renderWinners();
};

export default addWinner;
