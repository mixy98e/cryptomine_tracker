const contextReducer = (state, action) => {
  let profitTable;

  switch (action.type) {
    case "GET_PT_DATA":
      profitTable = action.payload;

      return profitTable;
    default:
      return state;
  }
};

export default contextReducer;
