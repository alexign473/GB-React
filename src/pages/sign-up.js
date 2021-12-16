import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import LoginInput from '../components/LoginInput/LoginInput'

export const SignUpPage = () => {
    const auth = getAuth();

    const [input, setInput] = useState({ email: "", password: "" })
    const onInputChange = (e) => {
        const field = e.target.getAttribute("data-name");
        setInput({
            ...input,
            [field]: e.target.value,
        });
    }

    const handleSignUp = async () => {
        if (!input.email || !input.password) {
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, input.email, input.password)
            const user = userCredential.user;
            console.log("Registered user: ", user);
            setInput({ email: "", password: "" })
        }
        catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error ocured: ", errorCode, errorMessage);
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        handleSignUp()
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <LoginInput onSubmit={onFormSubmit}
                value={input}
                onChange={onInputChange}
                primary="Sign Up" />
        </div>
    );
};