import { deleteCar as deleteCarApi, deleteWinner } from '../api';

const deleteCar = async (carId: string) => {
    await deleteCarApi(carId);
    await deleteWinner(carId);

    document.location.reload();
};

export default deleteCar;
