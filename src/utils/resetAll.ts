import { disableBtn, enableBtn } from './utils';
import store from '../store';
import resetCar from './resetCar';

const resetAll = async () => {
    disableBtn(`#reset-cars`);
    enableBtn(`#race-cars`);

    store.cars.map((car) => resetCar(car.id.toString()));
};

export default resetAll;
