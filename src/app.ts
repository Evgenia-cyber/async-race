import renderHeader from './components/header';
import renderGarageView from './pages/garageView';
import renderWinnersView from './pages/winnersView';

const renderApp = () => `
${renderHeader()}
${renderGarageView()}
${renderWinnersView()}`;

export default renderApp;
