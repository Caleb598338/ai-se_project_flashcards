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

/**
 * Shows the new-deck form and hides the other views.
 *
 * @returns {void} No value; updates the page in place.
 */
function renderNewDeckView() {
  decksSection.style.display = "none";
  deckViewSection.style.display = "none";
  newDeckSection.style.display = "flex";
  carouselSection.style.display = "none";
  aboutSection.style.display = "none";
}

/**
 * Enables the new-deck submit button by clearing its disabled state.
 *
 * @returns {void} No value; updates the button in place.
 */
function disableSubmitBtn() {
  submitBtn.disabled = false;
}

const HEX_DIGITS = /^[0-9a-fA-F]{6}$/;

/**
 * Normalizes a six-digit hex color to lowercase with a leading `#`.
 *
 * @param {string} [color] - Hex digits with or without a leading `#`.
 * @returns {string} The normalized color, or `#64d583` if omitted or invalid.
 */
function normalizeColor(color) {
  if (!color) return "#64d583";
  const hex = color.startsWith("#") ? color.slice(1) : color;
  if (!HEX_DIGITS.test(hex)) return "#64d583";
  return "#" + hex.toLowerCase();
}

/**
 * Parses JSON text without propagating parsing errors.
 *
 * @param {string} jsonString - The text to parse.
 * @returns {object|string|number|boolean|null} The parsed value, including
 * arrays and `null`, or `null` if parsing fails.
 */
function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return null;
  }
}

/**
 * Checks whether a deck name is a string between 2 and 80 characters long.
 *
 * @param {unknown} name - The candidate name from the submitted data.
 * @returns {string|null} The unchanged name if valid, otherwise `null`.
 */
function validateName(name) {
  if (typeof name !== "string" || name.length < 2 || name.length > 80) {
    return null;
  }

  return name;
}

/**
 * Displays a message in the error modal and opens it.
 *
 * @param {string|Error} message - The message or error to display as text.
 * @returns {void} No value; updates the modal in place.
 */
function showError(message) {
  errorMessageEl.textContent = message;
  errorModal.classList.add("modal_visible");
}

/**
 * Prevents native form submission, validates the deck data, and saves it via
 * the API. On success, adds the saved deck to the in-memory list and opens it;
 * validation or request failures are displayed in the error modal.
 *
 * @param {SubmitEvent} e - The submit event from the new-deck form.
 * @returns {void} No value; the asynchronous save is handled internally.
 */
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
