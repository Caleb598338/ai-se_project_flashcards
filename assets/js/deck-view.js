import { hexToString, removeColorClasses } from "./colors.js";

const deckViewSection = document.querySelector("#deck-view");
const decksSection = document.querySelector("#home");
const newDeckSection = document.querySelector("#new-deck-view");
const carouselSection = document.querySelector("#carousel");
const aboutSection = document.querySelector("#about");

/**
 * Builds a flashcard for the deck view and wires its flip and local delete controls.
 *
 * @param {import("./decks.js").Flashcard} card - The flashcard to display.
 * @param {import("./decks.js").Deck} deck - The parent deck, used for the card color and in-memory deletion.
 * @returns {DocumentFragment} The populated clone of the card template.
 */
function createCardEl(card, deck) {
  const template = document.querySelector("#card-template");
  const clone = template.content.cloneNode(true);
  const cardEl = clone.querySelector(".card");
  const titleEl = clone.querySelector(".card__title");
  const flipBtn = clone.querySelector(".card__count-btn");
  const deleteBtn = clone.querySelector(".card__delete-btn");
  const colorName = hexToString(deck.color);

  let showingQuestion = true;

  removeColorClasses(cardEl);
  cardEl.classList.add("card_type_flashcard");
  cardEl.classList.add(`card_color_${colorName}`);
  titleEl.textContent = card.question;
  flipBtn.classList.add("card__count-btn_type_flip");

  flipBtn.addEventListener("click", () => {
    showingQuestion = !showingQuestion;
    titleEl.textContent = showingQuestion ? card.question : card.answer;
    cardEl.classList.toggle("card_color_white", !showingQuestion);
  });

  deleteBtn.addEventListener("click", () => {
    const index = deck.cards.findIndex((c) => c._id === card._id);
    if (index !== -1) {
      deck.cards.splice(index, 1);
    }
    cardEl.remove();
  });

  return clone;
}

/**
 * Shows the deck view and rebuilds its card list for the selected deck.
 *
 * @param {import("./decks.js").Deck} deck - The deck whose title and cards are displayed.
 * @returns {void} No value; updates the deck view in place.
 */
function renderDeckView(deck) {
  decksSection.style.display = "none";
  deckViewSection.style.display = "block";
  newDeckSection.style.display = "none";
  carouselSection.style.display = "none";
  aboutSection.style.display = "none";

  const titleEl = deckViewSection.querySelector(".gallery__title");
  const cardList = deckViewSection.querySelector(".gallery__list");

  titleEl.textContent = deck.name;
  cardList.innerHTML = "";
  deck.cards.forEach((card) => cardList.prepend(createCardEl(card, deck)));
}

export { renderDeckView };
