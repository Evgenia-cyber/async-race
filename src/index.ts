import './index.scss';

const root = document.querySelector('#root');
root.innerHTML = `<div>Hello world</div>`;

const handler = (event: { currentTarget: any }) => {
    console.log(event.currentTarget);
};
root.addEventListener('click', handler);
