import React from "react";
import styled from "styled-components";

import { TimePicker } from "../components";
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
/**
render a sub components 
1.setTime component, 
2. start now component 
3. common for start now and set time add task components */
export default function({ renderTimePicker }) {
  const renderComponents = () => {
    if (renderTimePicker) {
      return <TimePicker />;
    } else if (!renderTimePicker) {
      return <div>startNow</div>;
    }
  };
  return <Container>{renderComponents()}</Container>;
}
