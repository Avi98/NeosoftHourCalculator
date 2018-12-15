import React from "react";
import styled from "styled-components";
import { TimmerButtons } from "./buttonsScreen";
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
      <TimmerButtons />
    </Container>
  );
}
