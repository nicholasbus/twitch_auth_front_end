import axios from 'axios'
const API_URL = 'http://localhost:5000/api/auth/';


export const authUser = () => {
    // axios.get(API_URL + 'twitch')
    //      .then(response => {
    //          return response.json()
    //      })
    //      .catch(err => {
    //          console.log(err)
    //      })

    window.open(API_URL + 'twitch');
    window.close();
} 

