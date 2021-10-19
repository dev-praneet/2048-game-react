import React from 'react';

// components
import Game from './components/Game/Game';

// styles
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

const Wrapper = styled.div`
  margin: 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle/>
      Hi There!
      <Game />
    </Wrapper>
  );
}

export default App;