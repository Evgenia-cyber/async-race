import { disableBtn, enableBtn } from './utils';
import store from '../store';
import raceCar from './raceCar';

const raceAll = async () => {
    disableBtn(`#race-cars`);
    enableBtn(`#reset-cars`);

    const promises = store.cars.map((car) => raceCar(car.id.toString()));
    console.log(promises);
};

export default raceAll;
