import "./App.css";
import logo from "./logo.svg";
import React, { Component } from "react";

import styled, { ThemeProvider } from "styled-components";
import { Theme } from "./Theme";
import { Header } from "./components";

import Main from "./main";
const Container = styled.div`
  background-color: ${props => props.theme.backgroundGround};
  font-size: ${p => p.theme.fontsizeBase};
  overflow: hidden;
`;
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <React.Fragment>
        <Header />
        <Container>
          <Main />
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
