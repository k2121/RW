/**
 * Satori Game Logger
 * Handles logging of all game actions to safeStorage and optionally a local file.
 */

const SatoriLogger = (function() {
    const LOG_KEY = 'satori_game_log_buffer';
    let fileHandle = null;
    let logBuffer = safeStorage.getItem(LOG_KEY) || "";

    // Sync with safeStorage
    function saveBuffer() {
        safeStorage.setItem(LOG_KEY, logBuffer);
    }

    async function log(action, details = "") {
        const now = new Date();
        
        const days = ['Ndz', 'Pon', 'Wt ', 'Śr ', 'Czw', 'Pt ', 'Sob'];
        const dayName = days[now.getDay()];
        
        const pad = (n) => n.toString().padStart(2, '0');
        const padMs = (n) => n.toString().padStart(3, '0');
        
        const timestamp = `${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()} ${dayName}, ` +
                          `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())},${padMs(now.getMilliseconds())}`;
        
        const entry = `   [${timestamp}] AKCJA: ${action}${details ? ' | SZCZEGÓŁY: ' + details : ''}\n`;
        
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
        const separator = "\n\n   " + "=".repeat(20) + "\n\n";
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

    async function logEndGame(source) {
        let content = "\n   ==========Koniec Gry==========\n\n";

        const dynamicBoxes = document.querySelectorAll('#textareas-container .textarea-box');
        dynamicBoxes.forEach(box => {
            const labelEl = box.querySelector('label');
            let label = "Moja karta";
            if (labelEl) {
                label = Array.from(labelEl.childNodes)
                    .filter(node => node.nodeType === 3)
                    .map(node => node.textContent.trim())
                    .join(' ')
                    .replace(':', '')
                    .trim() || "Moja karta";
            }
            const textarea = box.querySelector('textarea');
            if (textarea && textarea.value.trim()) {
                const val = textarea.value.trim();
                // Indent every line except the first one (which follows the label)
                const indentedLines = val.split('\n').map((line, index) => index === 0 ? line : "   " + line).join('\n');
                content += `   ${label}: ${indentedLines}\n`;
            }
        });

        logBuffer += content;
        saveBuffer();
        
        if (fileHandle) {
             try {
                const writable = await fileHandle.createWritable({ keepExistingData: true });
                const file = await fileHandle.getFile();
                await writable.write({ type: 'write', position: file.size, data: content });
                await writable.close();
            } catch (err) {}
        }
        
        console.log(`[Log] ${source} - Karta gracza zapisana`);
        updateUI(); // In case we want to show something, though updateUI is currently empty
    }

    function getDeviceName() {
        // 1. Check safeStorage
        const storedDevice = safeStorage.getItem('satori_deviceName');
        if (storedDevice && storedDevice.trim() !== "") {
            return storedDevice.trim();
        }

        // 2. Check cookies
        try {
            const cookieValue = document.cookie
                .split("; ")
                .find((row) => row.startsWith("satori_deviceName="))
                ?.split("=")[1];
            if (cookieValue && cookieValue.trim() !== "") {
                return decodeURIComponent(cookieValue.trim());
            }
        } catch (e) {
            console.warn("Accessing cookies is blocked or insecure in this context:", e);
        }

        // 3. Detect PC vs Tel (Mobile)
        const ua = navigator.userAgent;
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
        return isMobile ? "Tel" : "PC";
    }

    function getDynamicFileName() {
        const now = new Date();
        const pad = (n) => n.toString().padStart(2, '0');
        const yy = now.getFullYear().toString().slice(-2);
        const mm = pad(now.getMonth() + 1);
        const dd = pad(now.getDate());
        const hh = pad(now.getHours());
        const mi = pad(now.getMinutes());
        const device = getDeviceName(); 
        return `Satori_Log r${yy}${mm}${dd} g${hh}${mi} ${device}.txt`;
    }

    async function connectFile() {
        try {
            fileHandle = await window.showSaveFilePicker({
                suggestedName: getDynamicFileName(),
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
        const label = document.getElementById('log-label');
        if (label) {
            const count = logBuffer.split('\n').length - 1;
            const paddedCount = Math.max(0, count).toString().padStart(4, '0');
            label.innerText = `LOG ${paddedCount}`;
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
            <b id="log-label">LOG 0000</b>
            <button type="button" onclick="SatoriLogger.logEndGame('Ręczny koniec gry')" style="font-size: 11px; font-weight: bold; background: #ffffcc; border: 1px solid #999;">KONIEC GRY</button>
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
        a.download = getDynamicFileName();
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

        // 1. Dice Roll and Move -16 are now logged directly from gameMechanics.js 
        // to ensure correct order (Roll -> Selection -> Summary).

        // 2. Randomize Data (Losuj kartę)
        const originalRandomizeData = window.randomizeData;
        if (originalRandomizeData) {
            window.randomizeData = function() {
                log("Kliknięto 'Losuj kartę 📑'");
                return originalRandomizeData.apply(this, arguments);
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

                // Trigger End Game on SATORI field (ID 61)
                if (e.target.id === 'pola_planszy' && parseInt(e.target.value, 10) === 61) {
                    logEndGame('Pole SATORI');
                }
            }
        }, true); // Use capture phase

        // Select2 handling (jQuery events don't always bubble to native document listeners)
        if (window.jQuery) {
            jQuery(document).on('change', 'select', function() {
                // To avoid double logging if native event also fires
                const lastLog = safeStorage.getItem('satori_last_select_log');
                const currentVal = this.id + ":" + this.value;
                if (lastLog === currentVal) return;
                safeStorage.setItem('satori_last_select_log', currentVal);
                
                logSelectChange(this);

                // Trigger End Game on SATORI field (ID 61)
                if (this.id === 'pola_planszy' && parseInt(this.value, 10) === 61) {
                    logEndGame('Pole SATORI');
                }
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

        // Event delegation for masterToggleBtn clicks
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('#masterToggleBtn');
            if (btn) {
                const expandDiv = document.getElementById('expandedMasterContent');
                setTimeout(() => {
                    const nowVisible = expandDiv && expandDiv.classList.contains('show');
                    log("Widoczność: MISTRZ GRY", nowVisible ? "POKAZANO" : "UKRYTO");
                }, 10);
            }
        }, true);

        // 11. Generic Button Clicks - using mousedown to log BEFORE the action
        document.addEventListener('mousedown', (e) => {
            const btn = e.target.closest('button');
            if (btn) {
                // Ignore our own logger buttons
                if (btn.closest('#logger-panel')) return;

                const text = (btn.innerText || btn.title || btn.id || "przycisk bez tekstu").trim();
                
                // Ignore buttons that are handled specifically or trigger windows
                const ignoredLabels = ['Czakry 🌈', 'Znaki Czakr 🕉️', 'Plansza💞', 'Emocje 😊', 'Maska 🎭', 'Róża 🌹', 'Gra grupowa'];
                if (ignoredLabels.includes(text)) return;
                
                const handledIds = ['masterToggleBtn', 'addMyCardBtn', 'removeMyCardBtn', 'addTheirCardBtn', 'removeTheirCardBtn'];
                if (handledIds.includes(btn.id)) return;

                // Special handling for Group Game instruction buttons
                const instrBtn = btn.closest('#instr-btns button');
                if (instrBtn) {
                    const fieldName = instrBtn.innerText.trim();
                    const btns = Array.from(document.querySelectorAll('#instr-btns button'));
                    const btnIndex = btns.indexOf(instrBtn);
                    const cards = document.querySelectorAll('#instr-cards .pair');
                    let descText = "";
                    let reakcjaText = "";
                    if (btnIndex !== -1 && cards[btnIndex]) {
                        const descEl = cards[btnIndex].querySelector('.pole p');
                        const reakcjaEl = cards[btnIndex].querySelector('.reakcja');
                        if (descEl) descText = descEl.innerText.trim();
                        if (reakcjaEl) reakcjaText = reakcjaEl.innerText.replace("Reakcja grupy:", "").trim();
                    }
                    
                    let details = fieldName;
                    if (descText) details += ` | OPIS: ${descText}`;
                    if (reakcjaText && reakcjaText !== '—' && reakcjaText !== '-') details += ` | REAKCJA: ${reakcjaText}`;
                    
                    log("Instrukcja: KLIKNIĘTO POLE", details);
                    return;
                }

                log("Kliknięto przycisk", text);
            }
        }, true);

        // Re-assign button onclick handlers to use the wrapped versions
        const addMyCardBtn = document.getElementById('addMyCardBtn');
        if (addMyCardBtn) {
            addMyCardBtn.onclick = window.addMyCard;
        }
        const removeMyCardBtn = document.getElementById('removeMyCardBtn');
        if (removeMyCardBtn) {
            removeMyCardBtn.onclick = window.removeMyCard;
        }
        const addTheirCardBtn = document.getElementById('addTheirCardBtn');
        if (addTheirCardBtn) {
            addTheirCardBtn.onclick = window.addTheirCard;
        }
        const removeTheirCardBtn = document.getElementById('removeTheirCardBtn');
        if (removeTheirCardBtn) {
            removeTheirCardBtn.onclick = window.removeTheirCard;
        }

        // Intercepting challenge cards selector click from embedded list
        const originalAddToCart = window.addToCart;
        if (originalAddToCart) {
            window.addToCart = function(problem, button) {
                log("Wybrano wyzwanie", problem);
                return originalAddToCart.apply(this, arguments);
            };
        }

        // Expose function for external challenge basket (koszyk.html) to call
        window.addFromSelector = function(formattedText) {
            const challengeText = formattedText.replace(/^wyzwanie:\s*/, '');
            log("Wybrano wyzwanie", challengeText);
        };
    }

    async function logSessionStart() {
        const now = new Date();
        const days = ['Ndz', 'Pon', 'Wt ', 'Śr ', 'Czw', 'Pt ', 'Sob'];
        const dayName = days[now.getDay()];
        const pad = (n) => n.toString().padStart(2, '0');
        const padMs = (n) => n.toString().padStart(3, '0');
        
        const timestamp = `${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()} ${dayName}, ` +
                          `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())},${padMs(now.getMilliseconds())}`;
        
        const separator = "   " + "=".repeat(20);
        const entry = `\n\n${separator}\n\n   [${timestamp}] AKCJA: Sesja gry rozpoczęta\n\n\n${separator}\n\n\n`;
        
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
        logEndGame,
        connectFile,
        downloadLog,
        clearLog
    };
})();

// Expose to window so button onclick="SatoriLogger.connectFile()" works
window.SatoriLogger = SatoriLogger;
