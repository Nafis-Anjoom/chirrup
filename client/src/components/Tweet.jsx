import React, { Component } from 'react';
import userPNG from './user.png';

import './Tweet.css';

export default class Tweet extends Component {
    
    render () {
        return (
            
            <div className = "tweetContainer">
                <div className = "profilePicContainer">
                    <div className = "profilePic">
                        <img 
                        src= {userPNG}
                        width= "50"
                        height= "50"
                        className = "d-inline-block align-top"
                        padding = "5"
                        />
                    </div>
                </div>
                <div className = "tweetBodyContainer">
                    <div className = "profileInfoContainer">
                        <div className = "nameContainer">{this.props.name}</div>
                        <div className = "dateContainer">{this.props.date}</div>
                    </div>

                    <div className = "tweetBody">{this.props.tweetBody}</div>
                    
                    <div className = "tweetActionsContainer">
                                
                    </div>
                </div>    
            </div>
        )

    }
}
