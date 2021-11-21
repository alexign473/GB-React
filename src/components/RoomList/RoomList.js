import { Link, useParams } from "react-router-dom";
import { List } from "@mui/material";
import { useState } from "react";

import Room from './Room/Room.js';

export default function RoomList() {
    const [rooms] = useState(["room1", "room2", "room3"]);
    const params = useParams();

    return (
        <div>
            <h2>Room list</h2>
            <List>
                {rooms.map((room, i) => (
                    <Link key={room} to={`/chat/${room}`}>
                        <Room title={room} selected={params.roomId === room} room={room} />
                    </Link>
                ))}
            </List>
        </div>
    )
}
