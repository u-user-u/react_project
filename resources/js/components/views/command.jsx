import React from "react";
import styled from 'styled-components';
import { commandState, actionState, turnState, resultState } from "../App";
import { itembox, skilltree, equipmentbox } from "../../class/instance";

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

const StyledBack = styled.a`
  &::before {
    content: "▶";
    opacity: 0;
  }
  &:hover::before {
    opacity: 100;
`

export const Command = ({ state, setCommand, setAction, setTurn, setEntity, result }) => {
  // アイテムボックス, スキルツリー表示
  // 引数にアイテムボックスorスキルツリーを指定
  const showEntities = (entities) => entities.map((e) => {
    if (e.amount > 0 || e.amount == null) {
      if (e.wearing == false || e.wearing == null) {
        // array.map()を使ったとき、一番上の要素にkeyを設定しないとwarningが出る
        return (
          <React.Fragment key={e.name}>
            <StyledA
              onClick={() => {
                setAction(state);
                setCommand(commandState.battle);
                result == resultState.battle ? setTurn(turnState.prev) : null;
              }}
              onMouseEnter={() => setEntity(e)}>{e.name} {e.amount > 1 ? "×" + e.amount : ""}</StyledA><br></br>
          </React.Fragment>
        )
      }
    }
  });

  // フィールド画面
  if (result == resultState.field) {
    if (state == commandState.initial) {
      return (
        <StyledCommand>
          <div id="command">
            <StyledA onClick={() => {
              setCommand(commandState.search);
            }}>探索</StyledA><br></br>
            <StyledA onClick={() => {
              setCommand(commandState.item);
            }}>アイテム</StyledA><br></br>
            <StyledA onClick={() => {
              setCommand(commandState.equipment);
            }}>装備</StyledA><br></br>
            <StyledA onClick={() => {
              setCommand(commandState.status);
            }}>つよさ</StyledA><br></br>
            <StyledA onClick={() => {
              setCommand(commandState.save);
            }}>セーブ</StyledA>
          </div>
        </StyledCommand>
      )
    }
    // 探索表示, 非表示
    else if (state == commandState.search || state == commandState.battle) {
      return (
        <StyledCommand />
      )
    }
    // アイテム表示
    else if (state == commandState.item) {
      return (
        <StyledCommand>
          {showEntities(itembox)}
          <StyledBack onClick={() => {
            setCommand(commandState.initial);
            setEntity("none");
          }}>
            もどる
          </StyledBack>
        </StyledCommand>
      )
    }
    // 装備表示
    else if (state == commandState.equipment) {
      return (
        <StyledCommand>
          {showEntities(equipmentbox)}
          <StyledBack onClick={() => {
            setCommand(commandState.initial);
            setEntity("none");
          }}>
            もどる
          </StyledBack>
        </StyledCommand>
      )
    }
    // つよさ表示
    else if (state == commandState.status) {
      return (
        <StyledCommand>
          <StyledBack onClick={() => {
            setCommand(commandState.initial);
            setEntity("none");
          }}>
            もどる
          </StyledBack>
        </StyledCommand>
      )
    }
    // セーブ表示
    else if (state == commandState.save) {
      return (
        <StyledCommand>
          <div id="command">
            <form name="save" action="save" method="GET">
              <StyledA onClick={() => {
                // save();
                document.save.submit();
              }}>
                はい
              </StyledA><br></br>
              <StyledA onClick={() => {
                setCommand(commandState.initial)
              }}>いいえ</StyledA>
            </form>
          </div>
        </StyledCommand>
      )
    }
  }

  // 戦闘画面
  else if (result == resultState.battle) {
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
        <StyledCommand />
      )
    }
    // アイテム表示
    else if (state == commandState.item) {
      return (
        <StyledCommand>
          {showEntities(itembox)}
          <StyledBack onClick={() => {
            setCommand(commandState.initial);
            setEntity("none");
          }}>
            もどる
          </StyledBack>
        </StyledCommand>
      )
    }
    // スキル表示
    else if (state == commandState.skill) {
      return (
        <StyledCommand>
          {showEntities(skilltree)}
          <StyledBack onClick={() => {
            setCommand(commandState.initial);
            setEntity("none");
          }}>
            もどる
          </StyledBack>
        </StyledCommand>
      )
    }
  }
  // 戦闘終了のタイミング
  else {
    return (
      <StyledCommand />
    )
  }
}
