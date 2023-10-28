import express, { Request, Response } from "express";
import mongoose from 'mongoose';

import Deck from "./models/Deck";

const PORT = 3000;

const app = express();

app.use(express.json());

app.post("/decks", async (req: Request, res: Response) => {
    const newDeck = new Deck({
        title: req.body.title,
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
});

mongoose.connect(
    'mongodb+srv://test:test@cluster0.sj7sboc.mongodb.net/?retryWrites=true&w=majority'
    ).then(() => {
        console.log(`listening on port ${PORT}`);
        app.listen(PORT);
    });



