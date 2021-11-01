import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        animationDuration: string;
        tileCount: number;
        scale: number;

        dimension: {
            gap: number;
            tileWidth: number;
        }
    }
}