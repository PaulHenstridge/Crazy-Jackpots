const express = require('express');
const app = express();

const cors = require("cors");
app.use(cors())
app.use(express.json());


const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/router_routes.js')

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('slot_machine');
        const usersCollection = db.collection('users');
        const usersRouter = createRouter(usersCollection);
        app.use('/api/users', usersRouter)
        const wheelSetsCollection = db.collection('wheelsets');
        const wheelSetsRouter = createRouter(wheelSetsCollection);
        app.use('/api/wheelsets', wheelSetsRouter)

    })
    .catch(console.error);

app.listen(9000, function () {
    console.log(`App running on port ${this.address().port}`);
});




