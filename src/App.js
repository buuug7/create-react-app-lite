import React from 'react';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="App">
        <TodoList/>
      </div>
    );
  }
}

export default App;