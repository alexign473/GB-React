import styles from "./MessageList.module.css"
import { useState, useEffect } from 'react';
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
    const [messageList, setMessageList] = useState([
        { text: "HEYYEYAAEYAAAEYAEYAA", autor: "HEMAN" },
        { text: "Hey", autor: "HEMAN" },
        { text: "What's goin on?", autor: "HEMAN" },
    ]);
    const [formValue, setFormValue] = useState('')

    useEffect(() => {
        const lastMessage = messageList[messageList.length - 1];
        if (messageList.length && lastMessage.autor === 'HEMAN') {
            setTimeout(() => {
                setMessageList([...messageList, { text: `Not much, brb`, autor: "Duncan-BOT" }])
            }, 1000)
        }
    }, [messageList])

    const sendMessage = (e) => {
        e.preventDefault()
        if (formValue) {
            setMessageList([...messageList, { text: formValue, autor: "HEMAN" }])
            setFormValue('')
        }
    }

    return (
        <Box sx={{
            ...msger
        }}>
            <Box sx={{
                ...msgerChat
            }}>
                {messageList.map((msg, i) => <Message key={i} message={msg} />)}
            </Box>
            <Box component="form"
                onSubmit={sendMessage}
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


