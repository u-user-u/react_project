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

export const actionState = {
  initial: null,
  attack: "ATTACK",
  item: "ITEM",
  skill: "SKILL"
}

export const turnState = {
  wait: "WAIT",
  player: "PLAYER",
  enemy: "ENEMY"
}

const StyledApp = styled.div`
background-color: black;
display: block;
`

// user情報取得
const USER_PARAMETER = document.getElementById('user').value;
export const USER_ROOT = JSON.parse(USER_PARAMETER);
// ability情報取得
const ABILITY = document.getElementById('ability').value;
export const ABILITY_ROOT = JSON.parse(ABILITY);

export const App = () => {
  // コマンドステート
  const [state, setCommand] = useState(commandState.initial);
  // アクションステート
  const [action, setAction] = useState(actionState.initial);
  // 順番ステート
  const [turn, setTurn] = useState(turnState.wait);
  // テキスト用ステート
  const [addText, setAdd] = useState(false);

  return (
    <StyledApp>
      <div>
        <Parameter turn={turn} setTurn={setTurn} />
      </div>
      <div>
        <Enemy />
      </div>
      <div>
        <Command state={state} setCommand={setCommand} action={action} setAction={setAction} />
        <Message state={state} action={action} turn={turn} addText={addText} setAdd={setAdd} />
      </div>
    </StyledApp>
  )
}

if (document.getElementById("app")) {
  ReactDOM.render(
    <App />,
    document.getElementById("app"));
}
