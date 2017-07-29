import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import Sound from 'react-sound';
import PropTypes from 'prop-types';

class Timer extends React.Component {

  constructor(props) {
    super();
    this.state = {
      showTimer:false,
      session:0,
      break:0,
      sound:'STOPPED',
      appState:'session',
      timerStopped:false
    }
  }

  componentWillMount = () => {
    this.setState({
     session: this.props.session*60,
     break:this.props.break*60
   });
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.session !== this.state.session) {
      this.setState({ 
        session: nextProps.session*60,
        break:nextProps.break*60,
        showTimer:nextProps.showTimer 
      });
    }
  }

  onClick = () => {
    //if timer == visible, stop timer. else start timer
    this.state.showTimer
      ?
    this.setState({timerStopped:!this.state.timerStopped})
      :
    this.setState({showTimer:true});
  }

  playsound = () => {
    this.setState({sound:'PLAYING'});
  }

  changeAppState = (playsound) => {
    this.setState({showTimer:false});
    this.playsound();
    this.setState({
      appState:this.state.appState ==='session' ? 'break' : 'session',
      showTimer:true

    })
  }

  render() {
    return (
      <div onClick={this.onClick}>
        {this.state.showTimer
          ?
          <div className='tomato'>
            <ReactCountdownClock
                seconds={this.state.appState === 'session'
                  ?
                  this.state.session
                  :
                  this.state.break
                }
                color="white"
                alpha={0.9}
                size={201}
                paused={this.state.timerStopped}
                onComplete={this.changeAppState}
                />
            <Sound
              url="http://picosong.com/cdn/c31b7fc9ff72040867837b1d377346f8.mp3"
              playStatus={this.state.sound}
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

Timer.propTypes = {
  start: PropTypes.func,
  update: PropTypes.func,
  session:PropTypes.number,
  break:PropTypes.number
};

export default Timer;