import express from "express";
import bodyParser from "body-parser";
import { dbConfig } from "./dbConfig.js";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client(dbConfig);

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  const emailCheck = db.query("SELECT * FROM user_credentials WHERE email_address = $1;", [email]);

  try{
    if((emailCheck.rows).length > 0){
      res.send("A user with that email already exists. Try again with a different email address");
    }else{
      await db.query("INSERT INTO user_credentials (email_address, password) VALUES ($1, $2);", [email, password]);
      res.render("secrets.ejs");
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  const loginCheck = await db.query("SELECT * FROM user_credentials WHERE email_address = $1;", [email]);
  console.log(loginCheck.rows);
  try{
    if(loginCheck.rows.length > 0){
      if(loginCheck.rows[0].password == password){
        res.render("secrets.ejs");
      } else {
        res.send("The password you entered is incorrect, try again");
      }
    }else{
      res.send("The email address you entered does not exist.");
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
