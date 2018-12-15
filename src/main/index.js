import React from "react";
import styled from "styled-components";

//on intial load two buttons should be rendered one with start from now and other with set inital time to set
const Buttons = styled.div`
  text-align: center;
  display: inline-block;
  positon: relative;
  text-decoration: capatalize;
  padding: 1rem 0.5rem;
  color: #fff;
  border-radius: 6px;
  background-color: #d90368;
`;
const Container = styled.div`
  display: flex;
  width: 30rem;
  align-self: center;
  justify-content: center;
`;

export default function Main(props) {
  return (
    <Container>
      <Buttons>
        <div>Set Inital Time</div>
      </Buttons>
    </Container>
  );
}
