import { decks, getDeckByID } from "./decks.js";
import { hexToString, removeColorClasses } from "./colors.js";
import { renderCarouselView } from "./carousel.js";
import { renderDeckView } from "./deck-view.js";

const decksSection = document.querySelector("#home");
const deckViewSection = document.querySelector("#deck-view");
const carouselSection = document.querySelector("#carousel");
const notFoundSection = document.querySelector("#not-found");
const practiceBtn = document.querySelector(".gallery__practice-button");
let currentDeck = null;

practiceBtn.addEventListener("click", () => {
  if (currentDeck) {
    window.location.hash = `#carousel/${currentDeck.id}`;
  }
});

function createDeckEl(item) {
  const template = document.querySelector("#deck-template");
  const clone = template.content.cloneNode(true);
  const titleEl = clone.querySelector(".card__title");
  titleEl.textContent = item.name;
  const colorName = hexToString(item.color);
  const deckEl = clone.querySelector(".card");
  removeColorClasses(deckEl);
  deckEl.classList.add(`card_color_${colorName}`);
  const countEl = clone.querySelector(".card__count-btn");
  countEl.textContent = `${item.cards.length} cards`;
  countEl.addEventListener("click", () => {
    currentDeck = item;
    window.location.hash = `#deck/${item.id}`;
  });
  const deckLink = clone.querySelector(".card__link");
  deckLink.href = `#carousel/${item.id}`;
  deckLink.setAttribute("aria-label", `Practice ${item.name}`);

  const deleteBtn = clone.querySelector(".card__delete-btn");
  deleteBtn.addEventListener("click", () => {
    deckEl.remove();
  });

  return clone;
}

function renderDeckEl(item) {
  const deckList = document.querySelector(".gallery__list");
  const deckEl = createDeckEl(item);
  deckList.prepend(deckEl);
}

function renderDecksView() {
  decksSection.style.display = "block";
  deckViewSection.style.display = "none";
  carouselSection.style.display = "none";
  notFoundSection.style.display = "none";

  const pageMainContent = document.querySelector(".page__main-content");
  pageMainContent.classList.remove("page__main-content_location_carousel");

  const deckList = document.querySelector(".gallery__list");
  deckList.innerHTML = "";

  decks.forEach(renderDeckEl);
}

function renderNotFoundView() {
  decksSection.style.display = "none";
  deckViewSection.style.display = "none";
  carouselSection.style.display = "none";
  notFoundSection.style.display = "flex";

  const pageMainContent = document.querySelector(".page__main-content");
  pageMainContent.classList.remove("page__main-content_location_carousel");
}

function router() {
  const hash = window.location.hash.slice(1) || "home";
  const [view, deckId] = hash.split("/");

  if (view === "home" || view === "") {
    renderDecksView();
  } else if (view === "deck") {
    const deck = getDeckByID(deckId);
    if (deck) {
      currentDeck = deck;
      renderDeckView(deck);
    } else {
      renderNotFoundView();
    }
  } else if (view === "carousel") {
    const deck = getDeckByID(deckId);
    if (deck) {
      renderCarouselView(deck);
    } else {
      renderNotFoundView();
    }
  } else if (view === "about") {
    renderNotFoundView();
  } else {
    renderNotFoundView();
  }
}

window.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);
