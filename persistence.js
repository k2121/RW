// persistence.js
// Handles saving and loading game state to/from safeStorage

const STORAGE_KEY = 'satori_game_state';

/**
 * Saves the current state of the game to safeStorage.
 * Scans for all relevant selects and textareas dynamically.
 */
function saveGameState() {
    const state = {
        selects: {},
        textareas: {},
        visibility: {},
        counts: {
            myCards: 0,
            theirCards: 0
        }
    };

    // Save all selects with an ID
    document.querySelectorAll('select[id]').forEach(el => {
        state.selects[el.id] = el.value;
    });

    // Save all textareas with an ID
    document.querySelectorAll('textarea[id]').forEach(el => {
        state.textareas[el.id] = el.value;
        state.visibility[el.id] = el.style.display;
    });

    // Save all inputs with an ID (checkboxes, radios, text)
    document.querySelectorAll('input[id]').forEach(el => {
        if (el.type === 'checkbox' || el.type === 'radio') {
            state.selects[el.id] = el.checked;
        } else {
            state.selects[el.id] = el.value;
        }
    });

    // Count dynamic cards to help with reconstruction
    state.counts.myCards = document.querySelectorAll('#textareas-container .textarea-box').length;
    state.counts.theirCards = document.querySelectorAll('#grupowo-textareas-container .textarea-box').length;

    // Save dice result
    const diceResult = document.getElementById('diceResult');
    if (diceResult) state.textareas['diceResult_text'] = diceResult.innerText;

    safeStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    console.log('Game state saved');
}

/**
 * Loads the game state from safeStorage and restores it to the UI.
 */
function loadGameState() {
    const savedState = safeStorage.getItem(STORAGE_KEY);
    if (!savedState) return;

    try {
        const state = JSON.parse(savedState);

        // 1. Recreate or prune dynamic cards
        if (state.counts) {
            // My Cards
            const currentMyCards = document.querySelectorAll('#textareas-container .textarea-box').length;
            if (state.counts.myCards > currentMyCards) {
                if (typeof window.addMyCard === 'function') {
                    for (let i = currentMyCards; i < state.counts.myCards; i++) {
                        window.addMyCard();
                    }
                }
            } else if (state.counts.myCards < currentMyCards) {
                if (typeof window.removeMyCard === 'function') {
                    for (let i = currentMyCards; i > state.counts.myCards; i--) {
                        window.removeMyCard(true);
                    }
                }
            }

            // Their Cards
            const currentTheirCards = document.querySelectorAll('#grupowo-textareas-container .textarea-box').length;
            if (state.counts.theirCards > currentTheirCards) {
                if (typeof window.addTheirCard === 'function') {
                    for (let i = currentTheirCards; i < state.counts.theirCards; i++) {
                        window.addTheirCard();
                    }
                }
            } else if (state.counts.theirCards < currentTheirCards) {
                if (typeof window.removeTheirCard === 'function') {
                    for (let i = currentTheirCards; i > state.counts.theirCards; i--) {
                        window.removeTheirCard(true);
                    }
                }
            }
        }

        // 2. Restore Textareas and Visibility
        for (const id in state.textareas) {
            if (id === 'diceResult_text') {
                const diceResult = document.getElementById('diceResult');
                if (diceResult) diceResult.innerText = state.textareas[id];
                continue;
            }

            const el = document.getElementById(id);
            if (el && el.tagName === 'SELECT' && id === 'dobre_prz') {
                el.value = state.textareas[id];
                if (window.jQuery && jQuery(el).data('select2')) {
                    jQuery(el).trigger('change.select2');
                }
            } else if (el && el.tagName === 'TEXTAREA') {
                el.value = state.textareas[id];
                
                // Restore visibility
                if (state.visibility[id]) {
                    el.style.display = state.visibility[id];
                    // Update button icon in the label
                    const label = document.querySelector(`label[for="${id}"]`);
                    if (label) {
                        const btn = Array.from(label.querySelectorAll('button')).find(b => b.textContent === '👁️' || b.textContent === '🫣');
                        if (btn) {
                            btn.innerText = (el.style.display === 'none') ? '👁️' : '🫣';
                        }
                    }
                }

                // Trigger background color update
                if (typeof window.updateBackgroundColor === 'function') {
                    window.updateBackgroundColor(el);
                }
                
                // Trigger auto-resize
                if (typeof window.autoResizeTextarea === 'function') {
                    window.autoResizeTextarea(el);
                }
            }
        }

        // 3. Restore Selects and Inputs (with a small delay to ensure options are populated)
        setTimeout(() => {
            for (const id in state.selects) {
                const el = document.getElementById(id);
                if (el) {
                    if (el.tagName === 'SELECT') {
                        el.value = state.selects[id];
                        // Trigger select2 update if it's a select2 element
                        if (window.jQuery && jQuery(el).data('select2')) {
                            jQuery(el).trigger('change.select2');
                        }
                    } else if (el.tagName === 'INPUT') {
                        if (el.type === 'checkbox' || el.type === 'radio') {
                            el.checked = state.selects[id];
                        } else {
                            el.value = state.selects[id];
                        }
                    }
                }
            }
            console.log('Inputs and selects restored');
        }, 200);

        console.log('Game state loaded');
    } catch (e) {
        console.error('Error loading game state:', e);
    }
}

/**
 * Resets the game state by clearing safeStorage and resetting UI elements.
 */
function resetGameState() {
    if (!confirm('Czy na pewno chcesz zresetować grę i wyczyścić wszystkie pola?')) return;

    safeStorage.removeItem(STORAGE_KEY);

    // Reset all selects
    document.querySelectorAll('select').forEach(el => {
        el.value = '';
        if (window.jQuery && jQuery(el).data('select2')) {
            jQuery(el).trigger('change.select2');
        }
    });

    // Reset all textareas
    document.querySelectorAll('textarea').forEach(el => {
        el.value = '';
        if (typeof window.updateBackgroundColor === 'function') {
            window.updateBackgroundColor(el);
        }
        if (typeof window.autoResizeTextarea === 'function') {
            window.autoResizeTextarea(el);
        }
    });

    // Reset all inputs
    document.querySelectorAll('input').forEach(el => {
        if (el.type === 'checkbox' || el.type === 'radio') {
            el.checked = false;
        } else {
            el.value = '';
        }
    });

    // Clear dice result
    const diceResult = document.getElementById('diceResult');
    if (diceResult) diceResult.innerText = '';

    alert('Gra została zresetowana.');
    saveGameState(); // Save the cleared state
}

/**
 * Initializes the persistence module.
 */
function initPersistence() {
    loadGameState();

    // Listen for changes on all inputs, selects and textareas using event delegation
    document.addEventListener('input', (e) => {
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') {
            saveGameState();
        }
    });

    document.addEventListener('change', (e) => {
        if (e.target.tagName === 'SELECT' || e.target.tagName === 'INPUT') {
            saveGameState();
        }
    });

    // Save when any button is clicked (to catch "Losuj", "Ukryj" etc.)
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            // Delay slightly to allow the original click handler to update the DOM
            setTimeout(saveGameState, 200);
        }
    });

    // Special case for dice result as it's updated via innerText
    const diceResult = document.getElementById('diceResult');
    if (diceResult) {
        const observer = new MutationObserver(saveGameState);
        observer.observe(diceResult, { childList: true, characterData: true, subtree: true });
    }
}

// Wait for dynamic content to be generated before loading state
// Increase timeout slightly to ensure all scripts have run
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(initPersistence, 1000));
} else {
    setTimeout(initPersistence, 1000);
}

window.saveGameState = saveGameState;
window.loadGameState = loadGameState;
window.resetGameState = resetGameState;
