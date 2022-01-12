import { COUNT_CARS_PER_PAGE, ENDPOINTS, COUNT_WINNERS_PER_PAGE, DEFAULT_COUNT_OF_WINS } from './constants';
import store from './store';
import { CAR_STATUS, IWinner, IWinnerFromServer, ORDERS, SORTS, STATUS } from './types/common';

export const getCar = async (id: number) => {
    const response = await fetch(`${ENDPOINTS.garage}/${id}`);

    if (response.status === STATUS.OK) {
        const car = await response.json();
        return car;
    }

    if (response.status === STATUS.NOT_FOUND) {
        // eslint-disable-next-line no-console
        console.log(`Error: car id=${id} not found in winners`);
        return {};
    }

    // eslint-disable-next-line no-alert
    return alert('Server is not available!');
};

export const createCar = async (name: string, color: string) => {
    const response = await fetch(`${ENDPOINTS.garage}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, color }),
    });

    if (response.status === STATUS.CREATED) {
        const newCar = await response.json();
        return newCar;
    }
    // eslint-disable-next-line no-alert
    return alert('Server is not available!');
};

export const updateCar = async (id: number, name: string, color: string) => {
    const response = await fetch(`${ENDPOINTS.garage}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, color }),
    });

    if (response.status === STATUS.OK) {
        const updatedCar = await response.json();
        return updatedCar;
    }

    if (response.status === STATUS.NOT_FOUND) {
        // eslint-disable-next-line no-alert
        return alert('Car not found!');
    }

    // eslint-disable-next-line no-alert
    return alert('Server is not available!');
};

export const startOrStopCar = async (id: string, status: CAR_STATUS) => {
    const response = await fetch(`${ENDPOINTS.engine}?id=${id}&status=${status}`, {
        method: 'PATCH',
    });

    if (response.status === STATUS.OK) {
        const data = await response.json();
        return data;
    }

    if (response.status === STATUS.NOT_FOUND) {
        // eslint-disable-next-line no-console
        return console.error('Error: Car with such id was not found in the garage.');
    }

    if (response.status === STATUS.BAD_REQUEST) {
        // eslint-disable-next-line no-console
        return console.error(
            'Error: Wrong parameters: "id" should be any positive number, "status" should be "started", "stopped" or "drive"'
        );
    }

    // eslint-disable-next-line no-alert
    return alert('Server is not available!');
};

export const startCar = async (id: string) => startOrStopCar(id, CAR_STATUS.STARTED);

export const stopCar = async (id: string) => startOrStopCar(id, CAR_STATUS.STOPPED);

export const driveCar = async (id: string) => {
    try {
        const response = await fetch(`${ENDPOINTS.engine}?id=${id}&status=${CAR_STATUS.DRIVE}`, {
            method: 'PATCH',
            signal: store.controller.signal,
        });

        if (response.status === STATUS.OK) {
            const data = await response.json();
            return data;
        }

        if (response.status === STATUS.NOT_FOUND) {
            // eslint-disable-next-line no-console
            return console.error(`Error: Car with id=${id} was not found in the garage.`);
        }

        if (response.status === STATUS.BAD_REQUEST) {
            // eslint-disable-next-line no-console
            return console.error(
                'Error: Wrong parameters: "id" should be any positive number, "status" should be "started", "stopped" or "drive"'
            );
        }

        if (response.status === STATUS.TOO_MANY_REQUESTS) {
            // eslint-disable-next-line no-console
            return console.error(
                ` Error for car with id=${id}: Drive already in progress. You can't run drive for the same car twice while it's not stopped.`
            );
        }

        if (response.status === STATUS.INTERNAL_SERVER_ERROR) {
            // eslint-disable-next-line no-console
            console.error(`Error: Car id=${id} has been stopped suddenly. It's engine was broken down.`);
            return { success: false };
        }

        // eslint-disable-next-line no-alert
        return alert('Server is not available!');
    } catch (error) {
        if (error.name === 'AbortError') {
            // eslint-disable-next-line no-console
            return console.error('Error: Drive fetch is terminated!');
        }
        throw error;
    }
};

export const getCars = async (pageNum: number, limit = COUNT_CARS_PER_PAGE) => {
    const response = await fetch(`${ENDPOINTS.garage}?_page=${pageNum}&_limit=${limit}`);

    const cars = await response.json();

    const allCarsCount = response.headers.get('X-Total-Count');

    return { cars, allCarsCount };
};

export const getWinners = async (
    pageNum: number,
    limit: number = COUNT_WINNERS_PER_PAGE,
    sort: SORTS = SORTS.ID,
    order: ORDERS = ORDERS.ASC
) => {
    const response = await fetch(`${ENDPOINTS.winners}?_page=${pageNum}&_limit=${limit}&_sort=${sort}&_order=${order}`);

    let winners: Array<IWinner>;
    let allWinnersCount;

    if (response.status !== STATUS.OK) {
        winners = [];
        allWinnersCount = '0';
    } else {
        const winnersFromServer: Array<IWinnerFromServer> = await response.json();

        allWinnersCount = response.headers.get('X-Total-Count');

        const promises = winnersFromServer.map(async ({ id, wins, time }) => {
            const { name, color }: { name: string; color: string } = await getCar(id);

            return { name, color, wins, time };
        });
        winners = await Promise.all(promises);
    }

    return { winners, allWinnersCount };
};

const getWinner = async (id: string) => {
    const response = await fetch(`${ENDPOINTS.winners}/${id}`);

    if (response.status === STATUS.OK) {
        const winner = await response.json();
        return { winner, status: STATUS.OK };
    }
    const winner = {};
    return { winner, status: STATUS.NOT_FOUND };
};

const createWinner = async (id: string, time: number) => {
    const response = await fetch(`${ENDPOINTS.winners}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, wins: DEFAULT_COUNT_OF_WINS, time }),
    });

    return response.status;
};

const updateWinner = async (id: string, wins: number, time: number) => {
    const response = await fetch(`${ENDPOINTS.winners}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            wins,
            time,
        }),
    });

    return response.status;
};

export const saveWinner = async (id: string, lastWinTime: number) => {
    const { winner, status } = await getWinner(id);

    const { wins: numberOfWinsSromServer, time: timeOfWinFromServer } = winner;

    if (status === STATUS.OK) {
        const wins = numberOfWinsSromServer + 1;
        const time = Math.max(timeOfWinFromServer, lastWinTime);
        await updateWinner(id, wins, time);
    } else {
        await createWinner(id, lastWinTime);
    }
};
