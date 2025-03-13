import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) =>{
    res.send("Hello, Ian!")
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});