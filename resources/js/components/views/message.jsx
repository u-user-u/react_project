import React from "react";
import styled from 'styled-components';
import { commandState, actionState, turnState, resultState } from '../App';
import { player, enemy, equipmentbox, allSkill, skilltree } from "../../class/instance";
import { Player } from "../../class/class";
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

let prev_level = 0;
let gotskill = [];

export const Message = ({ state, setCommand, action, setAction, turn, setTurn, result, setResult, entity, setEntity, text, setText }) => {
  // アイテム, スキルメッセージ
  const entityMessage = () => {
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
        return <div id="message">消費MP : {entity.useMP}<br></br>{entity.detail}</div>;
      }
    }
    // 装備のとき
    else if (state == commandState.equipment) {
      if (entity == "none") {
        return <div id="message">{player.name}は装備袋を開いた</div>;
      }
      else {
        let a = "";
        switch (entity.type) {
          case 'weapon':
            a = "武器, ";
            break;
          case 'head':
            a = "頭, ";
            break;
          case 'body':
            a = "体, ";
            break;
          default:
            a = "";
        }
        if (entity.attack > 0) {
          a += " 攻撃力+" + entity.attack;
        }
        if (entity.defence > 0) {
          a += " 守備力+" + entity.defence;
        }
        if (entity.speed > 0) {
          a += " 素早さ+" + entity.speed;
        }
        if (entity.intelligence > 0) {
          a += " 魔力" + entity.intelligence;
        }
        return a;
      }
    }
  }

  const changeEquipment = (equipment) => {
    equipmentbox.map((e) => {
      if (e.type == equipment.type) {
        e.wearing = 0;
      }
    });
    equipmentbox.map((e) => {
      if (e.name == equipment.name) {
        e.wearing = 1;
      }
    });
    return equipment.name + " を装備した";
  }

  // フィールド
  if (result == resultState.field) {
    if (action == actionState.initial) {
      // 初期表示
      if (state == commandState.initial) {
        return (
          <StyledMessage>
            <div id="message">
              よどんだ空気で溢れかえっている...
            </div>
          </StyledMessage>
        )
      }
      // 探索表示
      else if (state == commandState.search) {
        return (
          <StyledMessage>
            <div id="message">
              <StyledM onClick={() => {
                setResult(resultState.battle);
                setCommand(commandState.initial);
              }}>
                {player.name}は勇気を出して歩き出した...
              </StyledM>
            </div>
          </StyledMessage>
        )
      }
      // アイテム表示
      else if (state == commandState.item) {
        return (
          <StyledMessage>
            {entityMessage()}
          </StyledMessage>
        )
      }
      // 装備表示
      else if (state == commandState.equipment) {
        return (
          <StyledMessage>
            {entityMessage()}
          </StyledMessage>
        )
      }
      // つよさ表示
      else if (state == commandState.status) {
        return (
          <StyledMessage>
            <div id="message">
              {player.name}は自分を見つめ直した
            </div>
          </StyledMessage>
        )
      }
      // セーブ表示
      else if (state == commandState.save) {
        return (
          <StyledMessage>
            <div id="message">
              セーブしてタイトルに戻りますか？
            </div>
          </StyledMessage>
        )
      }
    }
    // フィールドアクション
    // アイテム使用
    else if (action == actionState.item) {
      return (
        <StyledMessage>
          <StyledM onClick={() => {
            setAction(actionState.initial);
            setCommand(commandState.initial);
            setEntity("none");
          }}>{player.action(action, null, entity)}</StyledM>
        </StyledMessage>
      )
    }
    // 装備切り替え
    else if (action == actionState.equipment) {
      return (
        <StyledMessage>
          <StyledM onClick={() => {
            setAction(actionState.initial);
            setCommand(commandState.initial);
            setEntity("none");
          }}>{changeEquipment(entity)}</StyledM>
        </StyledMessage>
      )
    }
  }
  // 戦闘中
  else if (result == resultState.battle) {
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
              setResult(lib.judgeWinLose());
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
              if (lib.judgeWinLose() == "BATTLE") {
                setCommand(commandState.wait);
                setTurn(turnState.wait);
                setEntity("none");
                setResult(lib.judgeWinLose());
              } else {
                setTurn(turnState.wait);
                setEntity("none");
                setResult(lib.judgeWinLose());
              }
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
  // リザルト勝利
  else if (result == resultState.win) {
    return (
      <StyledMessage>
        <StyledM onClick={() => {
          setResult(resultState.getEXP);
          setAction(actionState.initial);
        }}>
          {enemy.name}を倒した!
        </StyledM>
      </StyledMessage>
    );
  }
  // リザルト敗北
  else if (result == resultState.lose) {
    return (
      <StyledMessage>
        <StyledM onClick={() => {
          setResult(resultState.field);
          setCommand(commandState.initial);
          setAction(actionState.initial);
          player.HP = player.maxHP;
          player.MP = player.maxMP;
          player.state = "";
          player.tmp_floor = 1;
        }}>
          {player.name}は倒れてしまった...
        </StyledM>
      </StyledMessage>
    );
  }
  // リザルト経験値取得
  else if (result == resultState.getEXP) {
    return (
      <StyledMessage>
        <StyledM onClick={() => {
          prev_level = player.updateLevel();
          if (prev_level == player.level) {
            setCommand(commandState.initial);
            setResult(resultState.field);
            player.tmp_floor += 1;
            player.record_floor > player.tmp_floor ? player.record_floor = player.tmp_floor : true;
          } else {
            setResult(resultState.levelUp);
          }
        }}>
          {enemy.name}を倒した!<br></br>
          {player.getEXP(enemy)}
        </StyledM>
      </StyledMessage>
    );
  }
  // リザルトレベルアップ
  else if (result == resultState.levelUp) {
    return (
      <StyledMessage>
        <StyledM onClick={() => {
          gotskill = player.getSkill();
          console.log(gotskill);
          if (gotskill.length == 0) {
            setCommand(commandState.initial);
            setResult(resultState.field);
            player.tmp_floor += 1;
            player.record_floor > player.tmp_floor ? player.record_floor = player.tmp_floor : true;
          } else {
            setResult(resultState.getSkill);
          }
        }}>
          {player.name}のレベルが上がった!<br></br>
          Lv. {prev_level} → {player.level}<br></br>
          {player.updateParameter(player.level - prev_level)}
        </StyledM>
      </StyledMessage>
    );
  }
  // リザルトスキル取得
  else if (result == resultState.getSkill) {
    return (
      <StyledMessage>
        <StyledM onClick={() => {
          setCommand(commandState.initial);
          setResult(resultState.field);
          gotskill = [];
          player.tmp_floor += 1;
          player.record_floor > player.tmp_floor ? player.record_floor = player.tmp_floor : true;
        }}>
          {gotskill.map((s) => {
            return (
              <React.Fragment key={s}>
                スキル : {s} を覚えた!<br></br>
              </React.Fragment>
            );
          })}
        </StyledM>
      </StyledMessage>
    )
  }
}
