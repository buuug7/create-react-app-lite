import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <ul className="TodoList">
      {
        todos && todos.length
          ? todos.map(todo => <Todo key={todo.id} todo={todo}/>)
          : 'No todos'
      }
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);