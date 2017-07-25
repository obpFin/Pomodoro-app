import React from 'react';
import Timer from './components/timer.js';
import Session from './components/session.js';
import Break from './components/break.js';


class App extends React.Component {
  /*
  constructor() {
    super();
   }
  */


  render() {

    return (
      <div className='App'>
        <div className=''>
          <p className="marker">Pomodoro App</p>
        </div>
        <div className='container'>
          <Timer />
          <table>
            <tbody>
              <tr>
                <td>
                  <p className='sessionLabel'>Session</p>
                  <Session />
                </td>
                <td>
                  <Break />
                  <p className='breakLabel'>Break</p>
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
  