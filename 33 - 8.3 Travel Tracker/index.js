import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { dbConfig } from "./dbConfig.js";

const app = express();
const port = 3000;

const db = new pg.Client(dbConfig);

db.connect();

let allVisitedCountries = [];

db.query("SELECT * FROM visited_countries", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    allVisitedCountries = res.rows;
  }
  db.end();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  res.render("index.ejs", { 
    countries: allVisitedCountries.map(c => c.country_code),
    total: allVisitedCountries.length,
  });

  console.log(allVisitedCountries);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
