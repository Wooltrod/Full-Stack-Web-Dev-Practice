import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { escapeXML } from "ejs";
import bodyParser from "body-parser";//importing the body-parser module
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

var today = new Date();
var message;
if (today.getDay() === 1 || today.getDay() === 2 || today.getDay() === 3 || today.getDay() === 4 || today.getDay() === 5 ){
    message = "It's a weekday, it's time to work hard!";
}else{
    message = "It's the weekend, it's time to have fun";
}

app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs", { messageDisplay: message });
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });