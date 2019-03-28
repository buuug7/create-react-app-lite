import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { VisibilityFilters } from '../actions';

const TodoList = ({ todos }) => {
  return (
    <ul className='TodoList'>
      {
        todos && todos.length ? todos.map((todo, index) => {
          return <Todo key={todo.id} todo={todo}/>;
        }) : 'No todos'
      }
    </ul>
  );
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL :
      return todos;
    case VisibilityFilters.SHOW_COMPLETED :
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE :
      return todos.filter(todo => !todo.completed);
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

export default connect(mapStateToProps)(TodoList);