import { VisibilityFilters } from '../actions';

const initState = VisibilityFilters.SHOW_ALL;

const visibilityFilter = (state = initState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER' :
      return action.payload.filter;
    default :
      return state;
  }
};

export default visibilityFilter;