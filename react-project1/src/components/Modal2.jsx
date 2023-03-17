import React from "react";
import { useState, useEffect } from "react";
import "./Modal2.css";
const Modal2 = () => {
  //랜더링 되기전 가져와야하는 api는 usestate
  // 변수선언 모달이 true 기본값으로
  let [modal, setModal] = useState(false);
  // 랜더링 될때마다 실행을 다시한다=> useEffect // mount를 1회만 실행하고 싶다? 그러면 시간 뒤에 [] 안에 써주기
  useEffect(() => {
    setTimeout(() => {
      setModal(true);
    }, 2000);
  });

  return (
    <div>
      {modal == true ? (
        <h1 className="modal2">2초 후에 사라지는 모달</h1>
      ) : null}
    </div>
  );
};

export default Modal2;
