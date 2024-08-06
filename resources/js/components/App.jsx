import ReactDOM from "react-dom";
import React from "react";
import styled from 'styled-components';
import { Message } from './views/message';
import { Command } from './views/command';
import { Parameter } from './views/parameter';
import { Enemy } from './views/enemy';


const StyledApp = styled.div`
background-color: black;
display: block;
`

export const App = () => {


  return (
    <>
      <div>
        <Parameter />
      </div>
      <div>
        <Enemy />
      </div>
      <div>
        <Command />
        <Message />
      </div>
    </>
  )
}

if (document.getElementById("app")) {
  ReactDOM.render(
    <App />,
    document.getElementById("app"));
}
