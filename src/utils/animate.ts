export const startAnimation = (carId: string, timeFromServer: number) => {
    const carEl = document.querySelector(`#car-${carId}`) as HTMLElement;

    const carLength = carEl.getBoundingClientRect().width;

    const distance = document.documentElement.clientWidth - 2 * carLength;
    const velocity = distance / timeFromServer;

    let requestAnimationId;
    let start = 0;

    function step(timestamp: number) {
        if (!start) start = timestamp;
        const time = timestamp - start;
        const drovedDistance = Math.round(velocity * time);
        carEl.style.transform = `translateX(${Math.min(drovedDistance, distance)}px)`;
        if (drovedDistance < distance) {
            requestAnimationId = window.requestAnimationFrame(step);
        }
    }

    requestAnimationId = window.requestAnimationFrame(step);

    return requestAnimationId;
};

export const stopAnimation = (requestAnimationId: number) => {
    window.cancelAnimationFrame(requestAnimationId);
};
