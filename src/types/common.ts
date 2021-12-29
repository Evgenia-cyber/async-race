export enum SORTS {
    ID = 'id',
    WINS = 'wins',
    TIME = 'time',
}

export enum ORDERS {
    ASC = 'ASC',
    DESC = 'DESC',
}

export interface ICar {
    id: number;
    name: string;
    color: string;
}

export interface IStore {
    currentView: string;
    garageCurrentPageNum: number;
    cars: Array<ICar>;
    allCarsCount: string;
    winnersCurrentPageNum: number;
    winners: Array<any>;
    allWinnersCount: string;
    sort: SORTS;
    order: ORDERS;
}
