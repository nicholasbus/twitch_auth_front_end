import React, { Component } from 'react'
import { getUser } from '../API'
 
export default class User extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
            username: null,
            email: null,
            profile_img_url: null,
            offline_img_url: null,
            twitch_id: null,
            broadcaster_type: null,
            description: null,
            view_count: null
        }
    }

    componentDidMount(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);


        console.log(urlParams.get('twitch_id')); // id to get data from the backend DB

        getUser(urlParams.get('twitch_id'))
        .then(user => {
            this.setState({
                username: user.username,
                email: user.email,
                profile_img_url: user.profile_img_url,
                offline_img_url: user.offline_img_url,
                twitch_id: user.twitch_id,
                broadcaster_type: user.broadcaster_type,
                description: user.description,
                view_count: user.view_count
            })
            
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {this.state.username}
            </div>
        )
    }
}
