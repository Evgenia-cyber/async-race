export enum STATUS {
    OK = 200,
    CREATED = 201,
    NOT_FOUND = 404,
    BAD_REQUEST = 400,
    TOO_MANY_REQUESTS = 429,
    INTERNAL_SERVER_ERROR = 500,
}

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

export interface IWinnerFromServer {
    id: number;
    wins: number;
    time: number;
}

export interface IWinner {
    name: string;
    color: string;
    wins: number;
    time: number;
}

export interface IStore {
    currentView: string;
    garageCurrentPageNum: number;
    cars: Array<ICar>;
    allCarsCount: string;
    winnersCurrentPageNum: number;
    winners: Array<IWinner>;
    allWinnersCount: string;
    sort: SORTS;
    order: ORDERS;
    controller: AbortController;
}

export enum CAR_STATUS {
    STARTED = 'started',
    STOPPED = 'stopped',
    DRIVE = 'drive',
}

export interface IAnimationState {
    [carId: string]: number;
}
