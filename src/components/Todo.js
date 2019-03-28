import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const Todo = ({ todo, toggleTodo }) => {
  return (
    <li
      className="Todo"
      onClick={() => toggleTodo(todo.id)}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      {todo.content}
    </li>
  );
};

const mapDispatchToState = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id))
  };
};

export default connect(null, mapDispatchToState)(Todo);