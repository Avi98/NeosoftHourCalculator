import './App.css';
import logo from './logo.svg';
import React, { Component } from 'react';

import styled, {ThemeProvider} from 'styled-components';
import {Theme} from './Theme';
import {Header} from './components';

const Container = styled.div`
  background-color: ${props=>props.theme.backgroundGround};
  font-size: ${p=> p.theme.fontsizeBase};
  height: 8rem;
  weidth: 8rem;
`
function App () {
 
    return (
      <ThemeProvider theme={Theme}>
        <Container>
          <Header />
        </Container>
      </ThemeProvider>
    );
  
}

export default App;
