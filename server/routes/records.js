import express from "express";

import db from "../db/connection.js";

import { ObjectId } from "mongodb";

const router = express.Router();

//get list of records
router.get("/", async (req, res) => {
    let connection = await db.collection("records");
    let results = await collection.find({}).toArray();

    res.send(results).status(200);
});

//get single records by id
router.get("/:id", async (req, res) => {
    let connection = await db.collection("records");
    let  query = { _id: new ObjectId(req.params.id)};
    let results = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(results).status(200);
});

//create new record
router.post("/", async (req, res) =>  {
    try {

        let newDocument = {
            name: req.body.name,
            position: req.body.position,
            level: req.body.level,
        };
        let collection = await db.collection("records");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding record");
    }
})

//update record
router.patch("/:id", async (req, res) =>  {
    try {
        const query = { _id: new ObjectId(req.params.id)};
        const updates = {
            $set: {
                name: req.body.name,
                position: req.body.position,
                level: req.body.level,
            },
        };

        let collection = await db.collection("records");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding record");
    }
})

//delete record
router.delete("/:id", async (req, res) =>  {
    try {
        const query = { _id: new ObjectId(req.params.id)};

        let collection = await db.collection("records");
        let result = await collection.deleteOne(query);

        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding record");
    }
})

export default router;