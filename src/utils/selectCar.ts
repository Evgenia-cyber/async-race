import store from '../store';

const selectCar = (
    event: MouseEvent,
    id: string,
    nameInput: HTMLInputElement,
    colorInput: HTMLInputElement,
    submitButton: HTMLInputElement
) => {
    const selectedCarId = Number(id.split('select-car-')[1]);
    const selectedCar = store.cars.filter((car) => car.id === selectedCarId)[0];
    nameInput.disabled = false;
    nameInput.value = selectedCar.name;
    colorInput.disabled = false;
    colorInput.value = selectedCar.color;
    submitButton.disabled = false;
};

export default selectCar;
