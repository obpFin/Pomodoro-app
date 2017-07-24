import React from 'react';
import Slider from './slider.js';

class Session extends React.Component {

constructor(props) {
  super();
  //this. handleClick = this. handleClick.bind(this);
  this.state = {session:'1'};
  this.update = this.update.bind(this);
 }

update = (e) => {
  //console.log("render",e.target.value);

    this.setState({
      session: +e.target.value
    })
}

  render() {
    return (
      <div>

        <div className='session controller'>
          <Slider  min='1' max='10' onChange={this.update}
            step='1' />
        </div>
      </div>

    );
  }
}

export default Session;