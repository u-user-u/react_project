import React from "react";
import styled from 'styled-components';
import { commandState, actionState, turnState } from "../App";
import { itembox, skilltree } from "../../class/instance";

const StyledCommand = styled.div`
  display: inline-block;
  width: 15%;
  height: 180px;
  text-align: left;
  vertical-align: top;
  margin: 0px 0px 20px 0px;
  padding: 10px 0px 10px 10px;
  border: 3px solid;
  border-color: white;
  border-radius: 6px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const StyledA = styled.a`
  text-decoration: none;
  color: white;
  &::before {
    content: "▶";
    opacity: 0;
  }
  &:hover::before {
    opacity: 100;
  }
`

export const Command = ({ state, setCommand, setAction, setTurn, setEntity }) => {
  // アイテムボックス, スキルツリー表示
  // 引数にアイテムボックスorスキルツリーを指定
  const showEntities = (entities) => entities.map((e) => {
    if (e.amount > 0 || e.amount == null) {
      // array.map()を使ったとき、一番上の要素にkeyを設定しないとwarningが出る
      return (
        <React.Fragment key={e.name}>
          <StyledA
            onClick={() => {
              setAction(state);
              setCommand(commandState.battle);
              setTurn(turnState.prev);
            }}
            onMouseEnter={() => setEntity(e)}>{e.name} {e.amount > 1 ? "×" + e.amount : ""}</StyledA><br></br>
        </React.Fragment>
      )
    }
  });

  // 戦闘初期表示（コマンド）
  if (state == commandState.initial || state == commandState.wait) {
    return (
      <StyledCommand>
        <div id="command">
          <StyledA onClick={() => {
            setAction(actionState.attack);
            setCommand(commandState.battle);
            setTurn(turnState.prev);
          }}>攻撃</StyledA><br></br>
          <StyledA onClick={() => {
            setCommand(commandState.item);
          }}>アイテム</StyledA><br></br>
          <StyledA onClick={() => {
            setCommand(commandState.skill);
          }}>スキル</StyledA>
        </div>
      </StyledCommand>
    )
  }
  // 攻撃
  else if (state == commandState.battle) {
    return (
      <StyledCommand>
        <div id="command">
        </div>
      </StyledCommand>
    )
  }
  // アイテム表示
  else if (state == commandState.item) {
    return (
      <StyledCommand>
        <div id="command">
          {showEntities(itembox)}
        </div>
      </StyledCommand>
    )
  }
  // スキル表示
  else if (state == commandState.skill) {
    return (
      <StyledCommand>
        <div id="command">
          {showEntities(skilltree)}
        </div>
      </StyledCommand>
    )
  }
}
