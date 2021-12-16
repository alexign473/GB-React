import { React, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { HomePage, ChatPage, ProfilePage, ApiPage, LoginPage, SignUpPage } from "./pages";
import Header from './components/Header/Header';
import { darkTheme, lightTheme } from './themes';
import { store } from './store/store'
import { selectTheme } from './store/theme/themeSlice'
import { selectUser, saveUser, resetUser } from './store/auth/authSlice'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firebaseApp } from './firebase-config';

export default function App() {
    const dispatch = useDispatch()
    const darkMode = useSelector(selectTheme)
    console.log(store.getState())

    const auth = getAuth(firebaseApp)
    // const [user] = useAuthState(auth);

    const storeUser = useSelector(selectUser)
    console.log("user from state", storeUser);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const refreshToken = user.refreshToken
                // const uid = user.uid;                
                // const photoURL = user.photoURL;
                // const displayName = user.displayName;
                // const email = user.email;
                // const userInfo = { uid, photoURL, displayName, email };
                dispatch(saveUser(refreshToken));
                // ...
            } else {
                // User is signed out
                dispatch(resetUser());
            }
        });
    }, [dispatch, auth]);


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
                            <Route path="/sign-up" element={<SignUpPage />} />
                            <Route path="/*" element={<h1>404</h1>} />
                        </Routes>
                    </BrowserRouter>
                </Container>
            </ThemeProvider>
        </>
    )
}
