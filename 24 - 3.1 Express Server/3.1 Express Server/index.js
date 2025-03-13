import express from "express"; //imports the express object from the express module that we just installed
const app = express(); //create an app using the express object


//actions the server should take when it receives the client request
//the client request in this case is triggered through the address "localhost:3000"
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// app.listen(3000, () => {
//     console.log("Server running on port 3000.")
// });

//variable method for port number:
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});