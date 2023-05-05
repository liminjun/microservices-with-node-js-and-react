const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};
// Quick example of a post object:
// posts = {
//     '123': {
//         id: '123',
//         title: 'post title',
//     },
//     '456': {
//         id: '456',
//         title: 'post title',
//     },
//     '789': {
//         id: '789',
//         title: 'post title',
//     },
// };
app.get('/posts', (req, res) => {
    res.send(posts);
});
app.post('/events', (req, res) => {
    const { type, data } = req.body;
    if (type === 'PostCreated') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] };
    }
    if (type === 'CommentCreated') {
        const { id, content, postId } = data;
        const post = posts[postId];
        post.comments.push({ id, content });
    }
    console.log(posts);
    return send({});
});
app.listen(4002, () => {
    console.log('Listening on 4002');
});