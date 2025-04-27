const express = require('express');
const supabase = require('./supabaseClient');
const app = express();

app.get('/api/users', async (req, res) => {
    const { data, error } = await supabase
        .from('users') 
        .select('*');

    if (error) {
        return res.status(400).json({ error: error.message });
    }

    res.json(data);
});

module.exports = app;
