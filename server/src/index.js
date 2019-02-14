import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();

  // Logic to initialize
  // Load data to the store

  res.send(renderer(req, store));
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Listening on port 3000")
);
