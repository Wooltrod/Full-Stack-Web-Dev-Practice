import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { dbConfig } from "./dbConfig.js";

const app = express();
const port = 3000;

const db = new pg.Client(dbConfig);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

async function checkTaks() {
  const result = await db.query("SELECT * FROM items;");
  let items = [];
  result.rows.forEach((item) => {
    items.push(item);
  });
  return items;
}

app.get("/", (req, res) => {
  const items = checkTaks();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", (req, res) => {
  const item = req.body.newItem;
  //items.push({ title: item });
  db.query("INSERT INTO items (title) VALUES ($1);", [item]);
  res.redirect("/");
});

app.post("/edit", (req, res) => {
  const editedTaskId = req.body.updatedItemId;
  const editedTaskTitle = req.body.updatedItemTitle;
  db.query("UPDATE items SET title = $1 WHERE id = $2;", [editedTaskTitle, editedTaskId]);
});

app.post("/delete", (req, res) => {
  const completedTaskId = req.body.deleteItemId;
  db.query("DELETE * FROM items WHERE id = $1;", [completedTaskId]);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
