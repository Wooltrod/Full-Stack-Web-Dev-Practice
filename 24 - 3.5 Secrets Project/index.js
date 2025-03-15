//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";//importing the body-parser module

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true}));

//password checker function
var passwordVerified = false;
function passwordChecker(req, res, next){
    if (req.body["password"] === "ILoveProgramming"){
        passwordVerified = true;
    }else{
        passwordVerified = false;
    }
    next(); 
}
app.use(passwordChecker);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//note how we use the "/check" endpoint in alignment with the HTML form
app.post("/check", (req, res) => {
  if(passwordVerified === true){
    res.sendFile(__dirname + "/public/secret.html");
  }else{
    //we can also use the res.redirect() method
    res.sendFile(__dirname + "/public/index.html");  
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
