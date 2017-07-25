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
        <div className='container'>
          <Timer />
          <table>
            <tbody>
              <tr>
                <td>
                  <Session />
                </td>
                <td>
                  <Break />
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
  