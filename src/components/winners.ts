import store from '../store';
import renderWinner from './winnerItem';

const renderWinners = () => store.winners.map((winner, index) => renderWinner(winner, index)).join('');

export default renderWinners;
