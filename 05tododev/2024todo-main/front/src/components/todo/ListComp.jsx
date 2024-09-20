import React, { useEffect, useState } from "react";
import { getList } from "../../api/todoApi";
import { useSearchParams } from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

function ListComp() {
  const [data, setData] = useState(initState);

  //   const [queryParmams] = useSearchParams();
  //   console.log(queryParmams.get("size"));

  //   const page = queryParmams.get("page")
  //     ? parseInt(queryParmams.get("page"))
  //     : 1;
  //   const size = queryParmams.get("size")
  //     ? parseInt(queryParmams.get("size"))
  //     : 10;

  //   console.log(page, size);

  const { page, size } = useCustomMove();

  useEffect(() => {
    getList({ page, size }).then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);
  return (
    <>
      {data.dtoList.map((item, i) => {
        return (
          <div key={i} className="flex border-b-2">
            <div className="w-1/12">{item.tno}</div>
            <div className="w-7/12 font-extrabold">{item.title}</div>
            <div className="w-4/12">{item.dueDate}</div>
          </div>
        );
      })}
    </>
  );
}

export default ListComp;
