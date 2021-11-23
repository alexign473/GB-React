import { React, useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    // Link,
    // useParams,
    // useLinkClickHandler,
    // useNavigate
} from "react-router-dom";
import { CssBaseline, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { HomePage, ChatPage, ProfilePage } from "./pages";
import DarkModeToggle from './components/DarkModeToggle';
import Header from './components/Header/Header';

const darkTheme = createTheme({
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
                        <Header />
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/chat/*" element={<ChatPage />} />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route path="/*" element={<h1>404</h1>} />
                        </Routes>
                    </BrowserRouter>
                    <DarkModeToggle toggleDark={toggleDark}
                        settoggleDark={settoggleDark} />
                </Container>
            </ThemeProvider>
        </>
    )
}
