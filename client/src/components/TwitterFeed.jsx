import React, { Component } from 'react';

import WriteTweet from './WriteTweet';
import Tweet from './Tweet';

import './TwitterFeed.css';

const serverURL = "http://localhost:8000/tweets"; 
 
export default class TwtiterFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tweet: '',
          tweets: [],
          running: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        fetch(serverURL)
        .then(response => response.json())
        .then(retrievedTweets => {
            this.setState({tweets : retrievedTweets})
        })
    }

    
    handleChange(event) {
        this.state.tweet = event.target.value;
    }
    
    handleSubmit(event) {
        console.log('Tweet posted: ' + this.state.tweet);
        event.preventDefault();

        fetch(serverURL, {
            method: 'POST',
            body: JSON.stringify({tweet: this.state.tweet}),
            headers: {
                'content-type' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(retrievedTweets => {
            this.setState({tweets : retrievedTweets})
            retrievedTweets.forEach(tweet => {
                console.log(tweet);
            })
        });
    }
    render () {
        return (
            <>
               <div className = "mainContainer">
                    <div className = "feedContainer">
                        <div className = "feed" id = "feed">
                            <div className = "writeTweetContainer">
                                <WriteTweet 
                                    submissionHanlder = {this.handleSubmit}
                                    changeHandler = {this.handleChange}
                                 />
                            </div>
                            {
                                this.state.tweets.map((tweet) => (
                                    <Tweet
                                        name = {tweet.name}
                                        tweetBody = {tweet.tweetBody}
                                        date = {tweet.date}
                                    />
                                ))   
                            }
                        </div>
                    </div>
               </div>
            </>
        )
    }
}