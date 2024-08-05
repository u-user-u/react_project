import React from "react";
import styled from 'styled-components';

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

const onAttack = () => {
  document.getElementById('command').innerHTML = "";
  document.getElementById('message').innerHTML = "{test}の攻撃!";
}

export const Button = (props) => {
  if (props.action == "attack") {
    return (
      <StyledA href="#" onClick={() => onAttack()}>攻撃</StyledA>
    )
  } else if (props.action == "item") {
    return (
      <StyledA href="#"
      >アイテム</StyledA>
    )
  } else if (props.action == "skill") {
    return (
      <StyledA href="#"
      >スキル</StyledA>
    )
  }
}
