import axios from "axios";

export async function register( {username, email, password}){
    axios.post('https://localhost:3000/api/auth/register', {
        username, email, password
    })


}