import axios from 'axios'
const API_URL = 'http://localhost:5000/api/auth/';


export const authUser = () => {
    window.open(API_URL + 'twitch');
    window.close();
} 

export const getUser = async (twitchId) => {
    const user = await axios({
        method: 'get',
        url: `http://localhost:5000/api/users/${twitchId}`
    });
    
    return user.data;

}