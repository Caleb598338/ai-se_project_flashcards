/**
 * A flashcard stored in a deck.
 *
 * @typedef {object} Flashcard
 * @property {string} _id - The card's identifier.
 * @property {string} question - The text shown on the front.
 * @property {string} answer - The text shown on the back.
 */

/**
 * A deck returned by the flashcard API.
 *
 * @typedef {object} Deck
 * @property {string} _id - The server-assigned deck identifier.
 * @property {string} name - The displayed deck name.
 * @property {string} color - The deck's hex color.
 * @property {Flashcard[]} cards - The cards in the deck.
 */

const fetchedDecks = [];

/**
 * Looks up a deck by `_id` in the in-memory list without making an API request.
 *
 * @param {string|undefined} deckId - The deck ID, or `undefined` if the route supplied none.
 * @returns {Deck|undefined} The first matching deck, or `undefined` if none matches.
 */
function getDeckByID(deckId) {
  return fetchedDecks.find((deck) => deck._id === deckId);
}

export { fetchedDecks, getDeckByID };
