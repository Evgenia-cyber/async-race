import store from '../store';

const stopDriveFetch = async () => {
    // прерываем запрос driveCar() из api.ts
    store.controller.abort();
    store.controller = new AbortController();
};

export default stopDriveFetch;
