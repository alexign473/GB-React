import { Box, TextField, Button } from '@mui/material';

export default function FormInput({ onSubmit, label, value, onChange, primary }) {
    return (
        <Box component="form"
            onSubmit={onSubmit}
            sx={{
                // '& .MuiTextField-root': { width: '25ch' },
                display: 'flex',
                alignItems: 'flex-end'
            }}
            noValidate
            autoComplete="off"
        >
            <TextField label={label}
                id="standard-size-small"
                size="small"
                variant="standard"
                value={value}
                onChange={onChange}
            />
            <Button type="submit" variant="outlined" size="small"
                sx={{ height: '28px', marginLeft: '4px' }}>
                {primary}
            </Button>
        </Box>
    )
}
