import React from "react";
import ColorfulMessage from "./ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
return (
  <>
    <h2 style={{ color: "green" }}>Hello World!</h2>
    <ColorfulMessage ColorfulMessage color="green">俺はドンキーコング</ColorfulMessage>
    <ColorfulMessage ColorfulMessage color="pink">私はディクシーコング</ColorfulMessage>
    <button onClick={onClickButton}>絶対押してね</button>
  </>
  )
};

export default App;