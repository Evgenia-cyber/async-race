import store from '../store';

const linkTo = (oldViewEl: HTMLElement, newViewEl: HTMLElement, newView: string) => {
    store.currentView = newView;
    oldViewEl.classList.add('hide');
    newViewEl.classList.remove('hide');
};

export default linkTo;
