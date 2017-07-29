import React from 'react';
import Slider from './slider.js';
import PropTypes from 'prop-types';


const Session = props => (

  <div>
    <div className='session controller'>
      <p className='amount'>{props.sessionTimer}<span> minutes</span></p>
      <Slider  min='1' max='9' doUpdate={props.update}
        step='1' />
    </div>
  </div>
  
);

Session.propTypes = {
  sessionTimer: PropTypes.number,
  update: PropTypes.func
};

export default Session;