import mongoose from 'mongoose';

// The Schema object is used to define the structure and data types for documents in MongoDB
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// defines a new Mongoose schema for a "Deck"
const DeckSchema = new Schema({
  title: String,
});

// Assigns the result of calling mongoose.model()
const DeckModel = mongoose.model('Deck', DeckSchema);

export default DeckModel;