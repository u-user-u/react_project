import React from "react";
import styled from 'styled-components';
import { commandState, actionState, turnState } from '../App';
import { player, enemy } from "../../class/instance";

const StyledMessage = styled.div`
  display: inline-block;
  width: 60%;
  height: 180px;
  text-align: left;
  vertical-align: top;
  margin: 0px 0px 20px 4px;
  padding: 10px 0px 10px 20px;
  border: 3px solid;
  color: white;
  border-color: white;
  border-radius: 6px;
`

const StyledM = styled.a`
  text-decoration: none;
  color: white;
  &::after {
    content: "　　▼";
    opacity: 100;
  }
  &:hover::after {
    opacity: 0;
  }
`

export const Message = ({ state, setCommand, action, turn, setTurn }) => {
  // 戦闘初期表示
  if (state == commandState.initial) {
    return (
      <StyledMessage>
        <a id="message">{enemy.name}があらわれた!</a>
      </StyledMessage>
    )
  }
  // 戦闘コマンド待機表示
  else if (state == commandState.wait) {
    return (
      <StyledMessage>
        <a id="message">{enemy.name}はこちらを見つめている</a>
      </StyledMessage>
    )
  }
  // 戦闘バトル表示
  else if (state == commandState.battle) {
    // 味方ターン
    if (turn == turnState.player) {
      // 攻撃アクション
      if (action == actionState.attack) {
        return (
          <StyledMessage>
            <StyledM onClick={() => {
              setTurn(turnState.enemy);
            }} id="message">
              {player.name}の攻撃!<br></br>
              {enemy.name}に50のダメージ!
            </StyledM>
          </StyledMessage >
        )
      }
      // アイテムアクション
      else if (action == actionState.item) {
        return (
          <StyledMessage>
            <StyledM onClick={() => {
              setTurn(turnState.enemy);
            }} id="message">
              {player.name}は薬草を使った!<br></br>
              HPが20回復した!
            </StyledM>
          </StyledMessage>
        )
      }
      // スキルアクション
      else if (action == actionState.skill) {
        return (
          <StyledMessage>
            <StyledM onClick={() => {
              setTurn(turnState.enemy);
            }} id="message">
              {player.name}はファイアを放った!<br></br>
              {enemy.name}に80のダメージ!
            </StyledM>
          </StyledMessage>
        )
      }
    }
    // 敵ターン
    else if (turn == turnState.enemy) {
      return (
        <StyledMessage>
          <StyledM onClick={() => {
            setCommand(commandState.wait);
            setTurn(turnState.wait);
          }} id="message">
            {enemy.name}の攻撃!<br></br>
            {player.name}に10のダメージ!
          </StyledM>
        </StyledMessage >
      )
    }
  }
  // 戦闘アイテム表示
  else if (state == commandState.item) {
    return (
      <StyledMessage>
        <div id="message">HPが20回復する</div>
      </StyledMessage>
    )
  }
  // 戦闘スキル表示
  else if (state == commandState.skill) {
    return (
      <StyledMessage>
        <div id="message">炎の魔法で敵を焼き尽くす</div>
      </StyledMessage>
    )
  }
}
