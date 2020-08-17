import React, { Component } from 'react'
import '../user.css';

import { getUser } from '../API'
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
 
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
                <Grid container className="main-container">
                    

                    <Grid item xs={4}>
                        
                    </Grid>
                    <Grid item xs={4} id="top-middle">
                        <Avatar alt="profile_img" src={this.state.profile_img_url} className="automargin" />
                        <List className="automargin">
                            <ListItem>Username: {this.state.username}</ListItem>
                            <ListItem>Broadcaster Type: {this.state.broadcaster_type}</ListItem>
                            <ListItem>Description: {this.state.description}</ListItem>
                            <ListItem>View Count: {this.state.view_count}</ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={4}>
                        
                    </Grid>


                    


                </Grid>
            </div>
        )
    }
}
