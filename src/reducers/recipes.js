import data from 'src/data';
import { RECIPES_RECEIVED } from 'src/actions/recipes';

export const initialState = {
  list: data,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    
    default:
      return state;
  }
};

export default reducer;
