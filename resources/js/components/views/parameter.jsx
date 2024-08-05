import React from "react";
import styled from 'styled-components';

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

// user情報取得
const USER_PARAMETER = document.getElementById('user').value;
const USER_ROOT = JSON.parse(USER_PARAMETER);

const Floor = () => {
  return (
    <StyledFloor>第{USER_ROOT.tmp_floor}層</StyledFloor>
  )
}

const Player = () => {
  return (
    <StyledPlayer>
      {USER_ROOT.name}<br></br>
      Lv. 1<br></br>
      HP : 100/100<br></br>
      MP : 50/50<br></br>
    </StyledPlayer>
  )
}

export const Parameter = () => {
  return (
    <StyledParameter>
      <Floor />
      <Player />
    </StyledParameter>
  )
}
