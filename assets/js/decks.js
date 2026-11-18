const fetchedDecks = [];

/**
 * Retrieves a deck object by its ID from the fetchedDecks array.
 *
 * @param {string} deckId - The unique identifier of the deck to retrieve
 * @returns {object|undefined} The deck object if found, undefined otherwise
 */
function getDeckByID(deckId) {
  return fetchedDecks.find((deck) => deck._id === deckId);
}

export { fetchedDecks, getDeckByID };
