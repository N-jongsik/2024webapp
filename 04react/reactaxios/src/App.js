// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import LayoutComp from "./layout/LayoutComp";
// import HomeComp from "./components/home/HomeComp";
// import AboutComp from "./components/AboutComp";
// import ProductComp from "./components/ProductComp";

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<LayoutComp />}>
//           <Route index element={<HomeComp />} />
//           <Route path="/about" element={<AboutComp />} />
//           <Route path="/products" element={<ProductComp />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const listCnt = 10; //한 페이지에 보여지는 데이터 수
  const pagerCnt = 5; //한 페이지에 보여지는 페이지 수

  const [data, setData] = useState([]);
  const [totalPage, setTotalpage] = useState(1);
  const [currentpage, setCurrentpage] = useState(1);

  const api = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setData(res.data);

      console.log("totalData = " + res.data.length);
      console.log("totalPage = " + res.data.length / listCnt);

      setTotalpage(res.data.length / listCnt);
    });
  };

  useEffect(() => {
    api();
  }, []);

  //밑에 페이지 숫자 보여주는 부분
  const pageViewNumber = () => {
    const pageNumbers = [];
    const startPage = Math.floor(((currentpage - 1) / pagerCnt) * pagerCnt + 1);
    const endPage = Math.min(startPage + pagerCnt - 1, totalPage);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          onClick={() => setCurrentpage(i)}
          style={{
            cursor: "pointer",
            margin: "0 5px",
            color: currentpage === i ? "red" : "black",
          }}
        >
          {i}
        </span>
      );
    }
    return pageNumbers;
  };

  //현재 페이지의 데이터들 보여주는 부분
  const currentpageData = () => {
    const startIndex = (currentpage - 1) * listCnt; //시작 인덱스는 현재 페이지 -1 * 한 페이지 데이터 갯수
    const endIndex = startIndex + listCnt; //마지막 인덱스는 시작 인덱스 + 한페이지 데이터갯수
    return data.slice(startIndex, endIndex);
  };

  return (
    <>
      <div>
        {currentpageData().map((item, i) => {
          return (
            <div>
              <div key={i}>
                {item.userId} / {item.title}
              </div>
            </div>
          );
        })}
        <div style={{ fontSize: "2em" }}>{pageViewNumber()}</div>
        <div>
          {currentpage > 1 && (
            <button
              onClick={() => {
                setCurrentpage(currentpage - 1);
              }}
            >
              이전
            </button>
          )}
          {currentpage < totalPage && (
            <button
              onClick={() => {
                setCurrentpage(currentpage + 1);
              }}
            >
              다음
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
