import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const Todo = ({ todo, toggleTodo }) => {
  return (
    <li className='Todo'
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTodo(todo.id)}>
      {todo.content}
    </li>
  );
};

const mapDispatchToProps = dispach => ({
  toggleTodo: id => dispach(toggleTodo(id))
});

export default connect(null, mapDispatchToProps)(Todo);
