import { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams } from "react-router-dom";
import { Box, Input, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from "react-redux";
import { messageAdded, selectChatById, selectChatMessagesById } from '../../store/chat/chatSlice'

import Message from './Message/Message'

// styles
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
//

export default function MessageList() {
    const { roomId } = useParams();
    const dispatch = useDispatch();

    const [input, setInput] = useState('')

    const onInputChange = (e) => {
        setInput(e.target.value);
    };

    // 2. Подключить соответствующие компоненты к стору.

    const chat = useSelector(selectChatById(roomId))
    const messages = chat?.messages ?? []
    // function useParamSelector(selector, ...params) {
    //     return useSelector(state => selector(state, ...params));
    // }
    // const messages = useParamSelector(selectChatMessagesById, roomId)
    console.log(messages)

    const sendMessage = (e) => {
        e.preventDefault();
        const autor = "HEMAN"
        if (input) {
            dispatch(messageAdded(input, autor, roomId))
        }
        setInput('')
    }

    useEffect(() => {
        const lastMessage = messages[messages.length - 1]
        if (messages.length && lastMessage.autor === 'HEMAN') {
            setTimeout(() => {
                dispatch(messageAdded(`Not much, brb`, "Duncan-BOT", roomId))
            }, 1000)
        }
    }, [messages, roomId])

    return (
        <Box sx={{ ...msger }}>
            <Box sx={{ ...msgerChat }}>
                {messages.map((msg, i) => <Message key={i} message={msg} />)}
            </Box>
            <Box component="form"
                onSubmit={sendMessage}
                sx={{ ...msgerForm }}>
                <Input placeholder="Enter your message..."
                    value={input}
                    onChange={onInputChange}
                    inputRef={input => input && input.focus()}
                    fullWidth />
                <IconButton type="submit"
                    aria-label="send"
                    size="medium"
                    color="primary"
                    sx={{
                        ml: 1,
                    }}>
                    <SendIcon fontSize="inherit" />
                </IconButton>
            </Box>
        </Box>
    )
}


