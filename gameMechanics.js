//#### 5. `js/gameMechanics.js`
//Funkcje związane z losowaniem danych i obsługą kostki. Zależne od `sampleData`.

// js/gameMechanics.js

// Przyjmujemy, że sampleData jest dostępny globalnie z data.js

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomizeData() {
  document.getElementById('zdarzenie').value = getRandomItem(sampleData.zdarzenie);
  document.getElementById('kontekst').value = getRandomItem(sampleData.kontekst);
  document.getElementById('karma').value = getRandomItem(sampleData.karma);
  document.getElementById('wyobraz_sobie').value = getRandomItem(sampleData.wyobraz_sobie);
  document.getElementById('przekonanie').value = getRandomItem(sampleData.przekonanie);
  document.getElementById('blokady_energii').value = getRandomItem(sampleData.blokady_energii);
  document.getElementById('nowa_opowiesc').value = getRandomItem(sampleData.nowa_opowiesc);
  document.getElementById('projekcje').value = getRandomItem(sampleData.projekcje);
}

function rollDice() {
  const diceResult = Math.floor(Math.random() * 6) + 1;
  document.getElementById('diceResult').innerText = "Wynik rzutu kostką 🎲 = " + diceResult;
}

function initPolaPlanszyDropdown() {
  const select = document.getElementById('pola_planszy');
  sampleData.pola_planszy.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.textContent = option.label;
    select.appendChild(opt);
  });
}

function initPolaZdarzenieDropdown() {
  const select = document.getElementById('pola_zdarzenie');
  sampleData.pola_zdarzenie.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.textContent = option.label;
    select.appendChild(opt);
  });
}

function initPolaKontekstDropdown() {
  const select = document.getElementById('pola_kontekst');
  sampleData.pola_kontekst.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option.value;
    opt.textContent = option.label;
    select.appendChild(opt);
  });
}
