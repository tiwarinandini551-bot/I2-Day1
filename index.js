const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/ping", (req, res) => {
  res.json({ status: "UID Tech running" });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
