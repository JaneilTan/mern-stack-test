import { config } from "dotenv";
config();

import express, { Request, Response } from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import Deck from "./models/Deck";
import { getDecksController } from "./controllers/getDecksController";
import { createdDeckController } from "./controllers/createDeckController";
import { deleteDeckController } from "./controllers/deleteDeckController";
import { getDeckController } from "./controllers/getDeckController";
import { createCardForDeckController } from "./controllers/createCardForDeckController";

const PORT = 3000;
 
const app = express();

app.use(cors({
    origin: "*",
}));
app.use(express.json());

app.get('/decks', getDecksController);
app.post("/decks", createdDeckController);
app.delete("/decks/:deckId", deleteDeckController);
app.get('/decks', getDeckController);
app.post("/decks/:deckId/cards", createCardForDeckController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
        console.log(`listening on port ${PORT}`);
        app.listen(PORT);
    });



