import React from "react";
import styled from 'styled-components';

const StyledCommand = styled.div`
  display: inline-block;
  width: 15%;
  height: 180px;
  text-align: left;
  vertical-align: top;
  margin: 0px 0px 20px 0px;
  padding: 10px 0px 10px 30px;
  border: 3px solid;
  border-color: white;
  border-radius: 6px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const Command = () => {
  return (
    <StyledCommand>
      探索<br></br>
      アイテム<br></br>
      装備<br></br>
      つよさ<br></br>
      セーブして終わる<br></br>
    </StyledCommand>
  )
}
