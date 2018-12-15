import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
 display: flex;
align-items: center;
justify-content: center;
padding: 0.8rem;
  background-color: ${props=>props.theme.backgroundGround};

 
`
export function Header(){
    return(
        <Container>
            <img src ={'img/neosoft.svg'} style={{height:'1.4rem'}} />
            
        </Container>
    )
}