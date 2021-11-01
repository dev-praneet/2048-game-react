import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { globalVariables } from '../../globalVariables';

import Tile from '../Tile/Tile';

const Wrapper = styled.div`
    position: relative;
    width: ${props => props.theme.dimension.gap * (props.theme.tileCount + 1) + props.theme.dimension.tileWidth * props.theme.tileCount + 'px'};
    height: ${props => props.theme.dimension.gap * (props.theme.tileCount + 1) + props.theme.dimension.tileWidth * props.theme.tileCount + 'px'};
    margin: 2em auto 0 auto;
    background-color: hsl(7deg, 7%, 52%);
`;


const Board: React.FC = () => {

    const tileList = [];
    for (let i = 0; i < globalVariables.noOfTiles; i++) {
        for (let j = 0; j < globalVariables.noOfTiles; j++) {
            tileList.push(<Tile position={[i, j]} />)
        }
    }

    return (
        <Wrapper>
            {tileList}
        </Wrapper>
    )
}

export default Board;