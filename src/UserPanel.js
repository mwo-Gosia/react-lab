import {useState} from "react";

export default function UserPanel({email, onLogout}) {

return (
    <div>
        <h1>Witaj {email}</h1>
        <a onClick={() => onLogout()}>Wyloguj</a>
    </div>
)
}