import { useState } from "react";
import { List } from "@mui/material";
import RoomLink from './RoomLink/RoomLink'

export default function RoomList() {
    const [rooms] = useState(["room1", "room2", "room3"]);

    return (
        <>
            <List>
                {rooms.map((room, i) => (<RoomLink to={`/chat/${room}`} primary={room} key={room} />))}
            </List>
        </>

    )
}


