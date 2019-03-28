let nextId = 3;

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    payload: { id }
  };
};

export const addTodo = (content) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: nextId++,
      content
    }
  };
};