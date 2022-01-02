// import { updateCar as updateCarApi } from '../api';

const updateCar = (event: MouseEvent, nameInput: HTMLInputElement, colorInput: HTMLInputElement) => {
    event.preventDefault();
    if (!nameInput.value) {
        // eslint-disable-next-line no-alert
        alert('Enter car name!');
        return;
    }
    // updateCarApi(nameInput.value, colorInput.value);
    document.location.reload();
};

export default updateCar;
