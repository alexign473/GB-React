import { Paper, Box, Typography, Avatar } from '@mui/material';


export default function Message(props) {
    const { text, autor } = props.message
    const sent = autor === 'HEMAN'
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: sent ? 'row-reverse' : 'row',
            alignItems: 'flex-end',
            mb: 1,
        }}>
            <Avatar alt="Avatar"
                src="https://source.unsplash.com/random"
                sx={{
                    display: sent ? 'none' : 'block',
                    mr: 1,
                    width: 56, height: 56
                }} />
            <Paper sx={{
                maxWidth: 450,
                p: 2,
                borderRadius: 4,
                wordBreak: 'break-all',
                ":hover": {
                    boxShadow: 6,
                },
                backgroundColor: sent ? 'secondary.main' : 'background.paper',
                borderBottomLeftRadius: sent ? 16 : 0,
                borderBottomRightRadius: sent ? 0 : 16,
            }}>

                <Typography variant="subtitle2"
                    color="text.primary"
                    gutterBottom
                    component="span">
                    {autor}:
                </Typography>
                <Typography color="text.primary">
                    {text}
                </Typography>
            </Paper>
        </Box>
    )
}

// export default function Message(props) {
//     const { text, autor } = props.message
//     const messageClass = autor === 'HEMAN' ? styles.sent : styles.received
//     return (
//         <div className={`${styles.msg} ${messageClass}`}>
//             <div className={styles.msg_bubble}>
//                 <span className={styles.msg_autor}>{autor}: </span>
//                 <p>{text}</p></div>
//         </div>
//     )
// }
