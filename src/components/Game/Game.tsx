import React, { useEffect } from 'react';
import { useThrottledCallback } from 'use-debounce';

import { useGame } from './hooks/useGame';



const Game = () => {



    return <Board tiles={tiles} tileCountPerRow={tileCount} />;
}

export default Game;