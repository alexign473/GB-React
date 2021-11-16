import { List } from "@mui/material";
import { useState } from "react";

import Room from './Room/Room.js';

// 4. Добавить “массив чатов”
export default function RoomList() {
    const [rooms] = useState(["room1", "room2", "room3"]);
    return (
        <div>
            <h2>Room list</h2>
            <List>
                {rooms.map((room, i) => <Room key={room} room={room} />)}
            </List>
        </div>
    )
}
