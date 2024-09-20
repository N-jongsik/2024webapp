import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

//초기 데이터
const init = {
  value: 100,
  title: "종식",
};

//값을 변화시키는 중간 단계
const reducer = (state = init, action) => {
  console.log(state, action.type);
  if (action.type == "up") {
    return { ...state, value: state.value + action.payload };
  }
  if (action.type == "down") {
    return { ...state, value: state.value - action.payload };
  }
  return state;
};
const store = createStore(reducer); //reducer는 state값

function App() {
  return (
    <Provider store={store}>
      <div>app</div>
      <Counter />
    </Provider>
  );
}

function Counter() {
  const counterValue = useSelector((state) => {
    return state.value;
  });
  const titleValue = useSelector((state) => state.title); //데이터 가져오기

  const dispatch = useDispatch(); //데이터 변경하기

  return (
    <>
      {counterValue}/{titleValue}
      <button
        onClick={() => {
          dispatch({ type: "up", payload: 1 });
        }}
      >
        클릭
      </button>
      <button
        onClick={() => {
          dispatch({ type: "down", payload: 1 });
        }}
      >
        다운
      </button>
    </>
  );
}

export default App;
