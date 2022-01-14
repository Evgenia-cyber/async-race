import { COUNT_WINNERS_PER_PAGE } from '../constants';
import store from '../store';
import { IWinner } from '../types/common';
import drawCar from '../utils/drawCar';

const renderWinner = ({ name, color, wins, time }: IWinner, index: number) => {
    const countOfPrevCars = (store.winnersCurrentPageNum - 1) * COUNT_WINNERS_PER_PAGE;

    return `
<tr>
  <td>${countOfPrevCars + index + 1}</td>
  <td>${name}</td>
  <td>${drawCar(color)}</td>
  <td>${wins}</td>
  <td>${time}</td>
</tr>`;
};

export default renderWinner;
