import React from 'react';
import Slider from './slider.js';

class Break extends React.Component {

constructor(props) {
  super();
  this.state = {break:'1'};
  this.update = this.update.bind(this);
  this.session = 0;
 }

update = (e) => {
    this.setState({
      break: e
    })
}

  render() {
    return (
      <div>
        <div className='session controller'>
          <Slider  min='1' max='10' doUpdate={this.update}
            step='1' />
        </div>
      </div>
    );
  }
}

export default Break;