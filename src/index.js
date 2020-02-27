import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [value, setValue] = useState(10);

  const hello = who => {
    const handler = () => {
      console.log("hello", who);
    };
    return handler;
  };
  return (
    <div>
      {value}
      <br />
      <button onClick={hello("world")}>button world</button>
      <br />
      <button onClick={hello("react")}>button react</button>
      <br />
      <button onClick={hello("function")}>button function</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
