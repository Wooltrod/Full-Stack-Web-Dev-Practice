import express from "express";
import morgan from "morgan";//importing the Morgan logging module

const app = express();
const port = 3000;
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello");
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
