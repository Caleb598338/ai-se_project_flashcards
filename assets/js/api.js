const baseUrl = "https://se-flashcards-api.en.tripleten-services.com/v1";

const headers = {
  "Content-Type": "application/json",
  Authorization: "01a1ef8b-e70b-710b-9f00-37cf436296f1",
};

function processResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Error: ${res.status}`);
}

function getDecks() {
  return fetch(`${baseUrl}/decks`, {
    headers,
  }).then(processResponse);
}

export { getDecks };