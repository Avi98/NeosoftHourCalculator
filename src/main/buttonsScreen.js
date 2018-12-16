import React from "react";
import styled from "styled-components";

import { Buttons } from "./styles";

const Container = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
`;
//on intial load two buttons should be rendered one with start from now and other with set inital time to set
const CButtons = styled(Buttons)`
  background-color: ${p => p.background};
  &:before {
    content: "⏲";
    font-family: FontAwesome;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: -30px;
    width: 30px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 0px 6px 6px 0px;
    transition: all 0.2s linear 0s;
    text-align: center;
  }

  &:hover {
    text-indent: -30px;

    &:before {
      right: 0;
      text-indent: 0px;
    }
  }
`;
const CButtons2 = styled(Buttons)`
  background-color: ${p => p.background};
  &:before {
    content: "⏳";
    font-family: FontAwesome;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: -30px;
    width: 30px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 0px 6px 6px 0px;
    transition: all 0.2s linear 0s;
    text-align: center;
  }

  &:hover {
    text-indent: -30px;

    &:before {
      right: 0;
      text-indent: 0px;
    }
  }
`;
export function TimmerButtons({ onSetTimeClick }) {
  return (
    <Container>
      <CButtons background={"#d90368"} onClick={onSetTimeClick}>
        Set Time
      </CButtons>
      <CButtons2 background={"#F28123"}>Start Now</CButtons2>
    </Container>
  );
}
