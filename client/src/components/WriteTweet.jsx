import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import userPNG from './user.png';

import './WriteTweet.css';
const serverURL = "http://localhost:8000/tweets"; 

export default class WriteTweet extends Component { 
 
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
                        <Form inline className = "tweetForm" onSubmit = {this.props.submissionHanlder}>
                            <textarea 
                                className="tweetForm" 
                                placeholder = "What's on your mind?"
                                onChange={this.props.changeHandler}
                            />


                            <div className = "SubmitButtonContainer">
                                <button type = 'submit' class = "btn btn-dark">tweet</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}