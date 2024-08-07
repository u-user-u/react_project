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
  wait: 'WAIT',
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
// ===================================================
// データベース連携
// ===================================================
// user情報取得->文字列置換->文字列からオブジェクトへ変換
// userは変数とする
export let USER_ROOT = JSON.parse(user.replace(/&quot;/g, '"'));
console.log(USER_ROOT);
// abilityも同様
export let ABILITY_ROOT = JSON.parse(ability.replace(/&quot;/g, '"'));
console.log(ABILITY_ROOT);


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
        <Command state={state} setCommand={setCommand} action={action} setAction={setAction} setTurn={setTurn} />
        <Message state={state} setCommand={setCommand} action={action} turn={turn} setTurn={setTurn} />
      </div>
    </StyledApp>
  )
}

if (document.getElementById("app")) {
  ReactDOM.render(
    <App />,
    document.getElementById("app"));
}
