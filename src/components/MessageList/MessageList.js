import { Box, Input, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
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

export default function MessageList({ input, messages, dummy, onInputChange, sendMessage }) {

    return (
        <Box sx={{ ...msger }}>
            <Box sx={{ ...msgerChat }}>
                {messages.map((msg, i) => <Message key={i} message={msg} />)}
                <div ref={dummy}></div>
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


