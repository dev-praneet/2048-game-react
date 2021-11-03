import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

// components
import Header from '../Header';

// global variables
import { globalVariables } from '../../globalVariables';

import Tile from '../Tile/Tile';

const Wrapper = styled.div`
    width: ${props => props.theme.dimension.gap * (props.theme.tileCount + 1) + props.theme.dimension.tileWidth * props.theme.tileCount + 'px'};
    margin: 0 auto;
    padding: 2em 0em;
`;

const Container = styled.div`
    position: relative;
    width: ${props => props.theme.dimension.gap * (props.theme.tileCount + 1) + props.theme.dimension.tileWidth * props.theme.tileCount + 'px'};
    height: ${props => props.theme.dimension.gap * (props.theme.tileCount + 1) + props.theme.dimension.tileWidth * props.theme.tileCount + 'px'};
    // margin: 2em auto 0 auto;
    margin-top: 2em;
    padding: ${props => props.theme.dimension.gap + 'px'};
    background-color: hsl(34, 22%, 68%);
    border-radius: 1%;

    display: grid;
    grid-template-columns: repeat(${globalVariables.noOfTiles}, 1fr);
    gap: ${props => props.theme.dimension.gap + 'px'};
    div {
        background-color: hsl(31, 20%, 76%);
        border-radius: 5%;
    }
`;

const TileHolder = styled.div`

`;

const Board: React.FC = () => {

    const tileList = [];
    for (let i = 0; i < globalVariables.noOfTiles; i++) {
        for (let j = 0; j < globalVariables.noOfTiles; j++) {
            tileList.push(<div></div>)
        }
    }

    return (
        <Wrapper>
            <Header />
            <Container>
            {tileList}
            </Container>
        </Wrapper>
    )
}

export default Board;