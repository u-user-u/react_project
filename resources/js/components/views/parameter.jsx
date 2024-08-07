import React from "react";
import styled from 'styled-components';
import { player } from '../../class/instance';

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
  margin-right: auto;
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
      HP : {player.tmpHP}/{player.maxHP}<br></br>
      MP : {player.tmpMP}/{player.maxMP}<br></br>
    </StyledPlayer>
  )
}

export const Parameter = ({ turn, setTurn }) => {
  return (
    <StyledParameter>
      <Floor />
      <Player />
    </StyledParameter>
  )
}
