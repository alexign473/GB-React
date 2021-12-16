import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0f0',
            contrastText: '#fff'
        },
        secondary: {
            main: '#f50057',
            contrastText: '#fff'
        },
        background: {
            default: '#0e0e10',
            paper: '#212121',
        },
    }
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        secondary: {
            main: '#ce93d8',
            contrastText: '#fff'
        },
        background: {
            default: '#fff',
            paper: '#fafafa',
        }
    }

});