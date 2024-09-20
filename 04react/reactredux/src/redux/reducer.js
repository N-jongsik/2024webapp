const init = {
  num: 10,
  name: "종식",
};

const reducer = (state = init, action) => {
  console.log(state, action);

  if (action.type == "plus") {
    return { ...state, num: state.num + action.payload };
  }

  if (action.type == "minus") {
    return { ...state, num: state.num - action.payload };
  }

  return state;
};

export default reducer;
