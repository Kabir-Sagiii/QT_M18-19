const nameReducer = (storedata, action) => {
  if (action.type === "NAME") {
    storedata = action.payload;
  }
  return storedata;
};
export default nameReducer;
