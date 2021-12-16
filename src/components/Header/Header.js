import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import styles from './Header.module.css'
import DarkModeToggle from '../DarkModeToggle'

export default function Header() {
    return (
        <Box component="header" sx={{
            height: 50,
            py: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center'
        }}>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/chat">Chat</Link>
                <Link to="/api">API</Link>
                <Link to="/login">Login</Link>
                <Link to="/sign-up">Sign Up</Link>
            </nav>
            <DarkModeToggle />
        </Box>
    )
}
