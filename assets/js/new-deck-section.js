const deckViewSection = document.querySelector("#deck-view");
const decksSection = document.querySelector("#home");
const carouselSection = document.querySelector("#carousel");
const notFoundSection = document.querySelector("#not-found");
const newDeckSection = document.querySelector("#new-deck-view");
const newDeckBtn = document.querySelector("#home .gallery__new-card-btn");

newDeckBtn.addEventListener("click", () => {
  window.location.hash = "new-deck-section";
});

function renderNewDeckView() {
  decksSection.style.display = "none";
  deckViewSection.style.display = "none";
  newDeckSection.style.display = "flex";
  carouselSection.style.display = "none";
  notFoundSection.style.display = "none";
}

export { renderNewDeckView };
