import { ThemeProvider, DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    animationDuration: '200ms',
    tileCount: 4,
    scale: 1.1,

    dimension: {
        gap: 15, // pixel
        tileWidth: 90,  // pixel
    }
}

export const Theme: React.FC = ({children}) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};