import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient (uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

try {
    //Connect client to server
    await client.connect();
    //send a ping for acknowledging the connection
    await client.db("admin").command({ping: 1});

    console.log(
        "Connected to MongoDB"
    ); 
} catch(err) {
    console.error(err);
}

let db = client.db("creatures");
export default db;