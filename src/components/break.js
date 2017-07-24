import React from 'react';
import Slider from './slider.js';
  
const Break = props => (

  <div>
    <div className='break controller'>
      <Slider value='1' min='1' max='10' onInput={null} step='1' />
    </div>
  </div>
);


export default Break;