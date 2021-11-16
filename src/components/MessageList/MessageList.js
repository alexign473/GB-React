import { useState, useEffect } from 'react';
import { Input, Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

import Message from './Message/Message'



export default function MessageList() {
    <ChatIcon />
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
        <div className="msger">
            <div className="msger-chat">
                {/* 3. Исправить ошибку, связанную с отсутствием key у сообщений. */}
                {messageList.map((msg, i) => <Message key={i} message={msg} />)}
            </div>

            {/* 1. Установить material-ui */}
            <form className="msger-inputarea" onSubmit={sendMessage}>
                <Input
                    placeholder="Enter your message..."
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}

                    // 2. Добавить автофокус
                    inputRef={input => input && input.focus()}
                    fullWidth />
                <Button
                    type="submit"
                    variant="contained"
                    startIcon={<ChatIcon />}>Отправить</Button>
            </form>
        </div>
    )
}


