const express = require("express");
const app = express();

app.get("/", (req, res) => {});

app.listen(3000, () => console.log("Lisening on port 3000"));
