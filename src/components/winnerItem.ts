import { IWinner } from '../types/common';
import drawCar from '../utils/drawCar';

const renderWinner = ({ name, color, wins, time }: IWinner, index: number) => `
<tr>
  <td>${index + 1}</td>
  <td>${name}</td>
  <td>${drawCar(color)}</td>
  <td>${wins}</td>
  <td>${time}</td>
</tr>`;

export default renderWinner;
