import { disableBtn, enableBtn } from './utils';
import store from '../store';
import raceCar from './raceCar';
import { TIME_TO_SHOW_THE_WINNER } from '../constants';

const showPopup = (element: HTMLElement, text: string) => {
    element.innerHTML = text;
    element.classList.remove('hide');
};

const hidePopup = (element: HTMLElement) => {
    element.classList.add('hide');
};

const getWinnerName = (carId: string) => store.cars.filter((car) => car.id === Number(carId))[0].name;

const showWinnerOverTime = (carId: string) => {
    const popupEl = document.querySelector('.popup') as HTMLElement;

    const carName = getWinnerName(carId);
    showPopup(popupEl, `${carName} won!`);
    window.setTimeout(() => hidePopup(popupEl), TIME_TO_SHOW_THE_WINNER);
};

const getWinner = async (promises: Promise<any>[], ids: Array<number>) => {
    try {
        const res = await (Promise as any).any(promises);

        const { carId, time, success }: { carId: string; time: number; success: boolean } = res;

        if (!success) {
            const stoppedCarIndex = ids.indexOf(Number(carId));
            promises.splice(stoppedCarIndex, 1);
            ids.splice(stoppedCarIndex, 1);

            getWinner(promises, ids);
        } else {
            showWinnerOverTime(carId);
            console.log('winner:', carId, time);
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error: ', error);
    }
};

const raceAll = async () => {
    disableBtn(`#race-cars`);
    enableBtn(`#reset-cars`);

    const { promises, ids }: { promises: Promise<any>[]; ids: Array<number> } = store.cars.reduce(
        (res, car) => {
            res.promises.push(raceCar(car.id.toString()));
            res.ids.push(car.id);
            return res;
        },
        { promises: [], ids: [] }
    );
    // const promises = store.cars.map((car) => raceCar(car.id.toString()));
    getWinner(promises, ids);
};

export default raceAll;
