import { React } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    // Link,
    // useParams,
    // useLinkClickHandler,
    // useNavigate
} from "react-router-dom";
import { CssBaseline, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { HomePage, ChatPage, ProfilePage, ApiPage, LoginPage } from "./pages";
import Header from './components/Header/Header';
import { darkTheme, lightTheme } from './themes';
import { store } from './store/store'
import { initializeApp } from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { getFirebaseConfig } from './firebase-config'

const app = initializeApp(getFirebaseConfig());

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
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/" element={<Navigate replace to="/home" />} />
                            <Route path="/chat/*" element={<ChatPage />} />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route path="/api" element={<ApiPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/*" element={<h1>404</h1>} />
                        </Routes>
                    </BrowserRouter>
                </Container>
            </ThemeProvider>
        </>
    )
}
