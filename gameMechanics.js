//#### 5. `js/gameMechanics.js`
//Funkcje związane z losowaniem danych i obsługą kostki. Zależne od `sampleData`.

// js/gameMechanics.js

// Przyjmujemy, że sampleData jest dostępny globalnie z data.js

function getRandomItem(arr) {
  if (arr === undefined || arr === null) {
    console.warn("Input 'arr' is undefined or null for getRandomItem. Returning null.");
    return null;
  }
  if (!Array.isArray(arr) || arr.length === 0) {
    console.warn("Array is not an array or is empty for getRandomItem. Input was:", arr, "Returning null.");
    return null;
  }
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomizeData() {
  const fields = ['wyobraz_sobie', 'przekonanie', 'blokady_energii', 'nowa_opowiesc', 'projekcje'];
  
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el && sampleData[id]) {
      if (typeof window.saveBackup === 'function') window.saveBackup(id);
      el.value = getRandomItem(sampleData[id]);
      el.dispatchEvent(new Event('input')); // Trigger saveGameState
      if (typeof window.updateBackgroundColor === 'function') window.updateBackgroundColor(el);
    }
  });
}

function rollDice() {
  const diceResult = Math.floor(Math.random() * 6) + 1;
  const diceResultElement = document.getElementById('diceResult');
  if (diceResultElement) { // Dodano sprawdzanie istnienia elementu
    diceResultElement.innerText = "Rzut kostką 🎲 = " + diceResult;
  }
}

function initPolaPlanszyDropdown() {
  const select = document.getElementById('pola_planszy');
  if (select && sampleData.pola_planszy) { // Dodano sprawdzanie
    sampleData.pola_planszy.forEach(option => {
      const opt = document.createElement('option');
      opt.value = option.value;
      opt.textContent = option.label;
      select.appendChild(opt);
    });
  }
}

function initPolaZdarzenieDropdown() {
  const select = document.getElementById('pola_zdarzenie');
  if (select && sampleData.pola_zdarzenie) { // Dodano sprawdzanie
    sampleData.pola_zdarzenie.forEach(option => {
      const opt = document.createElement('option');
      opt.value = option.value;
      opt.textContent = option.label;
      select.appendChild(opt);
    });
  }
}

function initPolaKontekstDropdown() {
  const select = document.getElementById('pola_kontekst');
  if (select && sampleData.pola_kontekst) { // Dodano sprawdzanie
    sampleData.pola_kontekst.forEach(option => {
      const opt = document.createElement('option');
      opt.value = option.value;
      opt.textContent = option.label;
      select.appendChild(opt);
    });
  }
}


function populateKarmaDropdown() {
    const karmaSelect = document.getElementById('karma');
    // Wyczyść istniejące opcje, z wyjątkiem pierwszej "Wybierz kartę karmy..."
    karmaSelect.innerHTML = '<option value="">Wybierz kartę karmy...</option>';
    sampleData.karma.forEach(item => {
        const option = document.createElement('option');
        option.value = item.value;
        option.textContent = item.label;
        karmaSelect.appendChild(option);
    });
}
