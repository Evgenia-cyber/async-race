export const getId = (pattern: string, allId: string) => allId.split(pattern)[1];

export const getElWidth = (el: HTMLElement) => el.getBoundingClientRect().width;

export const disableBtn = (elementId: string) => {
    const btn = document.querySelector(elementId) as HTMLButtonElement;
    btn.disabled = true;
};

export const enableBtn = (elementId: string) => {
    const btn = document.querySelector(elementId) as HTMLButtonElement;
    btn.disabled = false;
};
