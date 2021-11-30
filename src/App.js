import { React } from 'react';
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
import { ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { HomePage, ChatPage, ProfilePage } from "./pages";
import Header from './components/Header/Header';
import { darkTheme, lightTheme } from './themes';
import { store } from './store/store'



export default function App() {
    const darkMode = useSelector(state => state.theme.darkMode)
    console.log(store.getState())
    return (
        <>
            <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
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
                </Container>
            </ThemeProvider>
        </>
    )
}
