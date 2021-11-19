import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from "react-router-dom";
import { Box, Input, Button, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import Message from './Message/Message'

const msger = {
    display: 'flex',
    flexFlow: 'column wrap',
    height: '100vh',
    border: 2,
    borderColor: 'divider',
    borderRadius: 1,
}

const msgerChat = {
    flex: 1,
    overflowY: 'auto',
    p: 1,
}

const msgerForm = {
    display: 'flex',
    p: 1,
    borderTop: 2,
    borderColor: 'divider',
}


export default function MessageList() {
    const { roomId } = useParams();
    const [messageList, setMessageList] = useState({
        room1: [
            { text: "HEYYEYAAEYAAAEYAEYAA", autor: "HEMAN" },
            { text: "Hey", autor: "HEMAN" },
            { text: "What's goin on?", autor: "HEMAN" },
        ],
        room2: [
            { text: "hello room2", autor: "HEMAN" },
            { text: "hello room2", autor: "User" }
        ]
    }
    );
    const [formValue, setFormValue] = useState('')

    const sendMessage = useCallback(
        (text, autor = "HEMAN") => {
            if (text) {
                setMessageList({
                    ...messageList, [roomId]: [
                        ...(messageList[roomId] ?? []),
                        { autor, text },
                    ],
                });

                setFormValue("");
            }
        },
        [messageList, roomId]
    );

    // const sendMessage = (e) => {
    //     e.preventDefault()
    //     if (formValue) {
    //         setMessageList([...messageList, { text: formValue, autor: "HEMAN" }])
    //         setFormValue('')
    //     }
    // }

    useEffect(() => {
        const messages = messageList[roomId] ?? [];
        const lastMessage = messages[messages.length - 1];
        if (messages.length && lastMessage.autor === 'HEMAN') {
            setTimeout(() => {
                sendMessage(`Not much, brb`, "Duncan-BOT")
            }, 1000)
        }
    }, [messageList, sendMessage, roomId])

    const messages = messageList[roomId] ?? [];

    return (
        <Box sx={{
            ...msger
        }}>
            <Box sx={{
                ...msgerChat
            }}>
                {messages.map((msg, i) => <Message key={i} message={msg} />)}
            </Box>
            <Box component="form"
                onSubmit={sendMessage(formValue)}
                // onSubmit={console.log('click')}
                sx={{
                    ...msgerForm
                }}>
                <Input
                    placeholder="Enter your message..."
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    inputRef={input => input && input.focus()}
                    fullWidth />
                <IconButton type="submit"
                    aria-label="send"
                    size="large"
                    color="primary"
                    sx={{
                        ml: 1,
                    }}>
                    <SendIcon fontSize="inherit" />
                </IconButton>
            </Box>
        </Box>
        // <div className={styles.msger}>
        //     <div className={styles.msgerChat}>
        //         {messageList.map((msg, i) => <Message key={i} message={msg} />)}
        //     </div>

        //     <form className={styles.msgerInputarea} onSubmit={sendMessage}>
        //         <Input
        //             placeholder="Enter your message..."
        //             value={formValue}
        //             onChange={(e) => setFormValue(e.target.value)}

        //             // 2. Добавить автофокус
        //             inputRef={input => input && input.focus()}
        //             fullWidth />
        //         <Button
        //             type="submit"
        //             variant="contained"
        //             startIcon={<ChatIcon />}>send</Button>
        //     </form>
        // </div>
    )
}


