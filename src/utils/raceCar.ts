import { disableBtn, enableBtn } from './utils';
import { driveCar, startCar } from '../api';
import { startAnimation, stopAnimation } from './animate';

const raceCar = async (carId: string) => {
    disableBtn(`#race-car-${carId}`);
    enableBtn(`#reset-car-${carId}`);

    const data = await startCar(carId);
    if (data) {
        const { velocity, distance } = data;
        const time = Math.round(distance / velocity);

        startAnimation(carId, time);

        const res = await driveCar(carId);
        if (res && !res.success) {
            stopAnimation(carId);
        }
        return { carId, time, success: res.success };
    }
    return {};
};

export default raceCar;
