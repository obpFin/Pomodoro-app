import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';

class Timer extends React.Component {

  constructor(props) {
    super();
    this.state = {showTimer:false,session:0}
  }

  componentWillMount = () => {
    this.setState({ session: this.props.session*60 });

  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.session !== this.state.session) {
      this.setState({ 
        session: nextProps.session*60,
        showTimer:nextProps.showTimer 
      });
    }
  }

  onClick = () => {
    this.setState({showTimer:!this.state.showTimer})
  }
  render() {
    return (
      <div onClick={this.onClick}>
        {this.state.showTimer
          ?
          <div className='tomato'>
            <ReactCountdownClock
                seconds={this.state.session}
                color="white"
                alpha={0.9}
                size={201}
                paused={!this.state.showTimer}
                />

          </div>
          :
          <div className='tomato start' onClick={this.props.start}>
            <p className='mainTimer start'>Start</p>
          </div>
          }
      </div>
    );
  }
}

export default Timer;