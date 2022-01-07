export const getId = (pattern: string, allId: string) => allId.split(pattern)[1];

export const getElWidth = (el: HTMLElement) => el.getBoundingClientRect().width;
