import * as React from 'react';
import { useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom';
import { ListItem, ListItemText, ListItemAvatar, Avatar, IconButton } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { chatDeleted } from '../../../store/chat/chatSlice'

export default function RoomLink(props) {
    const { icon, primary, to, title } = props;
    const dispatch = useDispatch();

    const renderLink = React.useMemo(
        () =>
            React.forwardRef(function Link(itemProps, ref) {
                return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
            }),
        [to],
    );

    return (
        <li>
            <ListItem button
                component={renderLink}
                disablePadding
                secondaryAction={
                    <IconButton edge="end" aria-label="delete" size="small" color="primary"
                        onClick={() => { dispatch(chatDeleted(title)) }}>
                        <ClearIcon />
                    </IconButton>
                } >
                <ListItemAvatar>
                    <Avatar src="https://source.unsplash.com/random?sig=123"
                        alt="avatar">
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={title} color="primary" secondary="Jan 9, 2021" />
            </ListItem>
        </li>
    );
}