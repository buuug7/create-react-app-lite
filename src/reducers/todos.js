const initialState = [
  { id: 1, content: 'Go to home', completed: false },
  { id: 2, content: 'Take cooker', completed: true },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO': {
      const { id } = action.payload;
      return state.map(todo =>
        (id === todo.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }
    case 'ADD_TODO' : {
      const { id, content } = action.payload;
      return [
        ...state,
        { id: id, content: content, completed: false }
      ];
    }
    default:
      return state;
  }
};

export default todos;
