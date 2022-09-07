import express from "express";

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("Hello Friday"));
app.listen(port, () => {
  console.log(`My REST API running on ${port}`);
});
