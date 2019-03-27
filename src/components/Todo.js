import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

function Todo ({ todo, toggleTodo }) {
  return (
    <li className='TodoItem'
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTodo(todo.id)}>
      {JSON.stringify(todo)}
    </li>
  );
}

// const mapDispatchToProps = dispatch => {
//   return {
//     toggleTodo: id => {
//       dispatch(toggleTodo(id));
//     }
//   };
// };

export default connect(
  null,
  {
    toggleTodo
  }
)(Todo);