import { decks } from "./decks.js";

const deckViewSection = document.querySelector("#deck-view");
const decksSection = document.querySelector("#home");
const carouselSection = document.querySelector("#carousel");
const notFoundSection = document.querySelector("#not-found");
const newDeckSection = document.querySelector("#new-deck-view");
const newDeckBtn = document.querySelector("#home .gallery__new-card-btn");
const form = document.querySelector(".new-deck-view__form");
const submitBtn = document.querySelector(".new-deck-view__submit-btn");
const textarea = document.querySelector(".new-deck-view__json-input");

newDeckBtn.addEventListener("click", () => {
  window.location.hash = "new-deck-view";
});

function renderNewDeckView() {
  decksSection.style.display = "none";
  deckViewSection.style.display = "none";
  newDeckSection.style.display = "flex";
  carouselSection.style.display = "none";
  notFoundSection.style.display = "none";
}

function disableSubmitBtn() {
  submitBtn.disabled = false;
}

const HEX_DIGITS = /^[0-9a-fA-F]{6}$/;

/**
 * Converts a string to a URL-safe slug: lowercase with any run of
 * non-alphanumeric characters replaced by a single hyphen, and no leading or
 * trailing hyphens.
 *
 * @param {string} str
 * @returns {string}
 */
function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Returns a consistent lowercase hex color string with a leading "#".
 * Accepts values with or without a leading "#". Returns "#64d583" as a
 * fallback if the value is missing or not a valid 6-digit hex.
 *
 * @param {string|undefined} color
 * @returns {string}
 */
function normalizeColor(color) {
  if (!color) return "#64d583";
  const hex = color.startsWith("#") ? color.slice(1) : color;
  if (!HEX_DIGITS.test(hex)) return "#64d583";
  return "#" + hex.toLowerCase();
}

function handleDeckSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  const jsonData = JSON.parse(data.deckJson);
  const color = normalizeColor(data.color);
  const id = `${slugify(jsonData.name)}-${Date.now()}`;

  const newDeck = {
    id: id,
    color: color,
    name: jsonData.name,
    cards: jsonData.cards,
  };

  decks.push(newDeck);

  window.location.hash = "deck/" + id;
}

form.addEventListener("submit", handleDeckSubmit);

export { renderNewDeckView, disableSubmitBtn };
