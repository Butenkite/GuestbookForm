import express from "express";

let data = [];

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post("/confirmation", (req, res) => {
  data.push(req.body);
  res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.get("/admin", (req, res) => {
  res.send(data);
  console.log(data);
});

app.post("/home", (req, res) => {
  data.push(req.body);
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
