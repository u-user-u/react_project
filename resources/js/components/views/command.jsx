import React from "react";
import styled from 'styled-components';
import { Button } from '../button';

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

export const Command = () => {
  return (
    <StyledCommand>
      <div id="command">
        <Button action="attack"></Button><br></br>
        <Button action="item"></Button><br></br>
        <Button action="skill"></Button><br></br>
      </div>
    </StyledCommand>
  )
}
