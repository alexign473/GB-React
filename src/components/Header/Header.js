import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import styles from './Header.module.css'

export default function Header() {
    return (
        <Box component="header" sx={{
            height: 50,
            py: 2,
        }}>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/chat">Chat</Link>
            </nav>
        </Box>
    )
}
