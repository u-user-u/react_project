import React from "react";
import styled from 'styled-components';
import { commandState, actionState, turnState } from '../App';
import { player, enemy } from "../../class/instance";
import * as lib from "../../lib/lib";

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
    content: " ▼";
    opacity: 100;
  }
  &:hover::after {
    opacity: 0;
  }
`

export const Message = ({ state, setCommand, action, turn, setTurn, result, setResult, entity, setEntity }) => {
  // アイテム, スキルメッセージ
  const entityMessage = (entities = null) => {
    // アイテムのとき
    if (state == commandState.item) {
      if (entity == "none") {
        return <div id="message">{player.name}は道具袋を開いた</div>;
      }
      else if (entity.type == "heal") {
        return <div id="message">HPが{entity.value}回復する</div>;
      }
    }
    // スキルのとき
    else if (state == commandState.skill) {
      if (entity == "none") {
        return <div id="message">{player.name}はスキルを準備している...</div>;
      }
      else if (entity.type == "attack") {
        return <div id="message">消費MP : {entities.useMP}<br></br>炎の魔法で敵を焼き尽くす</div>;
      }
    }
  }

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
    let character = lib.sortCharacter(player, enemy);
    // 味方ターン
    if (turn == turnState.prev) {
      // 先手の行動
      return (
        <StyledMessage>
          <StyledM onClick={() => {
            setTurn(turnState.next);
          }} id="message">
            {character[0].action(action, character[1], entity)}
          </StyledM>
        </StyledMessage >
      )
    }
    // 後手の行動
    else if (turn == turnState.next) {
      return (
        <StyledMessage>
          <StyledM onClick={() => {
            setCommand(commandState.wait);
            setTurn(turnState.wait);
            setEntity("none");
          }} id="message">
            {character[1].action(action, character[0], entity)}
          </StyledM>
        </StyledMessage >
      )
    }
  }
  // 戦闘アイテム表示
  else if (state == commandState.item) {
    return (
      <StyledMessage>
        {entityMessage()}
      </StyledMessage>
    )
  }
  // 戦闘スキル表示
  else if (state == commandState.skill) {
    return (
      <StyledMessage>
        {entityMessage(entity)}
      </StyledMessage>
    )
  }
}
