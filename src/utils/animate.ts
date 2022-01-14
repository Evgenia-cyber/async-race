import { IAnimationState } from '../types/common';
import { getElWidth } from './utils';

const animationState: IAnimationState = {};
// let requestAnimationId = 0;

export const startAnimation = (carId: string, timeFromServer: number) => {
    const carEl = document.querySelector(`#car-${carId}`) as HTMLElement;

    const carLength = getElWidth(carEl);

    const distance = document.documentElement.clientWidth - 2 * carLength;
    const velocity = distance / timeFromServer;

    let start = 0;

    function step(timestamp: number) {
        if (!start) start = timestamp;
        const time = timestamp - start;
        const drovedDistance = Math.round(velocity * time);
        carEl.style.transform = `translateX(${Math.min(drovedDistance, distance)}px)`;
        if (drovedDistance < distance) {
            animationState[carId] = window.requestAnimationFrame(step);
        }
    }

    animationState[carId] = window.requestAnimationFrame(step);
};

export const stopAnimation = (carId: string) => {
    const requestAnimationId = animationState[carId];
    window.cancelAnimationFrame(requestAnimationId);
    delete animationState[carId];
};
