import React, { useEffect } from 'react';
import { useThrottledCallback } from 'use-debounce';

import { useGame } from './hooks/useGame';
import Board from '../Board/Board';



const Game = () => {

    // const [tiles, moveLeft, moveRight, moveUp, moveDown] = useGame();

    // const handleKeyDown = (event: KeyboardEvent) => {
    //     event.preventDefault;
    //     switch (event.code) {
    //         case 'ArrowLeft':
    //             moveLeft();
    //             break;
    //         case 'ArrowRight':
    //             moveRight();
    //             break;
    //         case 'ArrowUp':
    //             moveUp();
    //             break;
    //         case 'ArrowDown':
    //             moveDown();
    //             break;
    //     }
    // }

    // const throttledHandleKeyDown = useThrottledCallback(handleKeyDown, props.theme.animationDuration, {leading: true, trailing: false});

    // useEffect(() => {
    //     window.addEventListener('keydown', throttledHandleKeyDown);
    //     return () => {
    //         window.removeEventListener('keydown', throttledHandleKeyDown);
    //     }
    // }, [throttledHandleKeyDown])

    return <Board />;
    // what the tiles prop does will be clear when I work on the Board hook
}

export default Game;