import React from "react";
import styled from 'styled-components';

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

export const Message = () => {
  return (
    <StyledMessage>
      スライムがあらわれた！
    </StyledMessage>
  )
}
