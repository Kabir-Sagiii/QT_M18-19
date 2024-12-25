const nameReducer = (storedata = { user1: "", user2: "" }, action) => {
  if (action.type === "user1") {
    storedata = {
      ...storedata,
      user1: action.payload,
    };
  } else if (action.type === "user2") {
    storedata = {
      ...storedata,
      user2: action.payload,
    };
  }
  return storedata;
};
export default nameReducer;
