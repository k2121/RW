const audioPath = '';

function createMp3Button(filename, label = 'mp3') {
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.style.margin = '5px';
    btn.style.padding = '0px';
    btn.style.cursor = 'pointer';

    btn.onclick = function() {
        const audio = new Audio(audioPath + encodeURIComponent(filename));
        
        // Disable button while playing to prevent multiple overlaps if desired,
        // or just let it play. The prompt says "po odtworzeniu skasuj przycisk".
        btn.disabled = true;
        btn.style.opacity = '0.5';
        
        audio.play().catch(err => {
            console.error("Error playing audio:", err);
            btn.remove(); // Remove anyway if it fails
        });

        audio.onended = function() {
            btn.remove();
        };
    };

    const container = document.getElementById('mp3-container') || document.body;
    container.appendChild(btn);
}

window.pole04a = function() { createMp3Button('Zabawa w obwinianie.mp3'); };
window.pole16a = function() { createMp3Button('Wrota pierwsze.mp3'); };
window.pole17a = function() { 
    const reverseCheckbox = document.getElementById('reverseMove');
    const isReversing = reverseCheckbox ? reverseCheckbox.checked : false;
    
    if (isReversing) {
        createMp3Button('Światło2.mp3', 'mp3◀️');
    } else {
        createMp3Button('Światło1.mp3', 'mp3');
    }
};
window.pole18a = function() { createMp3Button('Gotowość.mp3'); };
window.pole19a = function() { createMp3Button('Samoakceptacja.mp3'); };
window.pole21a = function() { createMp3Button('Westchnienie ulgi.mp3'); };
window.pole22a = function() { createMp3Button('Widzisz u innych własne cechy.mp3'); };
window.pole28a = function() { createMp3Button('Duchowy unik.mp3'); };
window.pole30a = function() { createMp3Button('Pozbądź się tego.mp3'); };
window.pole31a = function() { createMp3Button('Wrota drugie.mp3'); };
window.pole33a = function() { createMp3Button('Nowa opowieść.mp3'); };
window.pole35a = function() { createMp3Button('Uzdrawiający anioł.mp3'); };
window.pole41a = function() { createMp3Button('Moc.mp3'); };
window.pole46a = function() { createMp3Button('Wrota trzecie.mp3'); };
window.pole49a = function() { createMp3Button('Radykalne Wybaczenie.mp3'); };
window.pole50a = function() { createMp3Button('Poddanie się.mp3'); };
window.pole58a = function() { createMp3Button('Jedność.mp3'); };
