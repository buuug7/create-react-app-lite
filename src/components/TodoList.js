import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

function TodoList ({ todos }) {

  return (
    <ul>
      {todos && todos.length ? todos.map((todo, index) => {
          return <Todo key={todo.id} todo={todo}/>;
        }) : 'Not todos'
      }
    </ul>
  );
}

const mapStateToProps = state => {
  const todos = state.todos;
  return { todos };
};

export default connect(mapStateToProps)(TodoList);