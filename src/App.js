import React from 'react';
import Timer from './components/timer.js';

class App extends React.Component {

  render() {
    
    return (
      <div className='App'>

        <div className='container'>
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;
  