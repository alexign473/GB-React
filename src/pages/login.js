import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import LoginInput from '../components/LoginInput/LoginInput'

export const LoginPage = () => {
    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);

    const [input, setInput] = useState({ email: "", password: "" })
    const onInputChange = (e) => {
        const field = e.target.getAttribute("data-name");
        setInput({
            ...input,
            [field]: e.target.value,
        });
    }

    const handleLogin = async () => {
        if (!input.email || !input.password) {
            return;
        }
        try {
            const userCredential = await signInWithEmailAndPassword(auth, input.email, input.password)
            const user = userCredential.user
            console.log("Singed in user: ", user)
            setInput({ email: "", password: "" })
        }
        catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("An error occured: ", errorCode, errorMessage);
        }
    }

    // const handleLogin = () => {
    //     if (!input.email || !input.password) {
    //         return;
    //     }
    //     signInWithEmailAndPassword(auth, input.email, input.password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             const user = userCredential.user;
    //             console.log("Singed in user: ", user);
    //             setInput({ email: "", password: "" })
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.log("An error occured: ", errorCode, errorMessage);
    //         });
    // };

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log('logoutUser')
            })
            .catch((error) => {
                console.log("Logout error", error);
            });
    };

    const onFormSubmit = (e) => {
        e.preventDefault()
        handleLogin()
    }

    if (loading) {
        return (
            <div>
                <h3>Initialising User...</h3>
            </div>
        );
    }
    if (user) {
        return (
            <div>
                <h3>Current User: {user.email}</h3>
                <button onClick={handleLogout}>Log out</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginInput onSubmit={onFormSubmit}
                value={input}
                onChange={onInputChange}
                primary="Login" />
        </div>
    );
};