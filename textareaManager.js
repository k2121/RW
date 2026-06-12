//#### 6. `js/textareaManager.js`
// Obsługa dynamicznych pól tekstowych: widoczność, czyszczenie, kopiowanie, wklejanie, kolorowanie.
// Dodano: auto-resize oraz wskaźnik nadmiaru tekstu (🔻)

// ======================== BACKUP & UNDO ========================
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
    undoBackups[id] = current;
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

// ======================== PRZEPISYWANIE KART (dynamiczne) ========================
function shiftCardsUp() {
    const container = document.getElementById('textareas-container');
    if (!container) return;
    
    const textareas = Array.from(container.querySelectorAll('textarea'));
    if (textareas.length === 0) {
        alert('Brak kart do przepisania.');
        return;
    }
    
    const cards = textareas
        .map(ta => ta.value.trim())
        .filter(content => content !== '');
    
    if (cards.length === 0) {
        alert('Brak kart do przepisania.');
        return;
    }
    
    textareas.forEach(ta => {
        ta.value = '';
        if (typeof window.updateBackgroundColor === 'function')
            window.updateBackgroundColor(ta);
    });
    
    cards.forEach((content, index) => {
        if (textareas[index]) {
            textareas[index].value = content;
            if (typeof window.updateBackgroundColor === 'function')
                window.updateBackgroundColor(textareas[index]);
        }
    });
    
    if (textareas[0]) textareas[0].dispatchEvent(new Event('input', { bubbles: true }));
    alert('Karty zostały przepisane w górę.');
}
window.shiftCardsUp = shiftCardsUp;

// ======================== GENEROWANIE KART DYNAMICZNYCH ========================
function generateTextarea(id) {
  return `
    <label for="${id}">Moja karta ${id.slice(-2)}:
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
    textarea.dispatchEvent(new Event('input'));
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

    if (text.toLowerCase().startsWith('przekonanie:') && !id.startsWith('czyjasTextarea')) {
        textarea.style.display = 'none';
        const label = document.querySelector(`label[for="${id}"]`);
        if (label) {
            const hideBtn = label.querySelector('button[onclick*="toggleVisibility"]');
            if (hideBtn) hideBtn.innerText = '👁️';
        }
    }

    textarea.dispatchEvent(new Event('input'));
    if (typeof window.updateBackgroundColor === 'function') {
      updateBackgroundColor(textarea);
    }

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
window.copyDropdownValueWithPrefixToClipboard = copyDropdownValueWithPrefixToClipboard;

// ======================== KOLOROWANIE TŁA ========================
window.updateBackgroundColor = function (textarea) {
    const inputText = textarea.value.trim();
    const firstWord = inputText.split(' ')[0].toLowerCase();

    textarea.classList.remove(
      'zdarzenie-background', 'kontekst-background',
      'karma-background', 'wyzwanie-background', 'wyobraz-sobie-background', 'przekonanie-background',
      'blokada-energii-czerwona-background', 'blokada-energii-pomarańczowa-background', 'blokada-energii-żółta-background',
      'blokada-energii-zielona-background', 'blokada-energii-błękitna-background', 'blokada-energii-indygo-background',
      'blokada-energii-fioletowa-background', 'nowa-background', 'default-background'
    );

    switch (firstWord) {
      case 'zdarzenie:': textarea.classList.add('zdarzenie-background'); break;
      case 'kontekst:': textarea.classList.add('kontekst-background'); break;
      case 'karma:': textarea.classList.add('karma-background'); break;
      case 'wyzwanie:': textarea.classList.add('wyzwanie-background'); break;
      case 'wyobraźsobie:': textarea.classList.add('wyobraz-sobie-background'); break;
      case 'przekonanie:': textarea.classList.add('przekonanie-background'); break;
      case 'czerwona:': textarea.classList.add('blokada-energii-czerwona-background'); break;
      case 'pomarańczowa:': textarea.classList.add('blokada-energii-pomarańczowa-background'); break;
      case 'żółta:': textarea.classList.add('blokada-energii-żółta-background'); break;
      case 'zielona:': textarea.classList.add('blokada-energii-zielona-background'); break;
      case 'błękitna:': textarea.classList.add('blokada-energii-błękitna-background'); break;
      case 'indygo:': textarea.classList.add('blokada-energii-indygo-background'); break;
      case 'fioletowa:': textarea.classList.add('blokada-energii-fioletowa-background'); break;
      case 'nowa': textarea.classList.add('nowa-background'); break;
      default: textarea.classList.add('default-background');
    }
};

// ======================== AUTO-RESIZE I WSKAŹNIK NADMIARU 🔻 ========================
(function() {
    function autoResize(el) {
        if (!el) return;

        // If element is not in DOM or has no width and it's not explicitly hidden, 
        // it's likely inside a hidden parent. Measurement will be wrong.
        if (el.offsetWidth === 0 && window.getComputedStyle(el).display !== 'none') {
            return; 
        }

        const parent = el.parentElement;
        if (parent && window.getComputedStyle(parent).position === 'static') {
            parent.style.position = 'relative';
        }

        const isHidden = window.getComputedStyle(el).display === 'none';
        let originalStyles = {};

        if (isHidden) {
            originalStyles = {
                display: el.style.display,
                visibility: el.style.visibility,
                position: el.style.position,
                width: el.style.width
            };
            el.style.display = 'block';
            el.style.visibility = 'hidden';
            el.style.position = 'absolute';
            
            // Try to get width from parent or previous sibling to avoid 0-width scrollHeight calculation
            const parentWidth = parent ? parent.clientWidth : 0;
            if (parentWidth > 0) {
                el.style.width = parentWidth + 'px';
            } else {
                // Fallback to a reasonable default if parent is also hidden
                el.style.width = '300px'; 
            }
        }

        el.style.height = 'auto';
        let newHeight = el.scrollHeight;

        // If scrollHeight is 0, the element is truly hidden and cannot be measured
        if (newHeight === 0 && !isHidden) return;

        let minHeight = 15;
        let maxHeight = (el.id && el.id.includes('tabela')) ? 10000 : 103;
        if (newHeight < minHeight) newHeight = minHeight;
        const finalHeight = Math.min(newHeight, maxHeight);

        let indicator = parent ? parent.querySelector('.overflow-indicator') : null;
        if (newHeight > maxHeight) {
            if (!indicator) {
                indicator = document.createElement('span');
                indicator.className = 'overflow-indicator';
                indicator.innerHTML = '🔻';
                parent.appendChild(indicator);
            }
            indicator.style.display = 'block';
        } else {
            if (indicator) indicator.style.display = 'none';
        }

        el.style.height = finalHeight + 'px';
        el.style.overflowY = (newHeight > maxHeight) ? 'auto' : 'hidden';

        if (isHidden) {
            el.style.display = originalStyles.display;
            el.style.visibility = originalStyles.visibility;
            el.style.position = originalStyles.position;
            el.style.width = originalStyles.width;
        }
    }

    function attachResize(el) {
        if (el._autoResizeAttached) return;
        el._autoResizeAttached = true;

        el.addEventListener('input', () => autoResize(el));
        el.addEventListener('paste', () => setTimeout(() => autoResize(el), 10));
        el.addEventListener('change', () => autoResize(el));

        const origDescriptor = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value');
        if (origDescriptor) {
            try {
                Object.defineProperty(el, 'value', {
                    get: function() { return origDescriptor.get.call(this); },
                    set: function(v) {
                        origDescriptor.set.call(this, v);
                        setTimeout(() => autoResize(el), 50);
                    }
                });
            } catch(e) {}
        }

        autoResize(el);
    }

    function resizeAll() {
        document.querySelectorAll('textarea').forEach(autoResize);
    }

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('textarea').forEach(attachResize);

        new MutationObserver(function(mutations) {
            mutations.forEach(function(m) {
                m.addedNodes.forEach(function(node) {
                    if (node.nodeType !== 1) return;
                    if (node.tagName === 'TEXTAREA') attachResize(node);
                    node.querySelectorAll && node.querySelectorAll('textarea').forEach(attachResize);
                });
            });
        }).observe(document.body, { childList: true, subtree: true });

        setTimeout(resizeAll, 300);
        setTimeout(resizeAll, 1000);
    });

    window.autoResizeAll = resizeAll;
    window.autoResizeTextarea = autoResize;
})();
