import { decks, getDeckByID } from "./decks.js";
import { stringToHex, hexToString, removeColorClasses } from "./colors.js";
import { renderCarouselView } from "./carousel.js";

const homeSection = document.querySelector("#home");
const carouselSection = document.querySelector("#carousel");
const notFoundSection = document.querySelector("#not-found");

function createDeckEl(item) {
  const template = document.querySelector("#deck-template");
  const clone = template.content.cloneNode(true);
  const titleEl = clone.querySelector(".deck__title");
  titleEl.textContent = item.name;
  const colorName = hexToString(item.color);
  const deckEl = clone.querySelector(".deck");
  removeColorClasses(deckEl);
  deckEl.classList.add(`deck_color_${colorName}`);
  const countEl = clone.querySelector(".deck__count");
  countEl.textContent = `${item.cards.length} cards`;

  const deckLink = clone.querySelector(".deck__link");
  deckLink.href = `#carousel/${item.id}`;

  const deleteBtn = clone.querySelector(".deck__delete-btn");
  deleteBtn.addEventListener("click", () => {
    deckEl.remove();
  });

  return clone;
}

function renderDeckEl(item) {
  const deckList = document.querySelector(".decks__list");
  const deckEl = createDeckEl(item);
  deckList.prepend(deckEl);
}

function renderDecksView() {
  homeSection.style.display = "block";
  carouselSection.style.display = "none";
  notFoundSection.style.display = "none";

  const pageMainContent = document.querySelector(".page__main-content");
  pageMainContent.classList.remove("page__main-content_location_carousel");

  const deckList = document.querySelector(".decks__list");
  deckList.innerHTML = "";

  decks.forEach(renderDeckEl);
}

function renderNotFoundView() {
  homeSection.style.display = "none";
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
