import { VIEW_NAME } from '../constants';

const renderHeader = () => `
<header>
  <button class='button' id='link-to-garage'>${VIEW_NAME.garage}</button>
  <button class='button' id='link-to-winners'>${VIEW_NAME.winners}</button>
</header>`;

export default renderHeader;
