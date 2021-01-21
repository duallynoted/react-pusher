const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const pusher = new Pusher({
    appId: '1139572',
    key: 'bed53111627effd33580',
    secret: '650ef0294b6595c08a56',
    cluster: 'us2',
    encrypted: true
});
app.set('PORT', process.env.PORT || 8080);

app.post('/message', (req, res) => {
    const payload = req.body;
    pusher.trigger('chat', 'message', payload);
    res.send(payload)
});

app.listen(app.get('PORT'), () =>
    console.log('Listening at ' + app.get('PORT')))