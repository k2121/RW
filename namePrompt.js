// --------------------------------------------------------------
// Modyfikacja: NIGDY nie pytaj o imię – używamy localStorage
// --------------------------------------------------------------

(function() {
    // Sprawdź czy w localStorage jest już zapisane imię
    let storedName = localStorage.getItem('satori_userName');
    
    if (storedName && storedName.trim() !== "") {
        window.userName = storedName.trim();
    } else {
        // Jeśli nie ma – ustaw domyślnie 'Krzysiu' i zapisz
        window.userName = "Krzysiu";
        localStorage.setItem('satori_userName', window.userName);
    }
    
    // Nadpisanie oryginalnej funkcji – teraz nie pokazuje prompta,
    // tylko zwraca istniejącą wartość i ewentualnie ustawia domyślną.
    window.promptForName = function() {
        if (!window.userName || window.userName.trim() === "") {
            window.userName = "Krzysiu";
            localStorage.setItem('satori_userName', window.userName);
        }
        return window.userName;
    };
    
    // Opcjonalnie: jeśli gdzieś w kodzie jest wywołanie `promptForName()` – nic nie zapyta.
    // Dla bezpieczeństwa można też wyłączyć natywny prompt, ale to już przesada.
})();
