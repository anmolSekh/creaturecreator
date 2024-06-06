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

//get single records
router.get("/:id", async (req, res) => {
    let connection = await db.collection("records");
    let  query = { _id: new ObjectId(req.params.id)};
    let results = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(results).status(200);
});