const audioPath = '';

function createMp3Button(filename, label = 'mp3') {
    if (typeof promptForName === 'function') {
        promptForName();
    }
    if (userName !== 'Krzysiu') {
        return;
    }
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
window.pole61a = function() { createMp3Button('Satori.mp3'); };

window.triggerFieldAction = function(val) {
    const container = document.getElementById('mp3-container');
    if (container) {
        container.innerHTML = '';
    }

    if (!val) return;

    const num = parseInt(val, 10);
    if (isNaN(num)) return;

    // Determine which base field description to show
    let descNum = num;
    if ([1, 5, 9, 13].includes(num)) descNum = 1;
    else if ([2, 6, 10].includes(num)) descNum = 2;
    else if ([3, 7].includes(num)) descNum = 3;
    else if ([4, 12].includes(num)) descNum = 4;
    else if ([8, 14].includes(num)) descNum = 8;
    else if ([11, 15, 25, 36, 53].includes(num)) descNum = 11;
    else if ([17, 20, 26, 29, 34, 39, 44].includes(num)) descNum = 17;
    else if ([18, 23, 27].includes(num)) descNum = 18;
    else if ([19, 24, 51, 59].includes(num)) descNum = 19;
    else if ([21, 32, 43, 47].includes(num)) descNum = 21;
    else if ([28, 52].includes(num)) descNum = 28;
    else if ([30, 37, 48, 54].includes(num)) descNum = 30;
    else if ([33, 38, 42, 45].includes(num)) descNum = 33;
    else if ([35, 40, 57].includes(num)) descNum = 35;
    else if ([41, 55].includes(num)) descNum = 41;
    else if ([49, 56].includes(num)) descNum = 49;
    else if ([50, 60].includes(num)) descNum = 50;

    const descFuncName = 'pole' + descNum.toString().padStart(2, '0');
    if (typeof window[descFuncName] === 'function') {
        window[descFuncName]();
    }

    // Determine which base field mp3 to play/generate
    let mp3Num = null;
    if ([4, 12].includes(num)) mp3Num = 4;
    else if (num === 16) mp3Num = 16;
    else if ([17, 20, 26, 29, 34, 39, 44].includes(num)) mp3Num = 17;
    else if ([18, 23, 27].includes(num)) mp3Num = 18;
    else if ([19, 24, 51, 59].includes(num)) mp3Num = 19;
    else if ([21, 32, 43, 47].includes(num)) mp3Num = 21;
    else if (num === 22) mp3Num = 22;
    else if ([28, 52].includes(num)) mp3Num = 28;
    else if ([30, 37, 48, 54].includes(num)) mp3Num = 30;
    else if (num === 31) mp3Num = 31;
    else if ([33, 38, 42, 45].includes(num)) mp3Num = 33;
    else if ([35, 40, 57].includes(num)) mp3Num = 35;
    else if ([41, 55].includes(num)) mp3Num = 41;
    else if (num === 46) mp3Num = 46;
    else if ([49, 56].includes(num)) mp3Num = 49;
    else if ([50, 60].includes(num)) mp3Num = 50;
    else if (num === 58) mp3Num = 58;
    else if (num === 61) mp3Num = 61;

    if (mp3Num !== null) {
        const mp3FuncName = 'pole' + mp3Num.toString().padStart(2, '0') + 'a';
        if (typeof window[mp3FuncName] === 'function') {
            window[mp3FuncName]();
        }
    }
};
