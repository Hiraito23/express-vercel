// api/index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello dari Express + Vercel!');
});

module.exports = app;
