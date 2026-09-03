import { hexToString, removeColorClasses } from "./colors.js";

const deckViewSection = document.querySelector("#deck-view");
const decksSection = document.querySelector("#home");
const carouselSection = document.querySelector("#carousel");
const notFoundSection = document.querySelector("#not-found");

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
    cardEl.remove();
  });

  return clone;
}

function renderDeckView(deck) {
  decksSection.style.display = "none";
  deckViewSection.style.display = "block";
  carouselSection.style.display = "none";
  notFoundSection.style.display = "none";

  const titleEl = deckViewSection.querySelector(".gallery__title");
  const cardList = deckViewSection.querySelector(".gallery__list");

  titleEl.textContent = deck.name;
  cardList.innerHTML = "";
  deck.cards.forEach((card) => cardList.prepend(createCardEl(card, deck)));
}

export { renderDeckView };
