const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'AngularDB';

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    MongoClient.connect(url, function (err, client) {
        if (err) throw err;

        const db = client.db(dbName);
        const collection = db.collection('register');

        const query = { username: username };

        collection.findOne(query, function (err, user) {
            if (err) throw err;

            if (user) {
                // check if the password matches
                if (user.password === password) {
                    // login successful
                    res.send('Login successful');
                } else {
                    // password incorrect
                    res.send('Password incorrect');
                }
            } else {
                // user not found
                res.send('User not found');
            }

            client.close();
        });
    });
});

// app.listen(3000, () => {
//     console.log('App listening on port 3000');
// });
