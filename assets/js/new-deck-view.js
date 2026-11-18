import { fetchedDecks } from "./decks.js";
import { addDeck } from "./api.js";

const deckViewSection = document.querySelector("#deck-view");
const decksSection = document.querySelector("#home");
const carouselSection = document.querySelector("#carousel");
const aboutSection = document.querySelector("#about");
const newDeckSection = document.querySelector("#new-deck-view");
const newDeckBtn = document.querySelector("#home .gallery__new-card-btn");
const form = document.querySelector(".new-deck-view__form");
const submitBtn = document.querySelector(".new-deck-view__submit-btn");
const textarea = document.querySelector(".new-deck-view__json-input");
const errorModal = document.querySelector("#error-modal");
const errorCloseBtn = errorModal.querySelector(".modal__close-btn");
const errorMessageEl = errorModal.querySelector(".modal__error");

newDeckBtn.addEventListener("click", () => {
  window.location.hash = "new-deck-view";
});

errorCloseBtn.addEventListener("click", () => {
  errorModal.classList.remove("modal_visible");
});

function renderNewDeckView() {
  decksSection.style.display = "none";
  deckViewSection.style.display = "none";
  newDeckSection.style.display = "flex";
  carouselSection.style.display = "none";
  aboutSection.style.display = "none";
}

function disableSubmitBtn() {
  submitBtn.disabled = false;
}

const HEX_DIGITS = /^[0-9a-fA-F]{6}$/;

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

function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return null;
  }
}

function validateName(name) {
  if (typeof name !== "string" || name.length < 2 || name.length > 80) {
    return null;
  }

  return name;
}

function showError(message) {
  errorMessageEl.textContent = message;
  errorModal.classList.add("modal_visible");
}

function handleDeckSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  // Parse the submitted JSON.
  const jsonData = parseJSON(data.deckJson);

  // Validate JSON syntax.
  if (jsonData === null) {
    showError("JSON parsing failed. Please check your JSON syntax.");
    return;
  }

  // Validate the deck name.
  if (validateName(jsonData.name) === null) {
    showError("The deck name must be a string between 2 and 80 characters.");
    return;
  }

  // Validate the cards array.
  if (!Array.isArray(jsonData.cards)) {
    showError("The cards field is required and must contain an array.");
    return;
  }

  // Normalize the selected color.
  const color = normalizeColor(data.color);

  // Check for a color mismatch.
  if (
    typeof jsonData.color === "string" &&
    jsonData.color.toLowerCase() !== color
  ) {
    showError(
      `The JSON color (${jsonData.color}) does not match the selected deck color (${color}).`,
    );
    return;
  }

  // Create the deck only after all validation succeeds.
  addDeck({
    name: jsonData.name,
    color: color,
    cards: jsonData.cards,
  })
    .then((newDeck) => {
      fetchedDecks.push(newDeck);

      window.location.hash = "deck/" + newDeck._id;
    })
    .catch(showError);
}

form.addEventListener("submit", handleDeckSubmit);

export { renderNewDeckView, disableSubmitBtn, showError };
