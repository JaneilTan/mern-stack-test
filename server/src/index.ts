import express, { Request, Response } from "express";
import mongoose from 'mongoose';

import Deck from "./models/Deck";

const PORT = 3000;

const app = express();


app.get("/", (req: Request, res: Response) => {
    res.send("hello");
});

app.get("/hello", (req: Request, res: Response) => {
    res.send("hello world");
});

mongoose.connect(
    'mongodb+srv://test:test@cluster0.sj7sboc.mongodb.net/?retryWrites=true&w=majority'
    ).then(() => {
        console.log(`listening on port ${PORT}`);
        app.listen(PORT);
    });



