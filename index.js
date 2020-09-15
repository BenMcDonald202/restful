const express = require("express");
const app = express();
const tools = require("./lib/convert");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const hostname = "127.0.0.1";
const port = 3000;

app.get("/", (req, res) => {
  res.send("Developer Candidate Take Home Test");
});

app.get("/convert", async (req, res) => {
  let result;
  try {
    result = tools.encode(await tools.decode(req.body.csv));
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
  res.send(result);
});

app.listen(port, () => {
  console.log(`Serving running at http://${hostname}:${port}/`);
});

