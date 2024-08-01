import ReactDOM from "react-dom";
import React from "react";

function App() {
  return <h1>Hello World React</h1>;
}

export default App;

if (document.getElementById("app")) {
  ReactDOM.render(<App />, document.getElementById("app"));
}
