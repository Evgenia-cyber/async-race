import { getId } from './utils';
import store from '../store';

const selectCar = (
    id: string,
    nameInput: HTMLInputElement,
    colorInput: HTMLInputElement,
    submitButton: HTMLInputElement
) => {
    const selectedCarId = Number(getId('select-car-', id));
    const selectedCar = store.cars.filter((car) => car.id === selectedCarId)[0];
    nameInput.disabled = false;
    nameInput.value = selectedCar.name;
    colorInput.disabled = false;
    colorInput.value = selectedCar.color;
    submitButton.disabled = false;
    submitButton.dataset.selectedCarId = selectedCarId.toString();
};

export default selectCar;
