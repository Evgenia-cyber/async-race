import { ICar } from '../types/common';
import drawCar from '../utils/drawCar';
import flagImg from '../assets/svg/flag.svg';

const renderCar = ({ id, name, color }: ICar) => `
<div class='car-item'>
  <p class='car-name'>${name}</p>
  <div class='road'>
    <div class='car'>
      ${drawCar(color, id)}
    </div>
    <img class='flag' src=${flagImg} alt='flag'/>
  </div>
  <button class='button' id='select-car-${id}'>Select</button>
  <button class='button' id='remove-car-${id}'>Remove</button>
  <button class='button' id='race-car-${id}'>Race</button>
  <button class='button' id='reset-car-${id}' disabled>Reset</button>
</div>`;

export default renderCar;
