import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { TextField, Box, Button } from "@mui/material";
import { useState } from "react";

export const LoginPage = () => {
    const auth = getAuth();
    const [input, setInput] = useState({ email: "", password: "" })
    const onInputChange = (e) => {
        const field = e.target.getAttribute("data-name");
        setInput({
            ...input,
            [field]: e.target.value,
        });
    }
    const createUser = () => {
        if (!input.email || !input.password) {
            return;
        }
        console.log('createUser')
        createUserWithEmailAndPassword(auth, input.email, input.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };

    const onFormSubmit = (e) => {
        e.preventDefault()
        createUser()
    }
    return (
        <div>
            <h1>Login</h1>
            <Box component="form"
                onSubmit={onFormSubmit}
                sx={{
                    '& .MuiTextField-root': { width: '25ch' },
                    '& .MuiButtonBase-root': { width: '15ch' },
                    display: 'flex',
                    flexDirection: 'column'
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    // label={label}
                    placeholder="Email..."
                    variant="standard"
                    value={input.email}
                    inputProps={{
                        "data-name": "email",
                    }}
                    onChange={onInputChange}
                />
                <TextField
                    // label={label}
                    placeholder="Password..."
                    variant="standard"
                    value={input.password}
                    inputProps={{
                        "data-name": "password",
                    }}
                    onChange={onInputChange}
                />
                <Button type="submit" variant="outlined" size="small"
                    sx={{ height: '28px', }}>
                    Sigh up
                </Button>
            </Box>
        </div>
    );
};