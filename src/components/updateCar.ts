const renderUpdateCarComponent = () => `
<form class='form update-car'>
  <input 
  type='text' 
  id='update-car-name' 
  placeholder='Update car name ...' 
  disabled/>
  <input 
  class='color-car-input' 
  type='color' 
  id='update-car-color' 
  value='#ff0000' 
  disabled/>
  <input class='button' 
  type='submit' 
  id='submit-update-car' 
  value='Update' 
  disabled/>
</form>`;

export default renderUpdateCarComponent;
