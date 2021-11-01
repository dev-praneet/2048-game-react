import React from 'react';

// components
import Game from './components/Game/Game';
import { Theme } from './components/Theme';

// styles
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

const Wrapper = styled.div`
  margin: 0 auto;
`;

function App() {
  return (
    <Theme>
      <GlobalStyle/>
      <Wrapper>
        <Game />
      </Wrapper>
    </Theme>
  );
}

export default App;