//#### 3. `js/speechSynthesis.js`
//Funkcjonalność syntezatora mowy. Będzie zależeć od globalnego `userName` oraz elementu DOM `opis`.

// js/speechSynthesis.js

function readDescription() {
  if (!('speechSynthesis' in window)) {
    alert('Twoja przeglądarka nie wspiera syntezatora mowy.');
    return;
  }
  
  const synth = window.speechSynthesis;
  
  if (synth.speaking) {
    synth.cancel();
    return;
  }
  
  // promptForName() musi być dostępna globalnie (lub wywołana stąd)
  if (typeof promptForName !== 'undefined') {
    promptForName(); // Wywołujemy, aby upewnić się, że userName jest ustawione
  } else {
    // Awaryjnie, jeśli promptForName nie załadowało się jeszcze
    userName = prompt("Jak się mam do ciebie zwracać?");
    if (!userName || userName.trim() === "") {
      alert("Nie podano imienia. Proces czytania przerwany.");
      userName = null;
      return;
    }
  }
  
  if (userName === null) {
    alert("Nie podano imienia. Proces czytania przerwany.");
    return;
  }

  const opisTextarea = document.getElementById('opis');
  const fullText = opisTextarea.value;
  const triggerPhrase = "Reakcja grupy:";
  
  const phraseIndex = fullText.indexOf(triggerPhrase);

  if (phraseIndex === -1) {
    alert("Nie znaleziono frazy 'Reakcja grupy:'.");
    return;
  }
  
  const startIndex = phraseIndex + triggerPhrase.length;
  let textToRead = fullText.substring(startIndex).trim();
  
  if (textToRead === '') {
    alert("Brak tekstu do przeczytania po frazie kluczowej.");
    return;
  }
  
  textToRead = textToRead.replaceAll('(Imię)', userName);
  
  const utterance = new SpeechSynthesisUtterance(textToRead);
  utterance.lang = 'pl-PL';
  
  synth.speak(utterance);
}
