const { request } = require('express');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.json({
        message: "connected to server"
    });
});

app.post ('/mews', (request, response) => {
    console.log(request.body);
});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
});