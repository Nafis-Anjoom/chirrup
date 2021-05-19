import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import userPNG from './user.png';

import './WriteTweet.css';
const serverURL = "http://localhost:8000/tweets"; 

function retrieveTweets() {
    fetch(serverURL)
        .then(response => response.json())
        .then(tweets => {
            console.log(tweets);
        });
} 

export default class WriteTweet extends Component { 
    constructor(props) {
        super(props);
        this.state = {
          tweet: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({tweet: event.target.value});
    }
    
    handleSubmit(event) {
    console.log('An essay was submitted: ' + this.state.tweet);
    event.preventDefault();

    retrieveTweets();

    fetch(serverURL, {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
            'content-type' : 'application/json'
        }
    })
    .then(response => response.json())
    .then(createdTweet => {
        console.log(createdTweet);
    })

    }

    render() {
        return (
            <div className = "WriteTweetContainer">
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
                <div className = "formBodyContainer">
                    <div className = "formContainer">
                        <Form inline className = "tweetForm" onSubmit = {this.handleSubmit}>
                            <textarea 
                                className="tweetForm" 
                                placeholder = "What's on your mind?"
                                onChange={this.handleChange}
                                
                                
                            />


                            <div className = "SubmitButtonContainer">
                                <input type = 'submit' class = "btn btn-dark" value = "tweet"/>
                                {/* <button tpye = "button" class = "btn btn-dark">Tweet</button> */}
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}