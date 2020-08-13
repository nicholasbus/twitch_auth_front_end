import axios from 'axios'
const API_URL = 'http://localhost:5000/api/auth/';


export const authUser = () => {
    window.open(API_URL + 'twitch');
    window.close();
} 

export const getFollowing = async (twitchId) => {
    const res = await axios({
        method: 'get', 
        url: `https://api.twitch.tv/helix/users/follows?from_id=${twitchId}`,
        headers: {
            'Client-ID': `${process.env.TWITCH_CLIENT_ID}`
        }

    })
    
    return res.json();

}