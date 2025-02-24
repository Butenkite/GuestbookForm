import express from "express";

let data = [];

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/confirmation", (req, res) => {
  const timestamp = new Date(Date.now());

  const info = {
    fname: req.body.fname,
    lname: req.body.lname,
    job: req.body.job,
    company: req.body.company,
    linkedin: req.body.linkedin,
    email: req.body.email,
    howMeet: req.body.howMeet,
    timestamp: timestamp,
  };
  console.log(data);
  data.push(info);

  res.render("confirm", { info });
});

app.get("/admin", (req, res) => {
  res.render("order-summery", { data });
  console.log(data);
});

app.post("/home", (req, res) => {
  data.push(req.body);
  res.render("home");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
