import React from "react";
import styled from 'styled-components';
import { commandState, actionState } from '../App';
import { USER_ROOT } from "../App";

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

export const Message = ({ state, action, turn }) => {
  // 戦闘初期表示
  if (state == commandState.initial) {
    return (
      <StyledMessage>
        <div id="message">スライムがあらわれた!</div>
      </StyledMessage>
    )
  }
  // 戦闘バトル表示
  else if (state == commandState.battle) {
    // 攻撃アクション
    if (action == actionState.attack) {
      return (
        <StyledMessage>
          <div id="message">
            {USER_ROOT.name}の攻撃!<br></br>
            slimeに50のダメージ!
          </div>
        </StyledMessage>
      )
    }
    // アイテムアクション
    else if (action == actionState.item) {
      return (
        <StyledMessage>
          <div id="message">
            {USER_ROOT.name}は薬草を使った!<br></br>
            HPが20回復した!
          </div>
        </StyledMessage>
      )
    }
    // スキルアクション
    else if (action == actionState.skill) {
      return (
        <StyledMessage>
          <div id="message">
            {USER_ROOT.name}はファイアを放った!<br></br>
            slimeに80のダメージ!
          </div>
        </StyledMessage>
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
