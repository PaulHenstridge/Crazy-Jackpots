const express = require('express');
const { ObjectId } = require('mongodb');

const createRouter = (collection) => {
    const router = express.Router()

    router.get('/', (req, res) => {
        collection
            .find()
            .toArray()
            .then(data => res.json(data))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    })

    router.get('/:id', (req, res) => {
        const id = req.params.id
        collection
            .findOne({ _id: new ObjectId(id) })
            .then(data => res.json(data))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    })

    router.post('/', (req, res) => {
        const bodyData = req.body
        collection
            .insertOne(bodyData)
            .then(data => res.json({ _id: data.insertedId }))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    })

    router.put('/:id', (req, res) => {
        const bodyData = req.body
        const id = req.params.id
        collection
            .updateOne(
                { _id: new ObjectId(id) },
                { $set: bodyData }
            )
            .then(data => res.json(data))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    })

    router.delete('/:id', (req, res) => {
        const id = req.params.id
        collection
            .deleteOne({ _id: new ObjectId(id) })
            .then(data => res.json(data))
            .catch((err) => {
                console.error(err);
                res.status(500);
                res.json({ status: 500, error: err });
            });
    })

    return router
}

module.exports = createRouter;