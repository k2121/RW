// persistence.js
// Handles saving and loading game state to/from localStorage

const STORAGE_KEY = 'satori_game_state';

function saveGameState() {
    const state = {
        selects: {},
        textareas: {},
        texts: {}
    };

    // Save standard selects
    ['pola_zdarzenie', 'pola_kontekst', 'karma', 'pola_planszy'].forEach(id => {
        const el = document.getElementById(id);
        if (el) state.selects[id] = el.value;
    });

    // Save standard textareas
    ['wyobraz_sobie', 'blokady_energii', 'nowa_opowiesc', 'przekonanie', 'projekcje', 'opis'].forEach(id => {
        const el = document.getElementById(id);
        if (el) state.textareas[id] = el.value;
    });

    // Save dynamic textareas (textarea01 to textarea39)
    for (let i = 1; i <= 39; i++) {
        const id = `textarea${i.toString().padStart(2, '0')}`;
        const el = document.getElementById(id);
        if (el) {
            state.textareas[id] = el.value;
            // Save visibility
            state.texts[id + '_display'] = el.style.display;
        }
    }

    // Save dice result
    const diceResult = document.getElementById('diceResult');
    if (diceResult) state.texts['diceResult'] = diceResult.innerText;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    console.log('Game state saved');
}

function loadGameState() {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (!savedState) return;

    try {
        const state = JSON.parse(savedState);

        // Restore selects
        for (const id in state.selects) {
            const el = document.getElementById(id);
            if (el) {
                el.value = state.selects[id];
                // Trigger select2 update if it's a select2 element
                if (window.jQuery && jQuery(el).data('select2')) {
                    jQuery(el).trigger('change.select2');
                }
            }
        }

        // Restore textareas
        for (const id in state.textareas) {
            const el = document.getElementById(id);
            if (el) {
                el.value = state.textareas[id];
                if (typeof window.updateBackgroundColor === 'function') {
                    window.updateBackgroundColor(el);
                }
                
                // Restore visibility for dynamic textareas
                if (state.texts[id + '_display']) {
                    el.style.display = state.texts[id + '_display'];
                    // Update button text if it exists
                    const label = el.previousElementSibling;
                    if (label && label.tagName === 'LABEL') {
                        const btn = Array.from(label.querySelectorAll('button')).find(b => b.textContent === '👁️' || b.textContent === '🫣');
                        if (btn) {
                            btn.innerText = (el.style.display === 'none') ? '👁️' : '🫣';
                        }
                    }
                }
            }
        }

        // Restore dice result
        if (state.texts['diceResult']) {
            const diceResult = document.getElementById('diceResult');
            if (diceResult) diceResult.innerText = state.texts['diceResult'];
        }

        console.log('Game state loaded');
    } catch (e) {
        console.error('Error loading game state:', e);
    }
}

function resetGameState() {
    if (!confirm('Czy na pewno chcesz zresetować grę i wyczyścić wszystkie pola?')) return;

    localStorage.removeItem(STORAGE_KEY);

    // Clear selects
    ['pola_zdarzenie', 'pola_kontekst', 'karma', 'pola_planszy'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.value = '';
            if (window.jQuery && jQuery(el).data('select2')) {
                jQuery(el).trigger('change.select2');
            }
        }
    });

    // Clear textareas
    const allTextareas = document.querySelectorAll('textarea');
    allTextareas.forEach(el => {
        el.value = '';
        if (typeof window.updateBackgroundColor === 'function') {
            window.updateBackgroundColor(el);
        }
    });

    // Clear dice result
    const diceResult = document.getElementById('diceResult');
    if (diceResult) diceResult.innerText = '';

    alert('Gra została zresetowana.');
    saveGameState(); // Save the cleared state
}

// Initialize persistence
function initPersistence() {
    loadGameState();

    // Listen for changes on all inputs, selects and textareas
    document.addEventListener('input', (e) => {
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') {
            saveGameState();
        }
    });

    document.addEventListener('change', (e) => {
        if (e.target.tagName === 'SELECT') {
            saveGameState();
        }
    });

    // Save when any button is clicked (to catch "Losuj", "Ukryj" etc.)
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            // Delay slightly to allow the original click handler to update the DOM
            setTimeout(saveGameState, 100);
        }
    });

    // Special case for dice result as it's updated via innerText
    const diceResult = document.getElementById('diceResult');
    if (diceResult) {
        const observer = new MutationObserver(saveGameState);
        observer.observe(diceResult, { childList: true, characterData: true, subtree: true });
    }
}

// Wait for dynamic content to be generated
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(initPersistence, 800));
} else {
    setTimeout(initPersistence, 800);
}

window.resetGameState = resetGameState;
