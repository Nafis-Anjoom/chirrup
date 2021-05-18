import React, { Component } from 'react';

import WriteTweet from './WriteTweet';

import './TwitterFeed.css';
export default class TwtiterFeed extends Component {
    render () {
        return (
            <>
               <div className = "mainContainer">
                    <div className = "feedContainer">
                        <div className = "feed">
                            <div className = "writeTweetContainer">
                                <WriteTweet/>
                            </div>
                        </div>
                    </div>
               </div>
            </>
        )
    }
}