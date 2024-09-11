// import React, { useState } from "react";

// function App() {
//   let text = "react";
//   const [box, setBox] = useState("jongsik");
//   const [num, setNum] = useState(0);
//   const [modal, setModal] = useState(false);
//   const [fruit, setFruit] = useState(["사과", "바나나", "복숭아"]);

//   return (
//     <>
//       <div className="container">
//         {text}
//         <p>{box}</p>
//         <p>
//           {num}{" "}
//           <button
//             onClick={() => {
//               setNum(num + 1);
//             }}
//           >
//             클릭
//           </button>
//         </p>
//         <button
//           onClick={() => {
//             setBox("글자 변경 성공!");
//           }}
//         >
//           글자 변경
//         </button>
//         <button
//           onClick={() => {
//             setModal(!modal);
//           }}
//         >
//           모달
//         </button>
//         {modal == true ? <Modal box={box} num={num} /> : null}

//         {fruit.map((item, i) => {
//           return <div key={i}>{item}</div>;
//         })}
//       </div>
//       ;
//     </>
//   );
// }

// function Modal(props) {
//   return (
//     <>
//       <div>
//         <h3>공지사항 {props.box}</h3>
//         <p>상세내용 {props.num}</p>
//       </div>
//     </>
//   );
// }

// export default App;
import React, { useState } from "react";

function App() {
  const [fruit, setFruit] = useState(["사과", "복숭아", "배", "바나나"]);
  const [modal, setModal] = useState(false);
  const [num, setNum] = useState(0);
  const [input, setInput] = useState("");

  return (
    <>
      <div>
        {fruit.map((item, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                setModal(true);
                setNum(i);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      {modal == true ? <Modal fruit={fruit} num={num} /> : null}

      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <p>{input}</p>
      <button
        onClick={() => {
          let copy = [...fruit];
          copy.unshift(input);
          setFruit(copy);
          setInput("");
        }}
      >
        과일 넣기
      </button>
    </>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modalWrap">
        <div className="modal">
          <h3>fruit : {props.fruit[props.num]}</h3>
        </div>
      </div>
    </>
  );
}

export default App;
