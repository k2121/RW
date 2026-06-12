//#### 8. `js/main.js`
//Główny plik, który inicjalizuje wszystko i zawiera podstawowe listenery DOM.


// js/main.js

// Przyjmujemy, że wszystkie funkcje z innych plików są dostępne globalnie (zostaną dołączone przez script tags)
// W bardziej złożonych projektach, tutaj użylibyśmy ES Modules (import/export).

document.addEventListener('DOMContentLoaded', () => {
    // Inicjalizacja formularzy
    initPolaPlanszyDropdown();
    initPolaZdarzenieDropdown();
    initPolaKontekstDropdown();
    populateKarmaDropdown();

    // Inicjalizacja dynamicznych pól tekstowych (notes/cards) – „Moja karta”
    const container = document.getElementById('textareas-container');
    const numberOfTextareas = 6;   // <--- zmienione na 6
    for (let i = 1; i <= numberOfTextareas; i++) {
        const textareaId = `textarea${i.toString().padStart(2, '0')}`;
        const textareaHTML = generateTextarea(textareaId);
        const div = document.createElement('div');
        div.className = 'textarea-box';
        div.innerHTML = textareaHTML;
        container.appendChild(div);
    }

    // Obsługa inputów – kolorowanie przy wpisywaniu
    // Zapewnienie, że updateBackgroundColor jest globalnie dostępna
    const textareas = container.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        textarea.addEventListener('input', () => {
            if (typeof window.updateBackgroundColor === 'function') {
                window.updateBackgroundColor(textarea);
            }
        });
    });

    // ------------------------------
    // Przyciski do dodawania/usuwania „Moja karta”
    // ------------------------------
    const addRemoveDiv = document.createElement('div');
    addRemoveDiv.style.marginTop = '10px';
    addRemoveDiv.style.textAlign = 'center';
    addRemoveDiv.innerHTML = `
        <button type="button" id="addMyCardBtn" style="margin-right:10px; padding:4px 12px;">➕ Dodaj moją kartę</button>
        <button type="button" id="removeMyCardBtn" style="padding:4px 12px;">➖ Usuń moją kartę</button>
    `;
    container.parentNode.insertBefore(addRemoveDiv, container.nextSibling);

    function getNextMyCardId() {
        const boxes = document.querySelectorAll('#textareas-container .textarea-box');
        let max = 0;
        boxes.forEach(box => {
            const ta = box.querySelector('textarea');
            if (ta && ta.id.startsWith('textarea')) {
                const num = parseInt(ta.id.slice(8), 10);
                if (!isNaN(num) && num > max) max = num;
            }
        });
        return max + 1;
    }

    function addMyCard() {
        const nextId = getNextMyCardId();
        if (nextId > 999) { alert('Osiągnięto limit 999 kart'); return; }
        const id = `textarea${nextId.toString().padStart(2, '0')}`;
        const html = generateTextarea(id);
        const div = document.createElement('div');
        div.className = 'textarea-box';
        div.innerHTML = html;
        document.getElementById('textareas-container').appendChild(div);

        const newTextarea = div.querySelector('textarea');
        newTextarea.addEventListener('input', () => {
            if (typeof window.updateBackgroundColor === 'function')
                window.updateBackgroundColor(newTextarea);
        });
        if (typeof window.autoResizeTextarea === 'function')
            setTimeout(() => window.autoResizeTextarea(newTextarea), 10);
    }

    function removeMyCard() {
        const container = document.getElementById('textareas-container');
        const boxes = container.querySelectorAll('.textarea-box');
        if (boxes.length <= 1) {
            alert('Nie można usunąć ostatniej karty.');
            return;
        }
        boxes[boxes.length - 1].remove();
    }

    document.getElementById('addMyCardBtn').onclick = addMyCard;
    document.getElementById('removeMyCardBtn').onclick = removeMyCard;

    // Inicjalizacja listy problemów z akordeonem i wyszukiwaniem
    generateProblemList();

    // Dodatkowo: nasłuchiwacz zdarzeń dla promptForName na DOMContentLoaded
    // (przeniesiony z poprzedniego script tagu)
    if (typeof promptForName === 'function') {
      promptForName();
    }
});

// Możesz tutaj również dodać globalne event listenery,
// np. dla przycisków w HTMLu, jeśli są.
// Pamiętaj, że funkcje wywoływane bezpośrednio z 'onclick' (w HTMLu) muszą być globalne.
// Funkcje takie jak randomizeData(), rollDice(), readDescription(), poleXX(),
// toggleVisibility(), clearTextarea(), pasteFromClipboard(), copyToClipboard(),
// expandAll(), collapseAll(), clearSearch(), openBasketInNewWindow()
// powinny być dostępne globalnie, jak to było w oryginalnym skrypcie.
// W przypadku użycia modułów ES6 (type="module" w script tagu), konieczne byłoby
// eksportowanie tych funkcji i przypisanie ich do obiektu `window` lub do event listenerów
// zamiast `onclick`.
