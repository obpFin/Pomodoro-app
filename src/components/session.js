import React from 'react';
import Slider from './slider.js';

class Session extends React.Component {

  constructor(props) {
    super();
   }

   componentDidMount() {
   }

    render() {
      return (
        <div>
          <div className='session controller'>
            <p className='amount'>{this.props.sessionTimer}<span> minutes</span></p>
            <Slider  min='1' max='9' doUpdate={this.props.update}
              step='1' />
          </div>
        </div>
      );
    }
  }

export default Session;