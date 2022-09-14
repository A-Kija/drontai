import { useState, useEffect } from 'react';
import axios from 'axios';

function Api1() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res);
            setUsers(res.data);
        })
    }, []);

    return (
        <ul>
            {
                users.map(u => <li key={u.id}>{u.name}</li>)
            }
        </ul>
    )
}

export default Api1;