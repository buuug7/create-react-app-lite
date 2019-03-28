import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="App">
        <AddTodo/>
        <TodoList/>
        <Footer />
      </div>
    );
  }
}

export default App;