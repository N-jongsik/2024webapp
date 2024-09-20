import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counterNum = useSelector((state) => {
    return state.num;
  });
  const counterName = useSelector((state) => {
    return state.name;
  });
  const dispatch = useDispatch();

  return (
    <>
      {counterName} / {counterNum}
      <button
        onClick={() => {
          dispatch({ type: "plus", payload: 1 });
        }}
      >
        + 플러스
      </button>
      <button
        onClick={() => {
          dispatch({ type: "minus", payload: 1 });
        }}
      >
        - 마이너스
      </button>
    </>
  );
};

export default Counter;
