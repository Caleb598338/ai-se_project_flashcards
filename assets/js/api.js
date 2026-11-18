const baseUrl = "https://se-flashcards-api.en.tripleten-services.com/v1";

const headers = {
  "Content-Type": "application/json",
  Authorization: "01a1ef8b-e70b-710b-9f00-37cf436296f1",
};

/**
 * Parses a successful Fetch response as JSON or rejects with its HTTP status.
 *
 * @param {Response} res - The response from the flashcard API.
 * @returns {Promise<unknown>} A promise that resolves to the parsed body or
 * rejects if the status is unsuccessful or the body cannot be parsed.
 */
function processResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Error: ${res.status}`);
}

/**
 * Fetches all decks from the flashcard API.
 *
 * @returns {Promise<import("./decks.js").Deck[]>} A promise that resolves to the
 * server's deck list or rejects if the request or response parsing fails.
 */
function getDecks() {
  return fetch(`${baseUrl}/decks`, {
    headers,
  }).then(processResponse);
}

/**
 * Deletes a deck from the flashcard API by its server-assigned ID.
 *
 * @param {string} deckId - The deck's `_id`.
 * @returns {Promise<unknown>} A promise that resolves to the parsed deletion
 * response or rejects if the request or response parsing fails.
 */
function deleteDeck(deckId) {
  return fetch(`${baseUrl}/decks/${deckId}`, {
    method: "DELETE",
    headers,
  }).then(processResponse);
}

/**
 * Sends a new deck and its cards to the flashcard API for creation.
 *
 * @param {object} deck - The deck data to send.
 * @param {string} deck.name - The display name for the new deck.
 * @param {string} deck.color - The deck's hex color.
 * @param {Array<{question: string, answer: string}>} deck.cards - The cards to create.
 * @returns {Promise<import("./decks.js").Deck>} A promise that resolves to the
 * saved deck, including its `_id`, or rejects if the request or parsing fails.
 */
function addDeck({ name, color, cards }) {
  return fetch(`${baseUrl}/decks`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      name,
      color,
      cards,
    }),
  }).then(processResponse);
}

export { getDecks, deleteDeck, addDeck };
