import React from "react";
import styled from "styled-components";

const RoundButtons = styled.div`
  background-image: -webkit-linear-gradient(top, #f4f1ee, #fff);
  background-image: linear-gradient(top, #f4f1ee, #fff);
  width: 4rem;
  height: 4rem;
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
    width: 30px;
  }
`;

const TickButton = styled(RoundButtons)`
  &:after {
    content: "✔";
    left: 23px;
    top: 20px;
  }
`;
export function TimePicker(props) {
  const currentDate = new Date();
  const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
  return (
    <div>
      <input type="time" value={currentTime} style={{ fontSize: "3em" }} />
      <TickButton val={"✔"} />
    </div>
  );
}
