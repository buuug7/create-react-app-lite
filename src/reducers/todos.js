const initialState = [
  { id: 1, content: 'Clean my room', completed: true },
  { id: 2, content: 'Go to store', completed: false }
];

export default function (state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_TODO': {
      const { id } = action.payload;
      let idx, tmp = [...state];

      state.forEach((item, index) => {
        if (item.id === id) {
          idx = index;
        }
      });

      tmp[idx]['completed'] = !tmp[idx]['completed'];

      return [...tmp];
    }

    default :
      return state;
  }
}