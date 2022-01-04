import { updateCar as updateCarApi } from '../api';

const updateCar = (
    event: MouseEvent,
    nameInput: HTMLInputElement,
    colorInput: HTMLInputElement,
    submitButton: HTMLInputElement
) => {
    event.preventDefault();
    if (!nameInput.value) {
        // eslint-disable-next-line no-alert
        alert('Enter car name!');
        return;
    }

    nameInput.disabled = true;
    colorInput.disabled = true;
    submitButton.disabled = true;

    const id = Number(submitButton.dataset.selectedCarId);
    updateCarApi(id, nameInput.value, colorInput.value);

    document.location.reload();
};

export default updateCar;
