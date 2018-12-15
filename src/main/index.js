import React from "react";
import styled from "styled-components";
import { Buttons } from "./styles";
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
const Container = styled.div`
  width: 30rem;
  display: flex;
  padding: 2rem;
  align-self: center;
  justify-content: space-between;
`;

export default function Main(props) {
  return (
    <Container>
      <CButtons background={"#d90368"}>Set Time</CButtons>
      <CButtons2 background={"#F28123"}>Start Now</CButtons2>
    </Container>
  );
}
