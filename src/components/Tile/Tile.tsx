import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
// import {usePrevProps} from '../hooks/usePrevProps';

import { globalVariables } from '../../globalVariables';

type WrapperProp = {
    position: [number, number];
}

const Wrapper = styled.div<WrapperProp>`
    position: absolute;
    left: ${props => props.theme.dimension.gap * (props.position[0] + 1) + props.theme.dimension.tileWidth * props.position[0] + 'px'};
    top: ${props => props.theme.dimension.gap * (props.position[1] + 1) + props.theme.dimension.tileWidth * props.position[1] + 'px'};
    width: ${props => props.theme.dimension.tileWidth + 'px'};
    height: ${props => props.theme.dimension.tileWidth + 'px'};
    background-color: hsl(57deg, 7%, 82%);
    color: #000000;
    margin-bottom: 10px;
    // transform: scaleX(${props => props.theme.scale});
`;

type TileMeta = {
    id: number;
    position: [number, number];
    value: number;
    mergeWith?: number;
};

type Props = {
    position: [number, number];
}

const Tile: React.FC<Props> = (props) => {
    return (
    <Wrapper position={props.position}>
        This is a tile.
    </Wrapper>
    )
}

export default Tile;