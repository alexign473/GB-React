import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import MessageList from './components/MessageList/MessageList';
import RoomList from './components/RoomList/RoomList'


// 5. * Добавить тему material-ui.
const light = createTheme({
    theme: {
        color: "#fff",
    },
});

const dark = createTheme({
    theme: {
        color: "#000",
    },
});

export default function App() {
    return (
        <ThemeProvider theme={light}>
            <RoomList />
            <MessageList />
        </ThemeProvider>
    )
}
