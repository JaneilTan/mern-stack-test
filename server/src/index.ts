import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("hello");
});

app.get("/hello", (req, res) => {
    res.send("hello world");
});

app.listen(3000);

