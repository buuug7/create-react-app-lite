const initState = [
  { id: 1, content: 'Go to store', completed: true },
  { id: 2, content: 'Clean my home', completed: false },
];

const todos = (state = initState, action) => {
  switch (action.type) {

    case 'ADD_TODO' : {
      const { id, content } = action.payload;
      return [...state, { id, content, completed: false }];
    }

    case 'TOGGLE_TODO' : {
      const { id } = action.payload;
      return state.map(todo => {
          return (todo.id === id)
            ? { ...todo, completed: !todo.completed }
            : todo;
        }
      );
    }
    default:
      return state;
  }
};

export default todos;