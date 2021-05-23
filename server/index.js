const express = require('express');
const cors = require('cors');
const monk = require('monk');


const app = express();
const db = monk('localhost/chirrup');
const tweets = db.get('tweets');

app.use(cors());
app.use(express.json());


app.get('/', (request, response) => {
    response.json({
        message: "connected to server"
    });
});

app.get('/tweets', (request, response) => {
    tweets
        .find()
        .then(tweets => {
            response.json(tweets)
        });
})

app.post ('/tweets', (request, response) => {
    console.log(request.body);
    const tweet = {
        name: "John doe",
        tweetBody: request.body.tweet,
        date: new Date()
    };

    tweets
        .insert(tweet)
        .then(createdTweet => {
            tweets
            .find()
            .then(retrievedTweets => {
                response.json(retrievedTweets)
            })
            console.log("response sent");
            
        });
});

app.listen(8000, () => {
    console.log('Listening on http://localhost:8000');
});