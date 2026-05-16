import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
    }

    let validationMessage;
    if (email.length < 5) {
        validationMessage = <div>Ale masz krótki adres!</div>;
    } else if (email.length < 15) {
        validationMessage = <div>Twój adres e-mail jest w sam raz.</div>;
    } else {
        validationMessage = <div>Twój adres e-mail jest stanowczo za długi.</div>;
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {/*<h2>Twój e-mail to {email}</h2>*/}
            {/*<p>Twój e-mail wielkimi literami to {email.toUpperCase()}</p>*/}
            {/*{email.length >0 && <div>{validationMessage}</div>}*/}
            {/*<input type="text" value={email} onChange={handleChange}/>*/}
            {/*<button type="button" onClick={() => alert(email)}>*/}
            {/*    Wyświetl mój e-mail w alercie*/}
            {/*</button>*/}
            { ! isLoggedIn && <div>
                <p>Zaloguj się e-mailem <input type="text" onChange={(event) => setEmail(event.target.value)}/>
                    <button onClick={() => setIsLoggedIn(true)}>Zaloguj się</button></p>
            </div>}
            { isLoggedIn && <div>
                <h1>Witaj {email}</h1>
                <a onClick={() => setIsLoggedIn(false)}>Wyloguj</a>
            </div>}
        </div>
    );
}

export default App;