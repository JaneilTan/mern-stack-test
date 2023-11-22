import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { getDecks, TDeck } from './api/getDecks';
// import { deleteDeck } from './api/deleteDeck';
// import { createDeck } from './api/createDeck';
import { createCard } from './api/createCard';
import "./App.css";




export default function Deck() {
  const [cards, setCards] = useState<string[]>([]);
  const [text, setText] = useState("");
  const { deckId } = useParams();

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    const { cards: serverCards }= await createCard(deckId!, text);
    setCards(serverCards)
    setText("");
  }

//   async function handleDeleteDeck(deckId: string) {
//     await deleteDeck(deckId)
//     setDecks(decks.filter((deck) => deck._id !== deckId));
//   }

//   useEffect(() => {
//     async function fetchDecks() {
//       const newDecks = await getDecks();
//       setDecks(newDecks);
//     }
//     fetchDecks();
//   }, []);
  return (
    <div className='App'>
      <ul className="decks">
        {cards.map((card) => (
          <li key={card}>
            {/* <button onClick={() => handleDeleteDeck(deck._id)}>X</button> */}
            {card}
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="card-text">Card Text</label>
        <input 
          id="card-text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
        <button>Create Card</button>
      </form>
    </div>
  );
}



