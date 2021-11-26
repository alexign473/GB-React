import { useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';

import MessageList from '../components/MessageList/MessageList';
import RoomList from '../components/RoomList/RoomList'

export const ChatPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const listener = ({ code }) => {
            if (code === "Escape") {
                navigate("/chat");
            }
        };

        document.addEventListener("keydown", listener);

        return () => document.removeEventListener("keydown", listener);
    }, [navigate]);

    return (
        <>
            <Grid container spacing={0} alignItems="stretch">
                <Grid item xs={12} md={3}>
                    <RoomList />
                </Grid>
                <Grid item xs md>
                    <Routes>
                        <Route path=":roomId" element={<MessageList />} />
                        <Route path="/" element={<h1>Select room</h1>} />
                    </Routes>
                </Grid>
            </Grid>
        </>
    );
};
