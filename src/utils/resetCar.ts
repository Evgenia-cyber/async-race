import { stopAnimation } from './animate';
import { disableBtn, enableBtn } from './utils';
import { stopCar } from '../api';

const resetCar = async (carId: string) => {
    disableBtn(`#reset-car-${carId}`);

    const data = await stopCar(carId);
    if (data) {
        stopAnimation();
        enableBtn(`#race-car-${carId}`);
        const carEl = document.querySelector(`#car-${carId}`) as HTMLElement;
        carEl.style.transform = `translateX(0px)`;
    }
};

export default resetCar;
