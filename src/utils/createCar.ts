import { createCar as createCarApi } from '../api';

const createCar = (event: MouseEvent, nameInput: HTMLInputElement, colorInput: HTMLInputElement) => {
    event.preventDefault();
    if (!nameInput.value) {
        // eslint-disable-next-line no-alert
        alert('Enter car name!');
        return;
    }
    createCarApi(nameInput.value, colorInput.value);
    document.location.reload();
};

export default createCar;
