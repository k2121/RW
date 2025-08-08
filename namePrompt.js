let userName = null; // Ta zmienna musi być dostępna globalnie

function promptForName() {
  if (userName === null || userName.trim() === "") {
    userName = prompt("Jak się mam do ciebie zwracać?", "Krzysiu");
    if (!userName || userName.trim() === "") {
      userName = "Krzysiu";
    }
  }
}
