import { Paper, Box, Typography, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';


export default function Message(props) {
    const { text, autor } = props.message
    const sent = autor === 'HEMAN'
    const theme = useTheme()
    const darkMode = theme.palette.mode === 'dark'
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: sent ? 'row-reverse' : 'row',
            alignItems: 'flex-end',
            mb: 1,
        }}>
            {!sent ? <Avatar alt="Avatar"
                src="https://source.unsplash.com/random"
                sx={{
                    mr: 1,
                    width: 56,
                    height: 56,
                }} />
                : null}
            <Paper sx={{
                maxWidth: 450,
                px: 1.5,
                py: 1,
                borderRadius: 4,
                wordBreak: 'break-all',
                ":hover": {
                    boxShadow: 6,
                },
                backgroundColor: (sent && darkMode) ? 'secondary.main' : sent ? 'primary.main' : 'background.paper',
                borderBottomLeftRadius: sent ? 16 : 0,
                borderBottomRightRadius: sent ? 0 : 16,
            }}>

                <Typography variant="subtitle2"
                    color="text.primary"
                    gutterBottom
                    component="span"
                    sx={{ color: sent ? 'primary.contrastText' : "text.primary" }}>
                    {autor}:
                </Typography>
                <Typography color="text.primary" sx={{ color: sent ? 'primary.contrastText' : "text.primary" }}>
                    {text}
                </Typography>
            </Paper>
        </Box>
    )
}