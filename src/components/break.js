import React from 'react';
import Slider from './slider.js';
import PropTypes from 'prop-types';

const Break = (props) => (

  <div>
    <div className='break controller'>
      <p className='amount'>{props.breakTimer}<span> minutes</span></p>
      <Slider min='0' max='9' doUpdate={props.update}
        step='1' />
    </div>
  </div>
  
);

Break.propTypes = {
  sessionTimer: PropTypes.number,
  update: PropTypes.func
};

export default Break;