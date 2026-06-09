const CDaHTML = `
<style>
    .page-container-cda {
        max-width: 1280px; margin: 0 auto; background: #ccccff; border-radius: 10px;
        padding: 4px; color: #000 !important; font-size: 11pt !important;
    }
    .audio-grid-cda { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; margin-bottom: 4px; }
    .audio-container-cda {
        background: rgba(255, 255, 255, 0.1) !important; border-radius: 6px; padding: 2px 4px;
        border: 1px solid rgba(0, 0, 0, 0.15); color: #000 !important;
    }
    .track-label {
        font-weight: 600; display: block; border-left: 3px solid #000; padding-left: 5px; margin-bottom: 2px;
    }
    .role-grid-cda {
        display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; margin: 4px 0;
    }
    .role-item-cda { text-align: left; }
    @media (max-width: 768px) { 
        .audio-grid-cda { grid-template-columns: 1fr; } 
        .role-grid-cda { grid-template-columns: 1fr; }
    }
    audio { width: 99%; height: 28px; display: block; margin: 0 auto; }
        background: rgba(255, 255, 255, 0.2); padding: 2px 8px; margin: 4px 0;
        text-align: left; border-left: 4px solid #000; font-weight: 500; display: block;
    }
    .master-box-cda {
        display: block; width: fit-content; background: rgba(255, 255, 255, 0.2); border: 1px solid #000;
        border-radius: 4px; padding: 2px 10px; font-weight: bold; cursor: pointer; margin: 2px 0;
    }
    .expandable-content-cda {
        display: none; background: rgba(255, 255, 255, 0.1); border-radius: 6px;
        padding: 4px 8px; border: 1px solid rgba(0, 0, 0, 0.15); margin-top: 4px;
        text-align: left;
    }
    .expandable-content-cda.show { display: block; }
    .warning-text-cda {
        background: rgba(255, 200, 200, 0.3); padding: 2px 8px; border-radius: 4px;
        margin: 3px 0; border-left: 2px solid #000; display: block;
    }
    .extra-audio-cda { margin-top: 4px; border-top: 1px dashed rgba(0,0,0,0.3); padding-top: 4px; }
    .page-container-cda * { color: #000 !important; font-size: 11pt !important; }
</style>

<div class="page-container-cda">
    <div class="audio-grid-cda">
        <section class="audio-container-cda">
            <span class="track-label">💿 1. Wprowadzenie przed grą</span>
            <audio controls preload="metadata"><source src="Satori 01m Wprowadzenie dla wszystkich graczy.mp3" type="audio/mpeg"></audio>
        </section>
        <section class="audio-container-cda">
            <span class="track-label">💿 3. Wyjaśnienie koncepcji RW po skończonej grze</span>
            <audio controls preload="metadata"><source src="Satori 03m Wyjaśnienie koncepcji Radykalnego Wybaczania.mp3" type="audio/mpeg"></audio>
        </section>
    </div>
    <span style="text-align: left;">
		<button id="masterToggleBtn" class="master-box-cda">DLA MISTRZA GRY</button>
		🧘 Przed rozpoczęciem gry niech wszyscy wysłuchają nagrania pierwszego.</span>
   <div id="expandedMasterContent" class="expandable-content-cda" style="text-align:left;">
        <span class="warning-text-cda">⚠️ <strong>Ważne:</strong> Wysłuchaj wszystkich trzech nagrań zanim przystąpisz do prowdzenia gry. Służy to zapewnieniu komfortu wszystkim uczestnikom.</span>
        <strong>🎯 Rola Mistrza Gry:</strong>
        <div class="role-grid-cda">
            <span class="role-item-cda">🎯  Kieruj grą i wyjaśniaj grającym skutki znalezienia się na konkretnych polach.</span>
            <span class="role-item-cda">🔥 Inicjuj i prowadż zbiorowe reakcje grupy, nie szczędząc przy tym zapału i entuzjazmu. Reakcje grupy czynią grę bardziej zabawną i dynamiczną.</span>
            <span class="role-item-cda">🗣️ Pomagaj graczom w zachowaniu zwięzIości opowiadanych przez nich historii. Zachęcaj ich do dzielenia się spostrzeżeniami na temat tego, czego dowiadują się dzięki grze.</span>
            <span class="role-item-cda">📢 Jeśli pojawią się ogólne pytania na temat Radykalnego Wybaczania, po skończonej grze odtwórz nagranie trzecie (5 minut).</span>
        </div>
        <section class="audio-container-cda extra-audio-cda">
            <span style="text-align: center;" class="track-label">💿 2. Instrukcje dla prowadzącego grę</span>
            <audio controls preload="metadata"><source src="Satori 02m Instrukcje dla prowadzącego grę.mp3" type="audio/mpeg"></audio>
        </section>
    </div>
</div>
`;

const cdaDiv = document.getElementById('CDa');
cdaDiv.innerHTML = CDaHTML;

// Funkcja przełączająca widoczność rozwiniętej treści dla Mistrza Gry
(function() {
    const masterBtn = document.getElementById('masterToggleBtn');
    const expandDiv = document.getElementById('expandedMasterContent');
    if (masterBtn && expandDiv) {
        masterBtn.addEventListener('click', function() {
            expandDiv.classList.toggle('show');
        });
        masterBtn.setAttribute('role', 'button');
        masterBtn.setAttribute('tabindex', '0');
        masterBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                expandDiv.classList.toggle('show');
            }
        });
    }
})();

// ------------------------------------------------------------
// TYLKO ZIELONE TŁO DLA PUSTYCH KOMÓREK – BEZ ZMIANY WYRÓWNANIA
// ------------------------------------------------------------

// 1. Dodanie stylu tylko dla pustych komórek (nie dotyka text-align)
const cdaStyle = document.createElement('style');
cdaStyle.textContent = `
    /* Zielone tło dla pustych komórek – nie zmieniamy wyrównania */
    #tabela td:empty,
    #tabela td:has(> br):empty,
    #tabela td:has(> &nbsp;),
    #tabela td:has(>  ) {
        background-color: #00ff00 !important;
    }
    /* Klasa pomocnicza */
    .forced-green {
        background-color: #00ff00 !important;
    }
`;
document.head.appendChild(cdaStyle);

// 2. Ręczne sprawdzenie każdej komórki – jeśli pusta, dodajemy zielone tło
const cdaTableCells = cdaDiv.querySelectorAll('td');
cdaTableCells.forEach(cell => {
    const content = cell.innerHTML.replace(/&nbsp;/g, '').trim();
    if (content === '') {
        cell.style.setProperty('background-color', '#00ff00', 'important');
        cell.classList.add('forced-green');
    }
});

// 3. Nie usuwamy atrybutów align, nie zmieniamy text-align, nie wymuszamy centrowania
