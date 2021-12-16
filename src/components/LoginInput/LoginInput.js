import { Box, TextField, Button } from '@mui/material';

export default function LoginInput({ onSubmit, value, onChange, primary }) {
    return (
        <div>
            <Box component="form"
                onSubmit={onSubmit}
                sx={{
                    '& .MuiTextField-root': { width: '25ch' },
                    '& .MuiButtonBase-root': { width: '10ch' },
                    display: 'flex',
                    flexDirection: 'column'
                }}
                noValidate
                autoComplete="off"
            >
                <TextField sx={{ mb: 1 }}
                    label="Email"
                    value={value.email}
                    inputProps={{
                        "data-name": "email",
                    }}
                    onChange={onChange}
                />
                <TextField sx={{ mb: 1 }}
                    label="Password"
                    value={value.password}
                    inputProps={{
                        "data-name": "password",
                    }}
                    onChange={onChange}
                />
                <Button type="submit" variant="outlined" size="small"
                    sx={{ height: '28px', }}>
                    {primary}
                </Button>
            </Box>
        </div>
    )
}
