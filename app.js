const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());


app.get('/', (req,res) => {
    res.send();
})

const endpoints = [
    '/',
    '/about',
    '/invitedSpeakers',
    '/programme',
    '/deadlinesFees',
    '/commitees',
    '/registration',
    '/venueTravel'
]

endpoints.forEach(endpoint => {
    app.post(endpoint, (req,res) => {
        if(endpoint != '/') {
            let file = req.body.fileName;
            res.sendFile(path.join(__dirname, `views/${file}`));
        } else {
            res.sendFile(path.join(__dirname, `views/home.html`));
        }
    })
})

app.listen(3000);