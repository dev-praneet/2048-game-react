import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {usePrevProps} from '../hooks/usePrevProps';

const Wrapper = styled.div`
    transform: scaleX(${props => props.scale});
`;

type TileMeta = {
    id: number;
    position: [number, number];
    value: number;
    mergeWith?: number;
};

type Props = {
    value: number;
    position: [number, number];
}

const Tile: React.FC<Props> = ({value, position}) => {
    const [scale, setScale] = useState(1);
    
    const prevValue = usePrevProps<number>(value);

    const isNew = prevCoords === undefined;
    const hasChanged = prevValue !== value;
    const shallAnimate = isNew || hasChanged;

    useEffect(() => {
        if (shallAnimate) {
            setScale(1.1);
            setTimeout(() => setScale(1), 100);
        }
    }, [shallAnimate, scale])

    return (
        <Wrapper scale={scale}>
            {value}
        </Wrapper>
    )
}

export default Tile;