import React, { Component } from 'react';

import WriteTweet from './WriteTweet';
import Tweet from './Tweet';

import './TwitterFeed.css';

const serverURL = "http://localhost:8000/tweets"; 
 
export default class TwtiterFeed extends Component {
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
    console.log('Tweet posted: ' + this.state.tweet);
    event.preventDefault();

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
    render () {
        return (
            <>
               <div className = "mainContainer">
                    <div className = "feedContainer">
                        <div className = "feed">
                            <div className = "writeTweetContainer">
                                <WriteTweet 
                                    submissionHanlder = {this.handleSubmit}
                                    changeHandler = {this.handleChange}
                                 />
                            </div>
                            <Tweet/>
                        </div>
                    </div>
               </div>
            </>
        )
    }
}