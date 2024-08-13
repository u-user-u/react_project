import ReactDOM from "react-dom";
import React from "react";
import styled from 'styled-components';
import { StyledLink } from './title';

const StyledRegister = styled.div`
  displey: inline-block;
  font-size: 16px;
  margin: 5%;
`

const StyledInput = styled.input`
  background-color: black;
  border: 2px solid #fff; 
  border-radius: 3px;
  color: white;
`

const StyledButton = styled.button`
  text-decoration: none;
  background-color: black;
  border: none;
  font-size: 16px;
  color: white;
  &::before {
    content: "▶";
    opacity: 0;
  }
  &:hover::before {
    opacity: 100;
`

export const Load = () => {
  return (
    <StyledRegister>
      <form action="load" method="GET">
        名前を入力してください<br></br>
        <StyledInput type="text" name="name"></StyledInput><br></br>
        合言葉を入力してください<br></br>
        <StyledInput type="password" name="password"></StyledInput><br></br>
        <StyledButton type="submit">
          けってい
        </StyledButton>
        <StyledLink to="/title">
          もどる
        </StyledLink>
      </form>
    </StyledRegister>
  )
}
