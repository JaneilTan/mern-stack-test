export async function createdDeck(title: string) {
    const response = await fetch("http://localhost:3000/decks", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-Type": "application/json",
      }, 
    });
    return response.json();
}