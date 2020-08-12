import axios from 'axios'
const API_URL = 'http://localhost:5000/api/auth/';


export const authUser = () => {
    window.open(API_URL + 'twitch');
    window.close();
} 

