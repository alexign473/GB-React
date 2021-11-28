import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "@mui/material";
import RoomLink from './RoomLink/RoomLink'
import { selectChatsIds } from '../../features/chat/chatSlice'

export default function RoomList() {
    // const [rooms] = useState(["room1", "room2", "room3"]);
    const dispatch = useDispatch();
    const rooms = useSelector(selectChatsIds)
    console.log(rooms)

    return (
        <>
            <List>
                {rooms.map((room, i) => (<RoomLink to={`/chat/${room}`} primary={room} key={room} />))}
            </List>
        </>

    )
}


