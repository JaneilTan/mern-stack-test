export async function getDecks() {
    const response = await fetch("http://localhost:3000/decks");
    return response.json();
}