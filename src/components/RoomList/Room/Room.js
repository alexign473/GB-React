import { ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";

export default function Room(props) {
    const title = props.room
    return (
        <ListItem disablePadding button>
            <ListItemAvatar>
                <Avatar
                    src="https://source.unsplash.com/random?sig=123"
                    alt="avatar">
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={title} color="primary" secondary="Jan 9, 2021" />
        </ListItem>
    )
}
