import renderWinners from './winners';

const renderWinnersTable = () => `<table class='winners-table'>
 <thead>
   <tr>
     <th>№</th>
     <th>Name</th>
     <th>Image</th>
     <th>Wins</th>
     <th>Best time</th>
   </tr>
  </thead>
  <tbody>
  ${renderWinners()}
  </tbody>
</table>`;

export default renderWinnersTable;
