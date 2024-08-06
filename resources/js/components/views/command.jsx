import React from "react";
import styled from 'styled-components';

const commandState = {
  initial: 'INITIAL',
  battle: 'BATTLE',
  item: 'ITEM',
  skill: 'SKILL'
};

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

const StyledA = styled.a`
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

let items = JSON.parse(document.getElementById('item').value);
console.log(items);

const useItem = () => {
  document.getElementById('message').innerHTML = "{test}は薬草を使った！<br>";
  document.getElementById('message').innerHTML += "{test}のHPが20回復した!";
}

const onSkill = () => {
  document.getElementById('message').innerHTML = "炎の魔法で敵を焼き尽くす";
}

export const Command = ({ state, setCommand }) => {
  // 戦闘初期表示（コマンド）
  if (state == commandState.initial) {
    return (
      <StyledCommand>
        <div id="command">
          <StyledA onClick={() => {
            setCommand(commandState.battle);
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
          <StyledA onClick={() => {
            setCommand(commandState.battle);
            useItem();
          }}>薬草</StyledA>
        </div>
      </StyledCommand>
    )
  }
  // スキル表示
  else if (state == commandState.skill) {
    return (
      <StyledCommand>
        <div id="command">
          <StyledA>ファイア</StyledA>
        </div>
      </StyledCommand>
    )
  }
}
