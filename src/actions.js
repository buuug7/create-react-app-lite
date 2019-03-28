let nextId = 2;

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    payload: { id }
  };
};

export const addTodo = content => {
  return {
    type: 'ADD_TODO',
    payload: {
      content,
      id: ++nextId
    }
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    payload: {
      filter
    }
  };
};

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};