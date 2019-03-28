import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="App">
        <TodoList/>
        <AddTodo/>
      </div>
    );
  }
}

export default App;