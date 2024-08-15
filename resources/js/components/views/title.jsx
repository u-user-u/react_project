import ReactDOM from "react-dom";
import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledTitle = styled.div`
  display: inline-block;
  font-size: 36px;
  color: white;
  margin-top: 15%;
`

const StyledDiv = styled.div`
  display:inline-block;
  font-size: 18px;
  margin-top: 5%;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: white;
  &::before {
    content: "▶";
    opacity: 0;
  }
  &:hover::before {
    opacity: 100;
  }
`

const StyledRanking = styled(Link)`
  position: relative;
  text-decoration: none;
  font-size: 18px;
  color: white;
  right: 10px;
  &::before {
    content: "▶";
    opacity: 0;
  }
  &:hover::before {
    opacity: 100;
  }
`

export const Title = () => {
  return (
    <>
      <StyledTitle>
        タイトル
      </StyledTitle><br></br>
      <StyledDiv>
        冒険を始める<br></br>
        <StyledLink to="/register">
          はじめから
        </StyledLink><br></br>
        <StyledLink to="/load">
          つづきから
        </StyledLink><br></br><br></br>
        <StyledRanking to="/ranking">
          ランキング
        </StyledRanking><br></br>
        <StyledDiv>
          {message}
        </StyledDiv>
      </StyledDiv>
    </>
  )
}
