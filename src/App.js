import React from 'react';
import Timer from './components/timer.js';
import Session from './components/session.js';
import Break from './components/break.js';


class App extends React.Component {

constructor() {
  super();
  //this. handleClick = this. handleClick.bind(this);
  this.state = {break:'0',session:'0'};
 }

update = (e,control) => {
  console.log(e.target.value);
  control === 'break' ? 
    this.setState ({
      break:e.target.value
    })
      :
    this.setState({
      session:e.target.value
    })
  
}

  render() {

    return (
      <div className='App'>
        <div className='container'>
          <Timer />
          <table>
            <tbody>
              <tr>
                <td>
                  <Session update/>
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
  