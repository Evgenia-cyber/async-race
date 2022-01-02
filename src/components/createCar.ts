const renderCreateCarComponent = () => `
<form class='form create-car'>
  <input 
  type='text' 
  id='create-car-name' 
  placeholder='Enter new car name ...'/>
  <input 
  class='color-car-input' 
  type='color' 
  id='create-car-color' 
  value='#ff0000'/>
  <input class='button' 
  type='submit' 
  id='submit-create-car' value='Create'/>
</form>`;

export default renderCreateCarComponent;
