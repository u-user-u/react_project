import ReactDOM from "react-dom";
import React from "react";
import styled from 'styled-components';

const App = styled.h1`
color: red;
`

export default App;

if (document.getElementById("app")) {
  ReactDOM.render(
    <App>Hello World React</App>,
    document.getElementById("app"));
}
