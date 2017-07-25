import React from 'react';
import Slider from './slider.js';

class Session extends React.Component {

  constructor(props) {
    super();
    this.state = {session:'1'};
    this.update = this.update.bind(this);
    this.session = 0;
   }

   componentDidMount() {
   }

  update = (e) => {
      this.setState({
        session: e
      })
  }

    render() {
      return (
        <div>
          <div className='session controller'>
            <p className='amount'>{this.state.session}<span> minutes</span></p>
            <Slider  min='1' max='9' doUpdate={this.update}
              step='1' />
          </div>
        </div>
      );
    }
  }

export default Session;