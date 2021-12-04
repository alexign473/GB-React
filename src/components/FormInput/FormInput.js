import { Box, TextField, Button } from '@mui/material';

export default function FormInput({ onFormSubmit, label, titleInput, onTitleInputChange, primary }) {
    return (
        <Box component="form"
            onSubmit={onFormSubmit}
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
                value={titleInput}
                onChange={onTitleInputChange}
            />
            <Button type="submit" variant="outlined" size="small" sx={{ height: '28px' }}>{primary}</Button>
        </Box>
    )
}
