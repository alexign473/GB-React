import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "@mui/material";
import FormInput from "../FormInput/FormInput";
import RoomLink from './RoomLink/RoomLink'
import { selectChatsTitles, chatAdded } from '../../store/chat/chatSlice'

export default function RoomList() {
    const dispatch = useDispatch();
    const rooms = useSelector(selectChatsTitles)

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
            <FormInput onFormSubmit={onFormSubmit}
                label="Add room"
                titleInput={titleInput}
                onTitleInputChange={onTitleInputChange}
                primary="add" />
        </>

    )
}


