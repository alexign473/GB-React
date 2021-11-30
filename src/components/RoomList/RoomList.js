import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RoomLink from './RoomLink/RoomLink'
import { selectChatsTitles, chatAdded } from '../../store/chat/chatSlice'

export default function RoomList() {
    // const [rooms] = useState(["room1", "room2", "room3"]);
    const dispatch = useDispatch();
    const rooms = useSelector(selectChatsTitles)
    // console.log(rooms)

    const [titleInput, setTitleInput] = useState('')
    const onTitleInputChange = (e) => {
        setTitleInput(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        const isValidTitle = !rooms.find(room => titleInput === room)

        try {
            if (titleInput.trim() !== "" && isValidTitle) {
                dispatch(chatAdded(titleInput))
                setTitleInput("")
            } else {
                alert("не валидная комната")
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <List>
                {rooms.map((room) => (<RoomLink to={`/chat/${room}`} key={room} title={room} />))}
            </List>
            <Box component="form"
                onSubmit={onFormSubmit}
                sx={{
                    // '& .MuiTextField-root': { width: '25ch' },
                    display: 'flex',
                    alignItems: 'flex-end'
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="Add room"
                    id="standard-size-small"
                    size="small"
                    variant="standard"
                    value={titleInput}
                    onChange={onTitleInputChange}
                />
                <Button type="submit" variant="outlined" size="small" sx={{ height: '28px' }}>add</Button>
            </Box>
        </>

    )
}


