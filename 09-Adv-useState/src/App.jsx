import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState([1, 2, 3, 4, 5]);
  const btnClicked = () => {
    setNum([...num, num.length + 1]);
    console.log(num);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click me</button>
    </div>
  );
};

export default App;
