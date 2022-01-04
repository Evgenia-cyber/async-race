import store from '../store';
import renderCar from './carItem';

const renderCars = () => store.cars.map((car) => renderCar(car)).join('');

export default renderCars;
