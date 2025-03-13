import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) =>{
    res.send("<h1>Hello, Ian!</h1>");
});
app.get("/contacts", (req, res) =>{
    res.send("<h1>Contact us</h1>");
});
app.get("/about", (req, res) =>{
    res.send("<h1>About our company</h1>");
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});