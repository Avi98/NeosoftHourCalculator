import React, { useState, useEffect } from "react";
import styled from "styled-components";
import posed from "react-pose";

import { TimmerButtons } from "./buttonsScreen";
import SubComponents from "./subComponents";
const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

const Container = styled.div`
  width: 30rem;
  padding: 2rem;
`;

export default function Main(props) {
  const [setTimeClicked, setSetTime] = useState(false);

  const onSetTimeClick = () => setSetTime(prevsetTime => !prevsetTime);
  //when setTime clickes imput filed with a start time should showup
  console.log(setTimeClicked);

  const hideButtonsUi = !setTimeClicked;
  return (
    <Container>
      {hideButtonsUi && (
        <TimmerButtons
          onSetTimeClick={onSetTimeClick}
          onStartTimeClick
          onCalcTimeClick
        />
      )}
      {!hideButtonsUi && <SubComponents renderTimePicker={setTimeClicked} />}
    </Container>
  );
}
