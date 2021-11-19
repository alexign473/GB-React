import { React, useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useParams,
    useLinkClickHandler,
    useNavigate
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import Container from '@mui/material/Container';


import { HomePage, ChatPage, ProfilePage } from "./pages";
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
                <Container>

                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/chat/*" element={<ChatPage />} />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route path="/*" element={<h1>404</h1>} />
                        </Routes>
                    </BrowserRouter>
                </Container>
                <DarkModeToggle toggleDark={toggleDark}
                    settoggleDark={settoggleDark} />
            </ThemeProvider>
        </>
    )
}
