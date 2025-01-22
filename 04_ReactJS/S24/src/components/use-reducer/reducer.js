export const reducer = (state, action) => {
  //10,000
  //action = {type:"----"}
  //logic to update state
  //using first parameter, we can access current state

  if (action.type === "LIKE") {
    state = state + 1;
  } else if (action.type === "DISLIKE") {
    state = state - 1;
  } else {
    state = 0;
  }

  return state;
};
