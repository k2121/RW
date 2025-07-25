//#### 2. `js/namePrompt.js`
//Zarządzanie nazwą użytkownika. Zmienna `userName` musi być dostępna globalnie.

// js/namePrompt.js

let userName = null; // Ta zmienna musi być dostępna globalnie

function promptForName() {
  if (userName === null || userName.trim() === "") {
    userName = prompt("Jak się mam do ciebie zwracać?");
    if (!userName || userName.trim() === "") {
      userName = null;
    }
  }
}
