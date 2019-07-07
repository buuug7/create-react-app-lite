import React from 'react';
import HelloWorld from './components/HelloWorld';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <HelloWorld />
      </div>
    );
  }
}

export default App;
