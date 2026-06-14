/**
 * Satori Game Logger
 * Handles logging of all game actions to localStorage and optionally a local file.
 */

const SatoriLogger = (function() {
    const LOG_KEY = 'satori_game_log_buffer';
    let fileHandle = null;
    let logBuffer = localStorage.getItem(LOG_KEY) || "";

    // Sync with localStorage
    function saveBuffer() {
        localStorage.setItem(LOG_KEY, logBuffer);
    }

    async function log(action, details = "") {
        const now = new Date();
        
        const days = ['Ndz', 'Pon', 'Wt ', 'Śr ', 'Czw', 'Pt ', 'Sob'];
        const dayName = days[now.getDay()];
        
        const pad = (n) => n.toString().padStart(2, '0');
        const padMs = (n) => n.toString().padStart(3, '0');
        
        const timestamp = `${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()} ${dayName}, ` +
                          `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())},${padMs(now.getMilliseconds())}`;
        
        const entry = `[${timestamp}] AKCJA: ${action}${details ? ' | SZCZEGÓŁY: ' + details : ''}\n`;
        
        logBuffer += entry;
        saveBuffer();

        console.log(`[Log] ${action}`, details);

        // Try to write to file if handle exists
        if (fileHandle) {
            try {
                const writable = await fileHandle.createWritable({ keepExistingData: true });
                const file = await fileHandle.getFile();
                await writable.write({ type: 'write', position: file.size, data: entry });
                await writable.close();
            } catch (err) {
                console.error("Błąd zapisu do pliku:", err);
            }
        }
        updateUI();
    }

    async function logSeparator() {
        const separator = "\n\n" + "=".repeat(20) + "\n\n";
        logBuffer += separator;
        saveBuffer();

        if (fileHandle) {
            try {
                const writable = await fileHandle.createWritable({ keepExistingData: true });
                const file = await fileHandle.getFile();
                await writable.write({ type: 'write', position: file.size, data: separator });
                await writable.close();
            } catch (err) {
                console.error("Błąd zapisu separatora:", err);
            }
        }
        updateUI();
    }

    async function connectFile() {
        try {
            fileHandle = await window.showSaveFilePicker({
                suggestedName: 'Satori_Log.txt',
                types: [{
                    description: 'Plik tekstowy logu',
                    accept: { 'text/plain': ['.txt'] },
                }],
            });
            alert("Połączono z plikiem logu: " + fileHandle.name);
            updateUI();
        } catch (err) {
            console.warn("Nie wybrano pliku lub API nieobsługiwane:", err);
        }
    }

    function updateUI() {
        const statusEl = document.getElementById('logger-status');
        if (statusEl) {
            statusEl.innerHTML = fileHandle ? 
                `🟢 Logowanie do: <b>${fileHandle.name}</b>` : 
                `🟡 Logowanie do pamięci (brak pliku)`;
        }
    }

    function initUI() {
        // Remove existing panel if any
        const existing = document.getElementById('logger-panel');
        if (existing) existing.remove();

        const div = document.createElement('div');
        div.id = 'logger-panel';
        div.style = "background: #f0f0f0; border: 1px solid #ccc; padding: 5px; margin-bottom: 10px; font-family: sans-serif; font-size: 12px; display: flex; align-items: center; gap: 10px;";
        div.innerHTML = `
            <b>LOG GRY:</b>
            <span id="logger-status">🟡 Logowanie do pamięci</span>
            <button type="button" onclick="SatoriLogger.connectFile()" style="font-size: 11px;">Połącz z plikiem</button>
            <button type="button" onclick="SatoriLogger.logSeparator()" style="font-size: 11px;">Kolejna gra (separator)</button>
            <button type="button" onclick="SatoriLogger.downloadLog()" style="font-size: 11px;">Pobierz Log</button>
            <button type="button" onclick="SatoriLogger.clearLog()" style="font-size: 11px; color: red;">Wyczyść</button>
        `;
        document.body.prepend(div);
        updateUI();
    }

    function downloadLog() {
        const blob = new Blob([logBuffer], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Satori_Log.txt';
        a.click();
        URL.revokeObjectURL(url);
    }

    function clearLog() {
        if (confirm("Czy na pewno wyczyścić cały log w pamięci?")) {
            logBuffer = "";
            saveBuffer();
            updateUI();
        }
    }

    // --- Interceptors ---

    function wrapFunctions() {
        // 0. Intercept Browser Dialogs (alert, confirm)
        const originalAlert = window.alert;
        window.alert = function(msg) {
            log("Komunikat: ALERT", msg);
            return originalAlert.apply(this, arguments);
        };

        const originalConfirm = window.confirm;
        window.confirm = function(msg) {
            const result = originalConfirm.apply(this, arguments);
            log("Komunikat: POTWIERDZENIE", `${msg} | ODPOWIEDŹ: ${result ? 'TAK' : 'NIE'}`);
            return result;
        };

        // 1. Dice Roll
        const originalRollDice = window.rollDice;
        if (originalRollDice) {
            window.rollDice = function() {
                const result = originalRollDice.apply(this, arguments);
                const diceRes = document.getElementById('diceResult').innerText;
                const isReversing = document.getElementById('reverseMove')?.checked;
                
                const actionName = isReversing ? "Rzut kostką do tyłu" : "Rzut kostką do przodu";
                log(actionName, diceRes);
                
                // Automatyczne kopiowanie wyniku kostki do schowka
                if (diceRes) {
                    navigator.clipboard.writeText(diceRes).catch(e => {});
                }
                
                return result;
            };
        }

        // 2. Randomize Data (Losuj kartę)
        const originalRandomizeData = window.randomizeData;
        if (originalRandomizeData) {
            window.randomizeData = function() {
                log("Kliknięto 'Losuj kartę 📑'");
                return originalRandomizeData.apply(this, arguments);
            };
        }

        // 3. Move -16
        const originalMoveMinus16 = window.moveMinus16;
        if (originalMoveMinus16) {
            window.moveMinus16 = function() {
                const result = originalMoveMinus16.apply(this, arguments);
                const diceRes = document.getElementById('diceResult').innerText;
                log("Wynik kostki (-16)", diceRes);
                
                if (diceRes) {
                    navigator.clipboard.writeText(diceRes).catch(e => {});
                }
                
                return result;
            };
        }

        // 4. Shift Cards Up (Przepisz)
        const originalShiftCardsUp = window.shiftCardsUp;
        if (originalShiftCardsUp) {
            window.shiftCardsUp = function() {
                log("Przepisano karty w górę ⬆️");
                return originalShiftCardsUp.apply(this, arguments);
            };
        }

        // 5. Reset Game
        const originalResetGameState = window.resetGameState;
        if (originalResetGameState) {
            window.resetGameState = function() {
                const confirmed = originalResetGameState.apply(this, arguments);
                log("ZRESETOWANO GRĘ 🔄");
                return confirmed;
            };
        }

        // 6. Clipboard Actions
        const originalCopyToClipboard = window.copyToClipboard;
        if (originalCopyToClipboard) {
            window.copyToClipboard = async function(id) {
                const el = document.getElementById(id);
                const val = el ? el.value : "";
                log("Skopiowano kartę", `ID: ${id} | Treść: ${val}`);
                return originalCopyToClipboard.apply(this, arguments);
            };
        }

        const originalPasteFromClipboard = window.pasteFromClipboard;
        if (originalPasteFromClipboard) {
            window.pasteFromClipboard = async function(id) {
                const result = await originalPasteFromClipboard.apply(this, arguments);
                const el = document.getElementById(id);
                const val = el ? el.value : "";
                log("Wklejono kartę", `ID: ${id} | Treść: ${val}`);
                return result;
            };
        }

        const originalCopyDropdown = window.copyDropdownValueWithPrefixToClipboard;
        if (originalCopyDropdown) {
            window.copyDropdownValueWithPrefixToClipboard = function(id, prefix) {
                const el = document.getElementById(id);
                const selectedText = el ? el.options[el.selectedIndex].textContent : "";
                log("Skopiowano z listy", `${prefix}${selectedText}`);
                return originalCopyDropdown.apply(this, arguments);
            };
        }

        // 7. Clear & Undo
        const originalClearTextarea = window.clearTextarea;
        if (originalClearTextarea) {
            window.clearTextarea = function(id) {
                const el = document.getElementById(id);
                const val = el ? el.value : "";
                log("Usunięto treść karty 🗑️", `ID: ${id} | Była treść: ${val}`);
                return originalClearTextarea.apply(this, arguments);
            };
        }

        const originalUndoField = window.undoField;
        if (originalUndoField) {
            window.undoField = function(id) {
                log("Cofnięto zmiany w polu ↩️", `ID: ${id}`);
                return originalUndoField.apply(this, arguments);
            };
        }

        // 8. Select Changes (Zdarzenie, Kontekst, Plansza, Karma)
        function logSelectChange(el) {
            const label = document.querySelector(`label[for="${el.id}"]`)?.textContent.split(':')[0].trim() || el.id;
            const val = el.options[el.selectedIndex]?.textContent || "";
            if (val && !val.includes("Wybierz")) {
                log(`Wybrano z listy: ${label}`, val);
            }
        }

        document.addEventListener('change', (e) => {
            if (e.target.tagName === 'SELECT') {
                logSelectChange(e.target);
            }
        }, true); // Use capture phase

        // Select2 handling (jQuery events don't always bubble to native document listeners)
        if (window.jQuery) {
            jQuery(document).on('change', 'select', function() {
                // To avoid double logging if native event also fires
                const lastLog = localStorage.getItem('satori_last_select_log');
                const currentVal = this.id + ":" + this.value;
                if (lastLog === currentVal) return;
                localStorage.setItem('satori_last_select_log', currentVal);
                
                logSelectChange(this);
            });
        }

        // 9. Audio Logging (Play, Pause, Seek)
        function formatTime(seconds) {
            const h = Math.floor(seconds / 3600);
            const m = Math.floor((seconds % 3600) / 60);
            const s = Math.floor(seconds % 60);
            return [h, m, s].map(v => v < 10 ? "0" + v : v).filter((v, i) => v !== "00" || i > 0).join(":");
        }

        function setupAudioLogging(audio) {
            if (audio._loggingAttached) return;
            audio._loggingAttached = true;

            audio.addEventListener('play', () => {
                const src = audio.currentSrc.split('/').pop();
                log("Media: START", `${decodeURIComponent(src)} | Czas: ${formatTime(audio.currentTime)}`);
            });

            audio.addEventListener('pause', () => {
                // If ended, it's not a normal pause
                if (audio.ended) return;
                const src = audio.currentSrc.split('/').pop();
                log("Media: PAUZA", `${decodeURIComponent(src)} | Czas: ${formatTime(audio.currentTime)}`);
            });

            audio.addEventListener('seeked', () => {
                const src = audio.currentSrc.split('/').pop();
                log("Media: PRZEWINIĘTO", `${decodeURIComponent(src)} | Nowy czas: ${formatTime(audio.currentTime)}`);
            });

            audio.addEventListener('ended', () => {
                const src = audio.currentSrc.split('/').pop();
                log("Media: KONIEC", decodeURIComponent(src));
            });
        }

        // Watch for all audio elements
        document.querySelectorAll('audio').forEach(setupAudioLogging);
        new MutationObserver((mutations) => {
            mutations.forEach(m => {
                m.addedNodes.forEach(node => {
                    if (node.nodeType !== 1) return;
                    if (node.tagName === 'AUDIO') setupAudioLogging(node);
                    node.querySelectorAll && node.querySelectorAll('audio').forEach(setupAudioLogging);
                });
            });
        }).observe(document.body, { childList: true, subtree: true });

        // 10. UI Toggles (Group Game, Master Game)
        const originalGrupowaToggle = document.getElementById('btn-gra-grupowa')?.onclick;
        if (originalGrupowaToggle) {
            document.getElementById('btn-gra-grupowa').onclick = function() {
                const cont = document.getElementById('grupowo-container');
                const willBeVisible = cont && cont.style.display === 'none';
                log("Widoczność: GRA GRUPOWA", willBeVisible ? "POKAZANO" : "UKRYTO");
                return originalGrupowaToggle.apply(this, arguments);
            };
        }

        // Intercepting card additions/removals
        const originalAddMyCard = window.addMyCard;
        if (originalAddMyCard) {
            window.addMyCard = function() {
                // Determine next ID before adding
                const boxes = document.querySelectorAll('#textareas-container .textarea-box');
                let max = 0;
                boxes.forEach(box => {
                    const ta = box.querySelector('textarea');
                    if (ta && ta.id.startsWith('textarea')) {
                        const num = parseInt(ta.id.slice(8), 10);
                        if (!isNaN(num) && num > max) max = num;
                    }
                });
                const nextId = (max + 1).toString().padStart(2, '0');
                
                const res = originalAddMyCard.apply(this, arguments);
                log("Dodano kartę", `Moja karta ${nextId}`);
                return res;
            };
        }
        const originalRemoveMyCard = window.removeMyCard;
        if (originalRemoveMyCard) {
            window.removeMyCard = function() {
                const boxes = document.querySelectorAll('#textareas-container .textarea-box');
                let label = "nieznana";
                if (boxes.length > 1) {
                    const lastTa = boxes[boxes.length - 1].querySelector('textarea');
                    if (lastTa) label = `Moja karta ${lastTa.id.slice(-2)}`;
                }
                
                const res = originalRemoveMyCard.apply(this, arguments);
                if (boxes.length > 1) {
                    log("Usunięto kartę", label);
                }
                return res;
            };
        }
        const originalAddTheirCard = window.addTheirCard;
        if (originalAddTheirCard) {
            window.addTheirCard = function() {
                // Determine next ID
                const boxes = document.querySelectorAll('#grupowo-textareas-container .textarea-box');
                let max = 0;
                boxes.forEach(box => {
                    const ta = box.querySelector('textarea');
                    if (ta && ta.id.startsWith('czyjasTextarea')) {
                        const num = parseInt(ta.id.slice(14), 10);
                        if (!isNaN(num) && num > max) max = num;
                    }
                });
                const nextId = (max + 1).toString().padStart(2, '0');

                const res = originalAddTheirCard.apply(this, arguments);
                log("Dodano kartę", `Czyjaś karta ${nextId}`);
                return res;
            };
        }
        const originalRemoveTheirCard = window.removeTheirCard;
        if (originalRemoveTheirCard) {
            window.removeTheirCard = function() {
                const boxes = document.querySelectorAll('#grupowo-textareas-container .textarea-box');
                let label = "nieznana";
                if (boxes.length > 1) {
                    const lastTa = boxes[boxes.length - 1].querySelector('textarea');
                    if (lastTa) label = `Czyjaś karta ${lastTa.id.slice(-2)}`;
                }

                const res = originalRemoveTheirCard.apply(this, arguments);
                if (boxes.length > 1) {
                    log("Usunięto kartę", label);
                }
                return res;
            };
        }

        // Intercepting opening sub-windows (chakras, rose, etc.)
        const windowFunctions = ['otworzCzakry', 'otworzZnakiCzakr', 'otworzPlansza', 'otworzEmocje', 'otworzMaska', 'otworzRoza'];
        windowFunctions.forEach(fnName => {
            const originalFn = window[fnName];
            if (originalFn) {
                window[fnName] = function() {
                    const name = fnName.replace('otworz', '');
                    log("Widoczność: OTWARTO OKNO", name);
                    const win = originalFn.apply(this, arguments);
                    if (win) {
                        // Prevent the generic button click logger from firing for this specific action
                        window._satoriWindowOpening = true;
                        setTimeout(() => window._satoriWindowOpening = false, 100);

                        // Attempt to log when the window is closed
                        const timer = setInterval(() => {
                            try {
                                if (!win || win.closed) {
                                    clearInterval(timer);
                                    log("Widoczność: ZAMKNIĘTO OKNO", name);
                                }
                            } catch (e) {
                                // Cross-origin or other errors mean we can't track it anymore
                                clearInterval(timer);
                            }
                        }, 500);
                    }
                    return win;
                };
            }
        });

        const masterToggleBtn = document.getElementById('masterToggleBtn');
        if (masterToggleBtn) {
            masterToggleBtn.addEventListener('click', () => {
                const expandDiv = document.getElementById('expandedMasterContent');
                const isVisible = expandDiv && expandDiv.classList.contains('show');
                // We log the state AFTER the click event processed (which toggles the class)
                // but since we are adding a listener, it might run before or after.
                // Let's use setTimeout to be sure.
                setTimeout(() => {
                    const nowVisible = expandDiv && expandDiv.classList.contains('show');
                    log("Widoczność: MISTRZ GRY", nowVisible ? "POKAZANO" : "UKRYTO");
                }, 10);
            });
        }

        // 11. Generic Button Clicks
        document.addEventListener('mousedown', (e) => {
            const btn = e.target.closest('button');
            if (btn) {
                // Store the label BEFORE any click handlers change it
                btn._preClickLabel = (btn.innerText || btn.title || btn.id || "przycisk bez tekstu").trim();
            }
        }, true);

        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                const btn = e.target.tagName === 'BUTTON' ? e.target : e.target.closest('button');
                
                // Ignore our own logger buttons or if we are currently opening a sub-window
                if (btn.closest('#logger-panel') || window._satoriWindowOpening) return;
                
                // Special handling for Group Game instruction buttons (those on black background)
                const instrBtn = btn.closest('#instr-btns button');
                if (instrBtn) {
                    log("Instrukcja: KLIKNIĘTO POLE", instrBtn.innerText.trim());
                    return;
                }

                // Ignore buttons that are handled specifically (to avoid double logging)
                const handledIds = ['btn-gra-grupowa', 'masterToggleBtn', 'addMyCardBtn', 'removeMyCardBtn', 'addTheirCardBtn', 'removeTheirCardBtn'];
                if (handledIds.includes(btn.id)) return;

                const text = btn._preClickLabel || (btn.innerText || btn.title || btn.id || "przycisk bez tekstu").trim();
                
                // Ignore buttons that trigger windows (already logged by Widoczność: OTWARTO OKNO)
                const windowButtonLabels = ['Czakry 🌈', 'Znaki Czakr 🕉️', 'Plansza💞', 'Emocje 😊', 'Maska 🎭', 'Róża 🌹'];
                if (windowButtonLabels.includes(text)) return;

                log("Kliknięto przycisk", text);
            }
        });
    }

    async function logSessionStart() {
        const now = new Date();
        const days = ['Ndz', 'Pon', 'Wt ', 'Śr ', 'Czw', 'Pt ', 'Sob'];
        const dayName = days[now.getDay()];
        const pad = (n) => n.toString().padStart(2, '0');
        const padMs = (n) => n.toString().padStart(3, '0');
        
        const timestamp = `${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()} ${dayName}, ` +
                          `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())},${padMs(now.getMilliseconds())}`;
        
        const separator = "=".repeat(20);
        const entry = `\n\n${separator}\n\n[${timestamp}] AKCJA: Sesja gry rozpoczęta\n\n\n${separator}\n\n\n`;
        
        logBuffer += entry;
        saveBuffer();

        if (fileHandle) {
            try {
                const writable = await fileHandle.createWritable({ keepExistingData: true });
                const file = await fileHandle.getFile();
                await writable.write({ type: 'write', position: file.size, data: entry });
                await writable.close();
            } catch (err) {}
        }
        updateUI();
    }

    function init() {
        initUI();
        wrapFunctions();
        logSessionStart();
    }

    // Use a delay to ensure other scripts have initialized their global functions
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(init, 2000));
    } else {
        setTimeout(init, 2000);
    }

    return {
        log,
        logSeparator,
        connectFile,
        downloadLog,
        clearLog
    };
})();

// Expose to window so button onclick="SatoriLogger.connectFile()" works
window.SatoriLogger = SatoriLogger;
