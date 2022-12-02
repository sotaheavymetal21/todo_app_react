import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px",
  };
return (
  <>
    <h2 style={{ color: "green" }}>Hello World!</h2>
    <p style={contentStyle}>How are you?</p>
    <button onClick={onClickButton}>絶対押してね</button>
  </>
  )
};

export default App;