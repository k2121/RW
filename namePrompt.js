// --------------------------------------------------------------
// Modyfikacja: NIGDY nie pytaj o imię – używamy localStorage
// --------------------------------------------------------------

(function() {
    // Sprawdź czy w safeStorage jest już zapisane imię
    let storedName = safeStorage.getItem('satori_userName');
    
    if (storedName && storedName.trim() !== "") {
        window.userName = storedName.trim();
    } else {
        // Jeśli nie ma – ustaw domyślnie 'Krzysiu' i zapisz
        window.userName = "Krzysiu";
        safeStorage.setItem('satori_userName', window.userName);
    }
    
    // Nadpisanie oryginalnej funkcji – teraz nie pokazuje prompta,
    // tylko zwraca istniejącą wartość i ewentualnie ustawia domyślną.
    window.promptForName = function() {
        if (!window.userName || window.userName.trim() === "") {
            window.userName = "Krzysiu";
            safeStorage.setItem('satori_userName', window.userName);
        }
        return window.userName;
    };
    
    // Opcjonalnie: jeśli gdzieś w kodzie jest wywołanie `promptForName()` – nic nie zapyta.
    // Dla bezpieczeństwa można też wyłączyć natywny prompt, ale to już przesada.
})();
