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

app.get("/", async (req, res) => {
  const items = await checkTaks();
  console.log(items);
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  //items.push({ title: item });
  db.query("INSERT INTO items (title) VALUES ($1);", [item]);
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const editedTaskId = req.body.updatedItemId;
  const editedTaskTitle = req.body.updatedItemTitle;
  await db.query("UPDATE items SET title = $1 WHERE id = $2;", [editedTaskTitle, editedTaskId]);
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const completedTaskId = req.body.deleteItemId;
  console.log(completedTaskId);
  await db.query("DELETE FROM items WHERE id = $1;", [completedTaskId]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
