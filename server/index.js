import express from "express";
import cors from "cors";
import records from "./routes/records.js";

//support db integration
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records); //imported routes called here

// app.get("/api", (req, res) => {
//     res.json({ message: "Connection to api working" });
//   });

//start server
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});