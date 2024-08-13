import React from "react";
import styled from 'styled-components';
import { resultState } from "../App";

const StyledEnemy = styled.div`
  display: inline-block;
  width: 400px;
  height: 350px;
  margin: 5px 0px 5px 0px;
`

const StyledImage = styled.img`
  margin-top: 60px
`

export const EnemyView = ({ result }) => {
  // 戦闘中
  if (result == resultState.battle) {
    return (
      <StyledEnemy>
        <StyledImage src="../../../images/slime.png"></StyledImage>
      </StyledEnemy>
    )
  }
  // 戦闘以外
  else {
    return (
      <StyledEnemy />
    )
  }
}
