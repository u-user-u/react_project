import ReactDOM from "react-dom";
import React from "react";
import styled from 'styled-components';
import { Message } from './views/message';
import { Command } from './views/command';
import { Parameter } from './views/parameter';
import { Enemy } from './views/enemy';
import { useState } from 'react';

export const commandState = {
  initial: "INITIAL",
  battle: "BATTLE",
  item: "ITEM",
  skill: "SKILL"
}

const StyledApp = styled.div`
background-color: black;
display: block;
`

export const App = () => {
  const [state, setCommand] = useState(commandState.initial);

  return (
    <StyledApp>
      <div>
        <Parameter />
      </div>
      <div>
        <Enemy />
      </div>
      <div>
        <Command state={state} setCommand={setCommand} />
        <Message state={state} />
      </div>
    </StyledApp>
  )
}

if (document.getElementById("app")) {
  ReactDOM.render(
    <App />,
    document.getElementById("app"));
}
