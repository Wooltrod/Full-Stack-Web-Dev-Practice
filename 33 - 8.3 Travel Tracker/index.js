import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { dbConfig } from "./dbConfig.js";

const app = express();
const port = 3000;

const db = new pg.Client(dbConfig);

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisited() {
  const result = await db.query("SELECT * FROM visited_countries");

  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  //Write your code here.
  const allVisitedCountries = await checkVisited();
  res.render("index.ejs", { 
    countries: allVisitedCountries,
    total: allVisitedCountries.length,
  });
});

app.post("/add", async (req, res) => {
  const formattedUserInput = (req.body.country.trim())
    .slice(0,1)
    .toUpperCase() + (req.body.country.trim()) //concatentation
    .slice(1,(req.body.country.trim()).length)
    .toLowerCase();
  console.log(formattedUserInput);

  try {
    let matchingRecord = (await db.query("SELECT * FROM countries WHERE country_name LIKE '%' || $1 || '%' ", 
      [formattedUserInput])).rows;
    console.log(matchingRecord);
    console.log(matchingRecord[0].country_code);

    try {
      await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", 
        [matchingRecord[0].country_code]);
    } catch (err) {
      console.log(err);
      const countries = await checkVisited();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country has already been added, try again.",
      });
    }

    res.redirect("/");
  } catch (err) {
    console.log(err);
    const countries = await checkVisited();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country name does not exist, try again.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
