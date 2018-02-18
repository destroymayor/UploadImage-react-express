const express = require("express");

const app = express();
const path = require("path");

const routes = require("./server/index");

app.use(express.static(path.join(__dirname, "client/build")));
routes(app);

// 其他頁面導向index
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(process.env.PORT || 5000);
