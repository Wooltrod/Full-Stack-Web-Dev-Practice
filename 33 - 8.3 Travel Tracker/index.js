import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { dbConfig } from "./dbConfig.js";

const app = express();
const port = 3000;

const db = new pg.Client(dbConfig);

db.connect();

let allVisitedCountries = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  try{
    await db.query("SELECT * FROM visited_countries", (err, res) => {
      if (err) {
        console.error("Error executing query", err.stack);
      } else {
        allVisitedCountries = res.rows;
      }
    });
  } catch (err) {
    console.error(err);
  }

  res.render("index.ejs", { 
    countries: allVisitedCountries.map(c => c.country_code),
    total: allVisitedCountries.length,
  });
});

app.post("/add", async (req, res) => {
  const formattedUserInput = (req.body.country.trim()).slice(0,1).toUpperCase() + (req.body.country.trim()).slice(1,(req.body.country.trim()).length).toLowerCase();
  console.log(formattedUserInput);
  let matchingRecord = (await db.query("SELECT * FROM countries WHERE country_name = $1", [formattedUserInput])).rows;
  console.log(matchingRecord);
  console.log(matchingRecord[0].country_code);
  db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [matchingRecord[0].country_code]);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
