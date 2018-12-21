import React, { useState } from "react";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  width: 8rem;
  margin-top: 0.2rem;
  justify-content: space-between;
`;
const RoundButtons = styled.div`
  background-image: -webkit-linear-gradient(top, #f4f1ee, #fff);
  background-image: linear-gradient(top, #f4f1ee, #fff);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: relative;
  &:after {
    color: #e9e6e4;
    content: "";
    display: block;
    font-size: 30px;
    height: 30px;
    text-decoration: none;
    text-shadow: 0px -1px 1px #bdb5b4, 1px 1px 1px white;
    position: absolute;
    width: 20px;
  }
`;

const TickButton = styled(RoundButtons)`
  &:after {
    content: "✔";
    left: 8px;
    top: 2px;
  }
`;
const CancleButton = styled(RoundButtons)`
  &:after {
    content: "✖";
    left: 8px;
    top: 2px;
  }
`;
export function TimePicker(props) {
  const currentDate = new Date();
  const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
  const [time, setTime] = useState(currentTime);

  return (
    <div>
      <input
        type="time"
        value={time}
        onChange={e => {
          e.preventDfault();
          setTime(e.target.value);
        }}
        style={{ fontSize: "2em" }}
      />
      <ButtonsContainer>
        <TickButton onClick={props.setTime} />
        <CancleButton onClick={props.returnToMainScreen} />
      </ButtonsContainer>
    </div>
  );
}
