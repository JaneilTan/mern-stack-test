import { config } from "dotenv";
config();

import express, { Request, Response } from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import Deck from "./models/Deck";

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.post("/decks", async (req: Request, res: Response) => {
    const newDeck = new Deck({
        title: req.body.title,
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
        console.log(`listening on port ${PORT}`);
        app.listen(PORT);
    });



