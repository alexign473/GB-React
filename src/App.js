import { React, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import MessageList from './components/MessageList/MessageList';
import RoomList from './components/RoomList/RoomList'
import DarkModeToggle from './components/DarkModeToggle';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0f0',
        },
        secondary: {
            main: '#f50057',
            contrastText: '#fff'
        },
        background: {
            default: '#111111',
            paper: '#212121',
        },
    }
});
const lightTheme = createTheme({
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


export default function App() {
    const [toggleDark, settoggleDark] = useState(true);
    return (
        <>
            <ThemeProvider theme={toggleDark ? darkTheme : lightTheme}>
                <CssBaseline />
                <Container fixed>
                    <Grid container spacing={0} alignItems="stretch">
                        <Grid item xs={12} md={3}>
                            <DarkModeToggle toggleDark={toggleDark}
                                settoggleDark={settoggleDark} />
                            <RoomList />
                        </Grid>
                        <Grid item xs md>
                            <MessageList />
                        </Grid>
                    </Grid>
                </Container>
            </ThemeProvider>
        </>
    )
}
