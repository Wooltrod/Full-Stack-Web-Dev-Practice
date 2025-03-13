import express from "express"; //imports the express object from the express module that we just installed
const app = express(); //create an app using the express object

app.listen(3000, () => {
    console.log("Server running on port 3000.")
});