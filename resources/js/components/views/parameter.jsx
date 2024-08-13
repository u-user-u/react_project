import React from "react";
import styled from 'styled-components';
import { equipmentbox, player } from '../../class/instance';
import { commandState } from "../App";

const StyledParameter = styled.div`
  display: inline-block;
  width: 80%;
  height: 130px;
  text-align: left;
  margin: 20px 0px 0px 0px;
  padding: 8px 0px 10px 20px;
  border: 3px solid;
  border-color: white;
  border-radius: 6px;
`

const StyledFloor = styled.div`
  text-align: center
`

const StyledPlayer = styled.div`
  margin-left: 20px;
  margin-right: 0px;
`

const StyledS = styled.div`
  margin-left: 20px;
  margin-right: auto;
`

const StyledStatus = styled.div`
  display: flex;
`



const Floor = () => {
  return (
    <StyledFloor>第{player.tmp_floor}層</StyledFloor>
  )
}

const Player = () => {
  return (
    <StyledPlayer>
      {player.name}<br></br>
      Lv. {player.level}<br></br>
      HP : {player.HP}/{player.maxHP}<br></br>
      MP : {player.MP}/{player.maxMP}<br></br>
    </StyledPlayer>
  )
}

const Equipment = () => {
  return (
    <StyledPlayer>
      頭　：{equipmentbox.map((e) => {
        if (e.type == "head" && e.wearing == 1) {
          return e.name;
        }
      })
      }<br></br>
      体　：{
        equipmentbox.map((e) => {
          if (e.type == "body" && e.wearing == 1) {
            return e.name;
          }
        })
      }<br></br>
      武器：{
        equipmentbox.map((e) => {
          if (e.type == "weapon" && e.wearing == 1) {
            return e.name;
          }
        })
      }
    </StyledPlayer>
  )
}

const StatusLeft = () => {
  return (
    <StyledPlayer>
      攻撃力 : {player.attack}<br></br>
      守備力 : {player.defence}<br></br>
      素早さ : {player.speed}<br></br>
      魔力　 : {player.intelligence}
    </StyledPlayer>
  )
}

const StatusRight = () => {
  return (
    <StyledS>
      状態　　 : {player.state}<br></br>
      総経験値 : {player.totalEXP}
    </StyledS>
  )
}

export const Parameter = ({ state }) => {
  return (
    <StyledParameter>
      <Floor />
      <StyledStatus>
        <Player />
        {state == commandState.equipment || state == commandState.status ? <Equipment /> : ""}
        {state == commandState.status ? <><StatusLeft /><StatusRight /></> : ""}
      </StyledStatus>
    </StyledParameter>
  )
}
