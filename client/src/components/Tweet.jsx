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
                        <div className = "nameContainer">John Doe</div>
                        <div className = "dateContainer">Date: 2021-05-18</div>
                    </div>

                    <div className = "tweetBody">
                    Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit. Morbi pretium maximus
                      est, ac feugiat elit tincidunt vel. Sed eget elit 
                      ac arcu accumsan bibendum quis quis tellus. Mauris
                       vel blandit massa, sit amet cursus enim. Duis 
                       bibendum hendrerit aliquet. Nullam consectetur 
                       tincidunt fermentum. Duis blandit congue diam a
                        tincidunt. Morbi eget diam metus. Etiam dictum
                         elit sed porta accumsan. Mauris non nisi 
                         consequat, faucibus sem eget, luctus nibh.
                          Nunc eu mi venenatis, suscipit mi a, euismod
                           libero. Duis sapien lectus, accumsan lobortis
                            dui vel, lobortis varius ipsum. Nullam eget 
                            augue eget mi rhoncus ultricies. Quisque 
                            viverra sem id tellus sollicitudin rutrum.
                             Aenean nec condimentum ante. Aenean eu ex
                              placerat, pretium dui eu, auctor dolor.
                    </div>
                    
                    <div className = "tweetActionsContainer">
                                
                    </div>
                </div>    
            </div>
        )

    }
}
