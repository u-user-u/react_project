import ReactDOM from "react-dom";
import React from "react";
import styled from 'styled-components';
import { Message } from './views/message';
import { Command } from './views/command';
import { Parameter } from './views/parameter';
import { EnemyView } from './views/enemy';
import { useState } from 'react';
import { player, enemy } from '../class/instance';

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
  prev: "PREV",
  next: "NEXT",
}

export const resultState = {
  none: "NONE",
  win: "WIN",
  lose: "LOSE",
  getEXP: "GETEXP",
  levelUp: "LEVELUP",
  getSkill: "GETSKILL",
  getItem: "GETITEM",
  getEquipment: "GETEQUIPMENT"
}

const StyledApp = styled.div`
background-color: black;
display: block;
`

// ===================================================
// Appコンポーネント
// ===================================================
const App = () => {
  // コマンドステート
  const [state, setCommand] = useState(commandState.initial);
  // アクションステート
  const [action, setAction] = useState(actionState.initial);
  // 順番ステート
  const [turn, setTurn] = useState(turnState.wait);
  // リザルトステート
  const [result, setResult] = useState(resultState.none);
  // ホバーアイテムステート
  const [item, setItem] = useState("none");

  return (
    <StyledApp>
      <div>
        <Parameter turn={turn} setTurn={setTurn} />
      </div>
      <div>
        <EnemyView />
      </div>
      <div>
        <Command state={state} setCommand={setCommand} setAction={setAction} setTurn={setTurn} setItem={setItem} />
        <Message state={state} setCommand={setCommand} action={action} turn={turn} setTurn={setTurn} result={result} setResult={setResult} item={item} />
      </div>
    </StyledApp>
  )
}

if (document.getElementById("app")) {
  ReactDOM.render(
    <App />,
    document.getElementById("app"));
}
