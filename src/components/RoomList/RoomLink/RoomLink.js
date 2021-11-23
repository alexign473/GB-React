import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";

export default function RoomLink(props) {
    const { icon, primary, to } = props;

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
                disablePadding >
                <ListItemAvatar>
                    <Avatar src="https://source.unsplash.com/random?sig=123"
                        alt="avatar">
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={primary} color="primary" secondary="Jan 9, 2021" />
            </ListItem>
        </li>
    );
}