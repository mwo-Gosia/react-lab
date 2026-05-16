import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";
import MeetingsPage from "./meetings/MeetingsPage";

function App() {
    const [loggedInUsername, setLoggedInUsername] = useState(null);

    return (
        <div className="container">
            <h1>System do zapisów na zajęcia</h1>
            {
                loggedInUsername
                    ? <UserPanel email={loggedInUsername}
                                 onLogout={() => setLoggedInUsername(null)}/>
                    : <LoginForm onLogin={(email) => setLoggedInUsername(email)}/>
            }
        </div>
    );
}

export default App;