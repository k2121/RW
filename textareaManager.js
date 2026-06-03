//#### 6. `js/textareaManager.js`
//Obsługa dynamicznych pól tekstowych: widoczność, czyszczenie, kopiowanie, wklejanie, kolorowanie.

// js/textareaManager.js

// Backup for undo functionality
const undoBackups = {};

function saveBackup(id) {
  const el = document.getElementById(id);
  if (el) {
    undoBackups[id] = el.value;
  }
}

function undoField(id) {
  const el = document.getElementById(id);
  if (el && undoBackups[id] !== undefined) {
    const current = el.value;
    el.value = undoBackups[id];
    undoBackups[id] = current; // Allow toggling back and forth
    el.dispatchEvent(new Event('input'));
    if (typeof window.updateBackgroundColor === 'function') {
      updateBackgroundColor(el);
    }
  } else {
    alert('Brak danych do przywrócenia dla tego pola.');
  }
}

window.undoField = undoField;
window.saveBackup = saveBackup;

function shiftCardsUp() {
  const numberOfTextareas = 39;
  const cards = [];
  
  // Collect all non-empty cards
  for (let i = 1; i <= numberOfTextareas; i++) {
    const id = `textarea${i.toString().padStart(2, '0')}`;
    const el = document.getElementById(id);
    if (el && el.value.trim() !== '') {
      cards.push(el.value);
    }
  }
  
  if (cards.length === 0) {
    alert('Brak kart do przepisania.');
    return;
  }

  // Clear all cards and reset backgrounds
  for (let i = 1; i <= numberOfTextareas; i++) {
    const id = `textarea${i.toString().padStart(2, '0')}`;
    const el = document.getElementById(id);
    if (el) {
      el.value = '';
      if (typeof window.updateBackgroundColor === 'function') {
        window.updateBackgroundColor(el);
      }
    }
  }
  
  // Fill from the top
  cards.forEach((content, index) => {
    const id = `textarea${(index + 1).toString().padStart(2, '0')}`;
    const el = document.getElementById(id);
    if (el) {
      el.value = content;
      if (typeof window.updateBackgroundColor === 'function') {
        window.updateBackgroundColor(el);
      }
    }
  });
  
  // Trigger save for persistence
  // Use a card that definitely exists to trigger the event
  const triggerEl = document.getElementById('textarea01');
  if (triggerEl) triggerEl.dispatchEvent(new Event('input', { bubbles: true }));

  alert('Karty zostały przepisane w górę.');
}

window.shiftCardsUp = shiftCardsUp;

function generateTextarea(id) {
  return `
    <label for="${id}">Karta ${id.slice(-2)}:
      <button type="button" onclick="toggleVisibility('${id}', this)">🫣</button>
      <button type="button" onclick="saveBackup('${id}'); clearTextarea('${id}')">🗑️</button>
      <button type="button" onclick="saveBackup('${id}'); pasteFromClipboard('${id}')">📋Wklej</button>
      <button type="button" onclick="undoField('${id}')">Cofnij ↩️</button>
      <button type="button" onclick="copyToClipboard('${id}')">Kopiuj</button>
    </label>
    <textarea id="${id}" rows="1" cols="50" readonly></textarea>
  `;
}

function toggleVisibility(textareaId, button) {
  const textarea = document.getElementById(textareaId);
  if (textarea.style.display === 'none') {
    textarea.style.display = 'block';
    button.innerText = '🫣';
  } else {
    textarea.style.display = 'none';
    button.innerText = '👁️';
  }
}

async function clearTextarea(id) {
  const textarea = document.getElementById(id);
  try {
    textarea.value = '';
    textarea.dispatchEvent(new Event('input')); // ← DODAJ TĘ LINIĘ
    updateBackgroundColor(textarea);
  } catch (err) {
    console.error('Błąd podczas kasowania:', err);
  }
}

async function pasteFromClipboard(id) {
  const textarea = document.getElementById(id);
  if (!textarea) return;

  try {
    const text = await navigator.clipboard.readText();
    saveBackup(id);

    textarea.value = text;

    // Wywołujemy zdarzenia dla auto-resize i zapisu
    textarea.dispatchEvent(new Event('input'));

    if (typeof window.updateBackgroundColor === 'function') {
      updateBackgroundColor(textarea);
    }

    // Na PC przeglądarka potrzebuje chwili na przetworzenie nowej zawartości w DOM
    requestAnimationFrame(() => {
        if (typeof window.autoResizeTextarea === 'function') {
            window.autoResizeTextarea(textarea);
        }
    });

    alert('Karta została wklejona.');
  } catch (err) {
    console.error('Błąd podczas wklejania:', err);
    alert('Nie udało się wkleić tekstu. Upewnij się, że przeglądarka ma uprawnienia do schowka.');
  }
}


async function copyToClipboard(id) {
  const textarea = document.getElementById(id);
  try {
    await navigator.clipboard.writeText(textarea.value);
    alert('Karta została skopiowana.');
  } catch (err) {
    console.error('Błąd podczas kopiowania:', err);
  }
}

// Nowa funkcja do kopiowania wybranej opcji z dropdowna z prefiksem
async function copyDropdownValueWithPrefixToClipboard(selectId, prefix) {
  const selectElement = document.getElementById(selectId);
  if (!selectElement) {
    alert('Błąd: Element wyboru nie znaleziony.');
    return;
  }
  
  const selectedText = selectElement.options[selectElement.selectedIndex].textContent;
  
  if (!selectedText || selectedText.trim() === 'Wybierz zdarzenie...' || selectedText.trim() === 'Wybierz kontekst...') {
    alert('Proszę wybrać opcję z listy przed skopiowaniem.');
    return;
  }

  const textToCopy = prefix + selectedText;

  try {
    await navigator.clipboard.writeText(textToCopy);
    alert('Skopiowano do schowka: ' + textToCopy);
  } catch (err) {
    console.error('Błąd podczas kopiowania:', err);
    alert('Nie udało się skopiować do schowka.');
  }
}
// Upewnij się, że nowa funkcja jest globalnie dostępna
window.copyDropdownValueWithPrefixToClipboard = copyDropdownValueWithPrefixToClipboard;


// Funkcja globalna do kolorowania tła, ponieważ jest używana w atrybucie oninput
// Ważne: Warto rozważyć dodanie tej funkcji do obiektu globalnego (np. window.myApp.updateBackgroundColor)
// lub przejście na event listenery w main.js, aby uniknąć kolizji i utrzymać czysty globalny namespace.
window.updateBackgroundColor = function (textarea) {
    const inputText = textarea.value.trim();
    const firstWord = inputText.split(' ')[0].toLowerCase();

    textarea.classList.remove(
      'zdarzenie-background', 'kontekst-background',
      'karma-background', 'wyzwanie-background', 'wyobraz-sobie-background', 'przekonanie-background',
      'blokada-energii-czerwona-background', 'blokada-energii-pomarańczowa-background', 'blokada-energii-żółta-background', 'blokada-energii-zielona-background', 'blokada-energii-błękitna-background', 'blokada-energii-indygo-background', 'blokada-energii-fioletowa-background', 'nowa-background', 'default-background'
    );

    switch (firstWord) {
      case 'zdarzenie:':
        textarea.classList.add('zdarzenie-background');
        break;
      case 'kontekst:':
        textarea.classList.add('kontekst-background');
        break;
      case 'karma:':
        textarea.classList.add('karma-background');
        break;
      case 'wyzwanie:':
        textarea.classList.add('wyzwanie-background');
        break;
      case 'wyobraźsobie:':
        textarea.classList.add('wyobraz-sobie-background');
        break;
      case 'przekonanie:':
        textarea.classList.add('przekonanie-background');
        break;
      case 'czerwona:':
        textarea.classList.add('blokada-energii-czerwona-background');
        break;
      case 'pomarańczowa:':
        textarea.classList.add('blokada-energii-pomarańczowa-background');
        break;
      case 'żółta:':
        textarea.classList.add('blokada-energii-żółta-background');
        break;
      case 'zielona:':
        textarea.classList.add('blokada-energii-zielona-background');
        break;
      case 'błękitna:':
        textarea.classList.add('blokada-energii-błękitna-background');
        break;
      case 'indygo:':
        textarea.classList.add('blokada-energii-indygo-background');
        break;
      case 'fioletowa:':
        textarea.classList.add('blokada-energii-fioletowa-background');
        break;
      case 'nowa':
        textarea.classList.add('nowa-background');
        break;
      default:
        textarea.classList.add('default-background');
    }
};
