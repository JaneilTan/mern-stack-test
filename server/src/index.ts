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

app.get('/decks', async (req: Request, res: Response) =>{
    const decks = await Deck.find();
    res.json(decks);
});

app.post("/decks", async (req: Request, res: Response) => {
    const newDeck = new Deck({
        title: req.body.title,
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
});

app.delete("/decks/:deckId", async (req: Request, res: Response) => {
    // TODO:
    // 1. get the deck id from the url

    // 2. delete the deck from mongo

    // 3. return the deleted deck to the user who made the request
})

mongoose.connect(process.env.MONGO_URL!).then(() => {
        console.log(`listening on port ${PORT}`);
        app.listen(PORT);
    });



