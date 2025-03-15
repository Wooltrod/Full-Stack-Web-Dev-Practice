import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";//importing the body-parser module

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//mounting the middleware using the express ".use()" method
/*specifying ".urlencoded({ extended: true})" to create a 
body for URL-encoded requests like our own form submission*/
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

/*write a ".post("/submit")" handler where I console/log() the 
for contents when the user clicks the submit button*/
app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
