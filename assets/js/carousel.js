import { hexToString, removeColorClasses } from "./colors.js";

let currentIndex = 0;
let showingQuestion = true;

const homeSection = document.querySelector("#home");
const carouselSection = document.querySelector("#carousel");
const notFoundSection = document.querySelector("#not-found");

function getCarouselTitleString(deck, currentIndex) {
  return `${deck.name} · ${currentIndex + 1}/${deck.cards.length}`;
}

function updateDisplay(deck) {
  const cardTextEl = document.querySelector(".carousel__card-text");
  const cardEl = document.querySelector(".carousel__card");
  const currentCard = deck.cards[currentIndex];

  if (showingQuestion) {
    cardTextEl.textContent = currentCard.question;
    cardEl.classList.remove("carousel__card_color_white");
  } else {
    cardTextEl.textContent = currentCard.answer;
    cardEl.classList.add("carousel__card_color_white");
  }
}

function renderCarouselView(deck) {
  homeSection.style.display = "none";
  carouselSection.style.display = "block";
  notFoundSection.style.display = "none";

  const pageMainContent = document.querySelector(".page__main-content");
  const titleEl = carouselSection.querySelector(".carousel__title");
  const cardEl = carouselSection.querySelector(".carousel__card");
  const leftBtn = carouselSection.querySelector(".carousel__btn_type_left");
  const rightBtn = carouselSection.querySelector(".carousel__btn_type_right");
  const flipBtn = carouselSection.querySelector(".carousel__btn_type_flip");

  pageMainContent.classList.add("page__main-content_location_carousel");

  currentIndex = 0;
  showingQuestion = true;
  titleEl.textContent = getCarouselTitleString(deck, currentIndex);

  removeColorClasses(cardEl);
  const colorName = hexToString(deck.color);
  cardEl.classList.add(`carousel__card_color_${colorName}`);

  updateDisplay(deck);

  leftBtn.classList.toggle("carousel__btn_disabled", currentIndex === 0);
  rightBtn.classList.toggle(
    "carousel__btn_disabled",
    currentIndex === deck.cards.length - 1,
  );

  leftBtn.onclick = () => {
    if (currentIndex > 0) {
      currentIndex--;
      showingQuestion = true;
      updateDisplay(deck);
      titleEl.textContent = getCarouselTitleString(deck, currentIndex);
      leftBtn.classList.toggle("carousel__btn_disabled", currentIndex === 0);
      rightBtn.classList.toggle("carousel__btn_disabled", false);
    }
  };

  rightBtn.onclick = () => {
    if (currentIndex < deck.cards.length - 1) {
      currentIndex++;
      showingQuestion = true;
      updateDisplay(deck);
      titleEl.textContent = getCarouselTitleString(deck, currentIndex);
      leftBtn.classList.toggle("carousel__btn_disabled", false);
      rightBtn.classList.toggle(
        "carousel__btn_disabled",
        currentIndex === deck.cards.length - 1,
      );
    }
  };

  flipBtn.onclick = () => {
    showingQuestion = !showingQuestion;
    updateDisplay(deck);
  };
}

export { renderCarouselView };
