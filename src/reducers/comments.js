import { SAVE_COMMENT } from "actions/types";

const comments = (state = [], action) => {
  switch(action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      console.log(state);
      return state;
  }
}

export default comments;