import React from 'react';

const Timer = props => (

  <div>
      {props.showTimer===true
        ?
      <div className='tomato'>
        <p className='mainTimer' onClick={props.stop}>{props.session} </p>
      </div>
        :
      <div className='tomato start' onClick={props.start}>
        <p className='mainTimer start'>Start</p>
      </div>
      }
  </div>
);

export default Timer;