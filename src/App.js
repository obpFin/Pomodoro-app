import React from 'react';
import Timer from './components/timer.js';
import Session from './components/session.js';
import Break from './components/break.js';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      session:1,
      break:1,
      showTimer:false
    }
  }

  updateSession = (e) => {
    console.log("update state",this.state.session);
      this.setState({
        showTimer:false,
        session: e
      })
  }

  updateBreak = (e) => {
    console.log("update state",this.state.break);
      this.setState({
        showTimer:false,
        break: e
      })
  }

  start = () => {
    this.setState({showTimer:true});
  }

  stop = () => {
    this.setState({showTimer:false});
  }


  render() {

    return (
      <div className='App'>
        <div>
          <p className="marker">Pomodoro App</p>
        </div>
        <div className='container'>
          <Timer session={this.state.session}
                 break={this.state.break} 
                 showTimer={this.state.showTimer}
                 start={this.start}
                 stop = {this.stop}/>
          <table>
            <tbody>
              <tr>
                <td>
                  <p className='sessionLabel'>Session</p>
                  <Session update={this.updateSession} 
                           sessionTimer={this.state.session} />
                </td>
                <td>
                  <p className='breakLabel'>Break</p>
                  <Break update={this.updateBreak} 
                         breakTimer={this.state.break}/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
  