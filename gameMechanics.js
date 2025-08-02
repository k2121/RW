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
  // Upewnij się, że używasz poprawnych ID elementów HTML (pola_zdarzenie, pola_kontekst)
  // i że odwołujesz się do istniejących pól w sampleData (pola_zdarzenie, pola_kontekst)

  // Sprawdzenie dla 'pola_zdarzenie'
  const randomZdarzenie = getRandomItem(sampleData.pola_zdarzenie);
  if (randomZdarzenie && document.getElementById('pola_zdarzenie')) {
    document.getElementById('pola_zdarzenie').value = randomZdarzenie.value;
  }
  
  // Sprawdzenie dla 'pola_kontekst'
  const randomKontekst = getRandomItem(sampleData.pola_kontekst);
  if (randomKontekst && document.getElementById('pola_kontekst')) {
    document.getElementById('pola_kontekst').value = randomKontekst.value;
  }

  // Upewnij się, że odpowiednie tablice istnieją w sampleData (np. sampleData.karma musi być tablicą)
  // i że elementy HTML (np. 'karma', 'wyobraz_sobie') faktycznie istnieją w index.html

  // Dodano bezpieczne sprawdzanie przed próbą dostępu do elementów i przypisania wartości



    // Losowanie karty Karma
    const karmaSelect = document.getElementById('karma');
    if (karmaSelect && sampleData.karma && sampleData.karma.length > 0) {
        const randomKarmaIndex = Math.floor(Math.random() * sampleData.karma.length);
        karmaSelect.value = sampleData.karma[randomKarmaIndex].value;
    } else {
        console.warn("Brak elementu 'karma' lub danych karmy do losowania.");
    }



  if (document.getElementById('wyobraz_sobie') && sampleData.wyobraz_sobie) {
    document.getElementById('wyobraz_sobie').value = getRandomItem(sampleData.wyobraz_sobie);
  }
  if (document.getElementById('przekonanie') && sampleData.przekonanie) {
    document.getElementById('przekonanie').value = getRandomItem(sampleData.przekonanie);
  }
  if (document.getElementById('blokady_energii') && sampleData.blokady_energii) {
    document.getElementById('blokady_energii').value = getRandomItem(sampleData.blokady_energii);
  }
  if (document.getElementById('nowa_opowiesc') && sampleData.nowa_opowiesc) {
    document.getElementById('nowa_opowiesc').value = getRandomItem(sampleData.nowa_opowiesc);
  }
  if (document.getElementById('projekcje') && sampleData.projekcje) {
    document.getElementById('projekcje').value = getRandomItem(sampleData.projekcje);
  }
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
