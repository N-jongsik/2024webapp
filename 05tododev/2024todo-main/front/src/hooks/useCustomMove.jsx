import { useSearchParams } from "react-router-dom";

const getNum = (param, dValue) => {
  if (!param) {
    return dValue;
  }
  return parseInt(param);
};

const useCustomMove = () => {
  const [queryParmams] = useSearchParams();
  const page = getNum(queryParmams.get("page"));
  const size = getNum(queryParmams.get("size"));
  return { page, size };
};
export default useCustomMove;
