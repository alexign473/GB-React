import {
    Link,
} from "react-router-dom";

export const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <Link to="/">Home</Link>
                <br />
                <Link to="/profile">profile</Link>
                <br />
                <Link to="/chat">chat</Link>
            </nav>
        </div>
    );
};