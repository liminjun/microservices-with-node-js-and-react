const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
    const { type, data } = req.body;
    
    if (type === 'CommentCreated') {
        const status = data.content.includes('orange') ? 'rejected' : 'approved';
    
        await axios.post('http://localhost:4000/events', {
        type: 'CommentModerated',
        data: {
            ...data,
            status,
        },
        });
    }
    
    res.send({ status: 'OK'});
    }
);
app.listen(4005, () => {
    console.log('Listening on 4005');
});