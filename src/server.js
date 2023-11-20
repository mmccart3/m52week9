const express = require("express");
const app = express();

app.use("/static", express.static("public"));
app.use("/page2", express.static("public/page2.html"));
app.use("/page3", express.static("public/page3.html"));

console.log("hello");
app.listen(5001, () => {console.log("Listening on Port 5001")});