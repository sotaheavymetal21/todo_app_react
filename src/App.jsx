import React, { useEffect, useState } from "react";
import ColorfulMessage from "./ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

return (
  <>
    <h2 style={{ color: "green" }}>Hello World!</h2>
    <ColorfulMessage ColorfulMessage color="green">俺はドンキーコング</ColorfulMessage>
    <ColorfulMessage ColorfulMessage color="pink">私はディクシーコング</ColorfulMessage>
    <button onClick={onClickCountUp}>絶対押してね</button>
    <p>{ num }</p>
    { faceShowFlag  && <p>♪( ´θ｀)ノ</p>}
  </>
  )
};

export default App;