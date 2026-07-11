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
  const polaSelect = document.getElementById('pola_planszy');
  const reverseCheckbox = document.getElementById('reverseMove');
  
  if (!polaSelect || !diceResultElement) return;

  let currentPosVal = polaSelect.value;
  
  // If no field is selected, just roll the dice without moving
  if (!currentPosVal || currentPosVal === "") {
    const diceWords = ["", "jeden", "dwa", "trzy", "cztery", "pięć", "sześć"];
    diceResultElement.innerText = `🎲 = ${diceResult} (${diceWords[diceResult]})`;
    return;
  }

  let currentPos = parseInt(currentPosVal) || 0;
  const currentFieldData = sampleData.pola_planszy.find(p => parseInt(p.value) === currentPos);
  const currentLabel = currentFieldData ? currentFieldData.label : currentPos;

  let isReversing = reverseCheckbox ? reverseCheckbox.checked : false;
  let moveSteps = diceResult;
  let nextPos = currentPos;

  // Check if player has any "Przekonanie" or "Blokada" cards in fields textarea01-39
  function hasRemainingCards() {
    // Select only the dynamic card fields
    const textareas = Array.from(document.querySelectorAll('textarea[id^="textarea"]'));
    const regexPrzekonanie = /przekonanie:/i;
    const regexBlokada = /\([1-7]\)/;
    
    return textareas.some(ta => {
      const val = ta.value.trim();
      return val !== "" && (regexPrzekonanie.test(val) || regexBlokada.test(val));
    });
  }

  const stops = [16, 31, 46];
  const hasCards = hasRemainingCards();

  for (let i = 0; i < moveSteps; i++) {
    if (!isReversing) {
      nextPos++;
      if (nextPos >= 61) {
        if (hasCards) {
          // Bounce back if cards remain
          nextPos = 60; 
          isReversing = true;
          if (reverseCheckbox) reverseCheckbox.checked = true;
          alert("Musisz się cofać.");
        } else {
          // Stop at 61 if no cards
          nextPos = 61;
          break;
        }
      }
    } else {
      nextPos--;
    }

    // Stop at specific fields
    if (stops.includes(nextPos)) {
      break;
    }
  }

  // Reverse auto-reset logic
  if (isReversing && nextPos <= 31) {
    if (reverseCheckbox) reverseCheckbox.checked = false;
  }

  // Find the label for the next position to display it
  const nextFieldData = sampleData.pola_planszy.find(p => parseInt(p.value) === nextPos);
  const nextLabel = nextFieldData ? nextFieldData.label : nextPos;

  // Log the roll result BEFORE triggering selection change
  if (window.SatoriLogger) {
    const actionName = isReversing ? "Rzut kostką do tyłu" : "Rzut kostką do przodu";
    const rollLog = `(${currentLabel}) -> 🎲 = ${diceResult} (=${nextLabel})`;
    window.SatoriLogger.log(actionName, rollLog);
    // Copy to clipboard
    navigator.clipboard.writeText(rollLog).catch(e => {});
  }

  // Update dropdown and trigger change (format with leading zero if needed)
  const nextPosStr = nextPos.toString().padStart(2, '0');
  $(polaSelect).val(nextPosStr).trigger('change');

  diceResultElement.innerText = `(${currentLabel}) -> 🎲 = ${diceResult} (${nextLabel})`;
}

function moveMinus16() {
  const diceResultElement = document.getElementById('diceResult');
  const polaSelect = document.getElementById('pola_planszy');

  if (!polaSelect || !diceResultElement) return;

  let currentPosVal = polaSelect.value;
  let currentPos = parseInt(currentPosVal) || 0;
  const currentFieldData = sampleData.pola_planszy.find(p => parseInt(p.value) === currentPos);
  const currentLabel = currentFieldData ? currentFieldData.label : currentPos;

  let nextPos = currentPos - 16;
  if (nextPos < 0) nextPos = 0;

  // Find the label for the next position
  const nextFieldData = sampleData.pola_planszy.find(p => parseInt(p.value) === nextPos);
  const nextLabel = nextFieldData ? nextFieldData.label : nextPos;

  // Log BEFORE triggering change
  if (window.SatoriLogger) {
    const rollLog = `(${currentLabel}) -> ⏪ = -16 (=${nextLabel})`;
    window.SatoriLogger.log("Wynik kostki (-16)", rollLog);
    // Copy to clipboard
    navigator.clipboard.writeText(rollLog).catch(e => {});
  }

  // Update dropdown and trigger change (format with leading zero if needed)
  const nextPosStr = nextPos.toString().padStart(2, '0');
  $(polaSelect).val(nextPosStr).trigger('change');

  diceResultElement.innerText = `(${currentLabel}) -> ⏪ = -16 (${nextLabel})`;
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

function populateDobrePrzDropdown() {
    const select = document.getElementById('dobre_prz');
    if (select) {
        select.innerHTML = '<option value="">Wybierz dobre przekonanie...</option>';
        const list = (window.sampleData || (typeof sampleData !== 'undefined' ? sampleData : null))?.dobre_prz || [];
        list.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            select.appendChild(option);
        });
    }
}
