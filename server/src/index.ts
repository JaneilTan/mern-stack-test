import { config } from "dotenv";
config();

import express, { Request, Response } from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import Deck from "./models/Deck";
import { getDecksController } from "./controllers/getDeckController";

const PORT = 3000;
 
const app = express();

app.use(cors());
app.use(express.json());

app.get('/decks', getDecksController);

app.post("/decks", async (req: Request, res: Response) => {
    const newDeck = new Deck({
        title: req.body.title,
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
});

app.delete("/decks/:deckId", async (req: Request, res: Response) => {
    const deckId = req.params.deckId;
    const deck = await Deck.findByIdAndDelete(deckId);
    res.json(deck);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
        console.log(`listening on port ${PORT}`);
        app.listen(PORT);
    });



