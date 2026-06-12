// grupowo.js
(function() {
    // ------------------------------------------------------------
    // 1. DANE INSTRUKCJI PÓL
    // ------------------------------------------------------------
    const rows = [
        ["", "Blokada energii", "Zakręć ”Kołem kolorów”, aby odkryć miejsce zablokowania energii w swym ciele. Odczytaj, jakiego obszaru życia dotyczy blokada (np. fiolet reprezentuje siódmą czakrę i oznacza, że blokujesz swoją zdolność do korzystania z natchnienia, przewodnictwa oraz wiary). Wyciągnij jedną z kolorowych kart reprezentujących wskazaną czakrę i połóż ją w na planszy gracza w części dotyczącej starej wersji TWOJEJ OPOWIEŚCI. Aby uwolnić blokadę, musisz znaleźć się na polu ”Westchnienie ulgi”."],
        ["„Tak jest, bądź sobą!”", "Duchowy unik", "Uczucia są ważne. Uświadom je sobie. Powiedz grupie, co naprawdę czujesz. Następnie cofnij się o 3 pola."],
        ["”Szanujemy twoją gotowość widzenia tego w taki sposób”.", "Gotowość", "Powiedz: ”Choć być może nie do końca rozumiem dlaczego, jestem gotów/gotowa dostrzec w tej sytuacji Boskie przewodnictwo i ufam, że to co się zdarzyło, stało się nie MNIE lecz DLA MNIE”."],
        ["„Tak, jesteśmy jednością”.", "Jedność", "Powiedz: „Odczuwam jedność ze wszystkim i wszystkimi”."],
        ["", "Karma", "Weź kartę ”Karma” i połóż razem z kartami ”Zdarzenie” i ”Kontekst”. Zastanów się, jaką rolę mogły odegrać sprawy karmiczne dla przebiegu tej historii."],
        ["„Rzeczywiście posiadasz moc”!", "Moc", "Pozbądź się wszystkich pozostałych kart ”Przekonanie” i ”Blokady energii”. Jeśli nie masz już żadnych kart tego typu, przesuń się do przodu do najbliższych Wrót (Wrota poddania się albo SATORI)."],
        ["Potwierdźcie: „To jest dla ciebie dobre”", "Nowa opowieść", "Wyciągnij kartę ”Nowa opowieść” i połóż w ramce po prawej stronie planszy gracza, by stworzyć dla siebie nową interpretację. Odczytaj ją."],
        ["„My też ją czujemy! My także się poddajemy!”", "Poddanie się", "Powiedz: ”Poddaję się Wyższej Sile, którą dla mnie jest ____________ i ufam, że wszystko ułoży się doskonale, w zgodzie z Boskim przewodnictwem i duchowym prawem. Odczuwam Boską Miłość, która przepełnia tę sytuację. (Skup się przez chwilę i poczuj Boską Miłość)."],
        ["Aplauz i słowa zachęty oraz uznania.", "Pozbądź się tego", "Spośród odkrytych kart ”Przekonanie” wybierz tę, która zawiera przekonanie, jakiego pragniesz się pozbyć. Jeśli wszystkie twoje karty ”Przekonanie” są zakryte, odkryj jedną. Jeśli nie masz żadnej, wylosuj jedną. Trzymając ją w dłoni, powiedz zdecydowanie i z przekonaniem: ”Całkowicie pozbywam się TERAZ z mojej świadomości przekonania, że (odczytaj tekst z karty)”. Odłóż kartę na bok."],
        ["", "Projekcja", "Zakręć ”Kołem kolorów”, aby zobaczyć, komu przypisujesz własne osądy. (Projekcja polega na przypisywaniu innym ludziom tego, co odrzucamy lub czego nie znosimy w sobie samych). Zobacz, którego z graczy wskazuje strzałka (siebie też weź pod uwagę). Zakręć kołem raz jeszcze, aby zobaczyć, która z twoich czakr jest zablokowana i powoduje projekcję określonych cech na inne osoby. Graczowi, któremu przypisujesz własne cechy, daj kartę ”Blokady energii” zgodną z kolorem czakry, z poziomu której dokonujesz projekcji niechęci do samego siebie. Projekcja ma swoją cenę, musisz więc wyciągnąć dla siebie kartę ”Przekonanie”. Połóż ją bez czytania w lewej ramce planszy gracza. Twoja ”projekcja” dotyczy tego, czemu zaprzeczasz i co wypierasz, jest więc nieświadoma. Dlatego też musi pozostać zakryta."],
        ["", "Przekonanie", "Wyciągnij kartę ”Przekonanie” (przekonania są częścią twojej opowieści o życiu w roli ofiary). Nie czytaj jej! Musi pozostać w nieświadomości, dopóki nie staniesz na polu ”Światło”. Wówczas możesz ją odczytać i tym samym ”wydobyć na światło dzienne”. Połóż ją tekstem do dołu w lewej części planszy gracza, odnoszącej się do starej wersji TWOJEJ OPOWIEŚCI."],
        ["„Oto prawdziwe poddanie się Sile Wyższej!”", "Radykalne Wybaczenie", "Wybacz swoim rzekomym wrogom. Powiedz: ” ____________ , całkowicie ci/ wam wybaczam. Rozumiem teraz, że nie zrobiłeś/ nie zrobiliście nic złego. Wszystko pozostaje w Boskim Porządku. Bezwarunkowo wspieram cię takim, jaki jesteś/ was takimi, jacy jesteście w całej wspaniałości swego istnienia."],
        ["„(Imię), kochamy cię taką, jaką jesteś!”", "Samoakceptacja", "Powiedz: ”Kocham siebie, czując to, co odczuwam w związku z tą sprawą. Wiem, że gdy będę gotów/gotowa, mogę wybrać spokój”."],
        ["”Przecież to nieprawda”, lub jeśli gracz się cofa, ”O tak”.", "Światło", "{poszukaj swoich kart z ikoną otwartego oka 👁️}<br>Odkryj jedną z kart ”Przekonanie” leżących w lewej części planszy gracza (aby wydobyć ją na światło dzienne) i odczytaj jej treść. Odłóż ją na miejsce tekstem do góry. Jeśli nie masz tego typu karty, wylosuj jedną i dokonaj procesu pozbywania się przekonania (patrz instrukcja ”Pozbądź się tego”). (Jeśli gracz cofa się, może pozbyć się karty ”Przekonanie” lub ”Blokady energii”)."],
        ["„Dla nich TY także jesteś uzdrawiającym aniołem!”", "Uzdrawiający anioł", "Spójrz na swych dawnych wrogów jak na uzdrawiające anioły. Powiedz tak: ”Choć być może nie wiem, dlaczego tak się dzieje, uświadamiam sobie teraz, że ____________ i ja wykonujemy razem uzdrawiający taniec, i rozumiem, że jesteśmy dla siebie nawzajem uzdrawiającymi aniołami."],
        ["Głęboki wdech i głośne westchnienie ulgi.", "Westchnienie ulgi", "Pozbądź się jednej karty ”Blokady energii”, mówiąc: ”Uwalniam teraz wszystkie blokady związane z ____________ (odczytaj kartę)”. Jeśli otrzymałeś tę kartę, stając na polu ”Blokada energii”, odłóż ją do pudełka. Jeśli zaś była wynikiem projekcji, zwróć ją osobie, która dokonała przeniesienia swych cech na ciebie. Jeśli nie masz karty, czekasz kolejkę."],
        ["”Skoro widzisz u innych własne cechy, musisz to mieć!”", "Widzisz u innych własne cechy", "Przyjrzyj się wszystkim odkrytym kartom ”Przekonanie” i ”Blokady energii” (u wszystkich graczy). Wybierz tę z nich, która najbardziej do Ciebie przemawia, i weź ją. Połóż ją tekstem do góry w lewej części planszy gracza. Jeśli dokonałeś projekcji swych osądów na innego gracza, dobrze się zastanów, czy chcesz wziąć tę właśnie kartę. Jeśli nie ma żadnej odkrytej karty tego typu, wyciągnij jedną kartę ”Przekonanie”, odczytaj na głos i połóż w lewej części swojej planszy gracza."],
        ["”(Imię), przykro mi, że to cię spotkało.”", "Wrota pierwsze: Świadomość", "1.    Jeśli nie masz żadnej karty typu „Przekonanie”, weź jedną. Połóż ją tekstem do dołu (twoje przekonania nadal pozostają nie uświadomione) w ramce po lewej stronie planszy gracza.<br>2.    Podziel się z pozostałymi graczami swoją opowieścią w dotychczasowej wersji, w oparciu o odkryte przed tobą karty. Powinieneś mieć karty „Wydarzenie” oraz „Kontekst”, być może wyciągnąłeś też kartę „Karma”. Jeśli byłeś obiektem projekcji lub stanąłeś na polu „Blokada energii”, zapewne posiadasz też jedną lub więcej kart typu „Blokady energii”.<br>3.    Podsumuj poprzednią wypowiedź jednym zdaniem. Na przykład: „Najwidoczniej moją karmą było nauczyć się czegoś o zasługiwaniu i wygląda na to, że całkiem dobrze idzie mi studiowanie tego zagadnienia, ponieważ moi rodzice niewątpliwie wzbudzali we mnie poczucie, że nie zasługuję na nic dobrego. Nie poświęcali mi prawie wcale uwagi, a jeszcze do tego ciągle mnie bili. Nawet teraz czuję się nie dostrzegana i wciąż walczę o zdobycie wystarczającej ilości pieniędzy aby przetrwać”.<br>        Wysłuchaj reakcji grupy i ponownie rzuć kostką."],
        ["”(Imię), szanujemy twoją gotowość otwarcia się na taką możliwość”.", "Wrota drugie: Przemiana", "1.    Przed pokonaniem tych wrót, weź jedną kartę ”Nowa opowieść” i połóż ją tekstem do góry w prawej części planszy gracza (NOWA OPOWIEŚĆ). Wyjaśnij, że ta nowa interpretacja może pomóc ci osiągnąć zmianę świadomości oraz że opisana sytuacja może zawierać w sobie okazję do rozwoju i uzdrowienia.<br>2.    Powiedz tak: ”Czuję, że moja świadomość ulega przemianie. Zaczynam otwierać się na ideę, że wszystko, co się zdarza, ma swój sens oraz że ta sytuacja być może została mi dana dla mojego duchowego rozwoju”.<br>        Wysłuchaj reakcji grupy i ponownie rzuć kostką."],
        ["”Wspaniale! Wspieramy cię w akcie powierzenia się Sile Wyższej!”", "Wrota trzecie: Poddanie się", "1.    Odwróć wszystkie karty ”Przekonanie”, które nadal pozostają zakryte, i dokładnie zapoznaj się z ich treścią. Przeczytaj je na głos i wyjaśnij, w jaki sposób przekonania te miały wcześniej nad tobą władzę i były odpowiedzialne za dramaty twego życia. Powiedz, że zdajesz sobie sprawę, iż stara wersja TWOJEJ OPOWIEŚCI zapewne była spowodowana jedynie błędami percepcji, i że jesteś teraz gotów ujrzeć swoją sytuację w innym świetle.<br>2.    Powiedz: ”Całkowicie pozbyłem się swego przywiązania do starej wersji swojej opowieści i odmawiam dalszego inwestowania w nią mojej energii. Pozbywam się potrzeby kontrolowania rezultatów wydarzeń i jestem gotów przyjąć ideę, że wszystko rozwija się zgodnie z Boskim planem”.<br>3.    Zakończ, odczytując teksty wszystkich posiadanych przez siebie kart ”NOWA OPOWIEŚĆ”.<br>        Wysłuchaj reakcji grupy i ponownie rzuć kostką."],
        ["", "Wyobraź sobie!", "Weź pierwszą z góry kartę tego typu i wykonaj polecenie. Działaj zgodnie z instrukcją. Możesz zachować tę kartę na później."],
        ["”Tak jest!”, ”Wygarnij im!”, ”Brawo!”", "Zabawa w obwinianie", "Jeden z graczy trzyma przed sobą maskę twojego ”prześladowcy”, abyś mógł dać upust swym uczuciom. Powiedz, co i dlaczego masz mu/im za złe (np. ”to twoja wina, bo...”, ”ty mnie do tego zmusiłeś”, ”gdyby nie ty...”, ”mówiłeś, że będzie dobrze”). Wyrzuć z siebie wszystko, co ty - jako ofiara - chcesz mu/im powiedzieć, i udramatyzuj swą wypowiedź, nie szczędząc emocji. Jeśli nie pojawią się żadne uczucia, nie przejmuj się. Po prostu udawaj."]
    ];

    // ------------------------------------------------------------
    // 2. STYLE CSS (Kluczowe dla poprawnego wyświetlania)
    // ------------------------------------------------------------
    const style = document.createElement('style');
    style.textContent = `
        /* Panel Instrukcji */
        .satori-instructions-container { margin-top: 15px; background: #0f0f1a; border-radius: 8px; padding: 6px; }
        .btn-grid { display: flex; flex-wrap: wrap; gap: 4px; justify-content: center; }
        .btn-grid button { background: #1e1e35; color: #d1cce8; border: 1px solid #2e2e50; border-radius: 4px; padding: 2px 8px; font-size: 11px; cursor: pointer; }
        .btn-grid button.active { background: #7c6af7; color: white; }
        .grid { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 10px; }
        .pair { display: none; background: #1a1a2e; border: 1px solid #2e2e50; border-radius: 6px; flex: 1 1 280px; flex-direction: column; }
        .pair.visible { display: flex; }
        .reakcja { background: #16213e; padding: 3px 8px; font-size: 11px; color: #a5b4fc; font-style: italic; border-bottom: 1px solid #2e2e50; }
        .pole { padding: 8px; color: #d1cce8; }
        .pole h2 { font-size: 14px; margin: 0 0 5px 0; color: #fff; }
        .pole p { font-size: 12px; line-height: 1.3; margin: 0; }
    `;
    document.head.appendChild(style);

    // ------------------------------------------------------------
    // 3. LOGIKA RENDEROWANIA
    // ------------------------------------------------------------
    function populateSelect(selectId, dataArray, defaultText) {
        const select = document.getElementById(selectId);
        if (!select) return;
        select.innerHTML = `<option value="">${defaultText}</option>`;
        
        dataArray.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            select.appendChild(option);
        });
    }

    // ------------------------------------------------------------
    // 4. FUNKCJE POMOCNICZE (Losowanie / Kopiowanie)
    // ------------------------------------------------------------
    window.randomPrzekonanie = function() {
        const data = (window.sampleData || (typeof sampleData !== 'undefined' ? sampleData : null))?.przekonanie;
        if (data) {
            const rand = data[Math.floor(Math.random() * data.length)];
            $('#pola_przekonanie').val(rand).trigger('change');
        }
    };

    window.randomBlokada = function() {
        const data = (window.sampleData || (typeof sampleData !== 'undefined' ? sampleData : null))?.blokady_energii;
        if (data) {
            const rand = data[Math.floor(Math.random() * data.length)];
            $('#pola_blokada_energii').val(rand).trigger('change');
        }
    };

    window.copyVal = function(id, pref = '') {
        const v = document.getElementById(id).value;
        if (v) navigator.clipboard.writeText(pref + v).then(() => alert("Skopiowano!"));
    };

    // ------------------------------------------------------------
    // 5. BUDOWA INTERFEJSU
    // ------------------------------------------------------------
    function setup() {
        const data = window.sampleData || (typeof sampleData !== 'undefined' ? sampleData : null);
        
        let container = document.getElementById('grupowo-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'grupowo-container';
            document.body.prepend(container);
        }

        // Najpierw wypełniamy kontener główny strukturą (ale bez przycisków "dodaj czyjąś kartę" – dodamy je później w odpowiednim miejscu)
        container.innerHTML = `
            <div id="grupowo-textareas-container"></div>
            <div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:10px; background:#f0f0f0; padding:10px; border-radius:8px; border:1px solid #ccc;">
                <div style="flex:1; min-width:300px;">
                    <label style="display:block; font-weight:bold; font-size:12px; margin-bottom:4px;">[48] Przekonanie:
                        <button onclick="randomPrzekonanie()" style="font-size:10px;">Losuj</button>
                        <button onclick="copyVal('pola_przekonanie', '')" style="font-size:10px;">Kopiuj</button>
                    </label>
                    <select id="pola_przekonanie"></select>
                </div>
                <div style="flex:1; min-width:300px;">
                    <label style="display:block; font-weight:bold; font-size:12px; margin-bottom:4px;">[7] Blokada energii:
                        <button onclick="randomBlokada()" style="font-size:10px;">Losuj</button>
                        <button onclick="copyVal('pola_blokada_energii', '')" style="font-size:10px;">Kopiuj</button>
                    </label>
                    <select id="pola_blokada_energii"></select>
                </div>
            </div>
            <div class="satori-instructions-container">
                <div class="btn-grid" id="instr-btns"></div>
                <div class="grid" id="instr-cards"></div>
            </div>
        `;

        const groupTextareaContainer = document.getElementById('grupowo-textareas-container');
        if (groupTextareaContainer) {
            const numberOfTextareas = 4;   // <--- zmienione na 4
            for (let i = 1; i <= numberOfTextareas; i++) {
                const textareaId = `czyjasTextarea${i.toString().padStart(2, '0')}`;
                const textareaHTML = `
                    <label for="${textareaId}">Czyjaś karta ${textareaId.slice(-2)}:
                      <button type="button" onclick="toggleVisibility('${textareaId}', this)">🫣</button>
                      <button type="button" onclick="saveBackup('${textareaId}'); clearTextarea('${textareaId}')">🗑️</button>
                      <button type="button" onclick="saveBackup('${textareaId}'); pasteFromClipboard('${textareaId}')">📋Wklej</button>
                      <button type="button" onclick="undoField('${textareaId}')">Cofnij ↩️</button>
                      <button type="button" onclick="copyToClipboard('${textareaId}')">Kopiuj</button>
                    </label>
                    <textarea id="${textareaId}" rows="1" cols="50" readonly></textarea>
                `;
                const div = document.createElement('div');
                div.className = 'textarea-box';
                div.innerHTML = textareaHTML;
                groupTextareaContainer.appendChild(div);
            }

            const groupTextareas = groupTextareaContainer.querySelectorAll('textarea');
            groupTextareas.forEach(textarea => {
                textarea.addEventListener('input', () => {
                    if (typeof window.updateBackgroundColor === 'function') {
                        window.updateBackgroundColor(textarea);
                    }
                });
            });
        }

        // ------------------------------
        // Przyciski do dodawania/usuwania „Czyjaś karta” – umieszczone ZARAZ za kontenerem z kartami, przed selectami
        // ------------------------------
        const groupButtonsDiv = document.createElement('div');
        groupButtonsDiv.style.marginTop = '10px';
        groupButtonsDiv.style.textAlign = 'center';
        groupButtonsDiv.innerHTML = `
            <button type="button" id="addTheirCardBtn" style="margin-right:10px; padding:4px 12px;">➕ Dodaj czyjąś kartę</button>
            <button type="button" id="removeTheirCardBtn" style="padding:4px 12px;">➖ Usuń czyjąś kartę</button>
        `;
        // Wstawiamy przyciski bezpośrednio za kontenerem "grupowo-textareas-container"
        groupTextareaContainer.insertAdjacentElement('afterend', groupButtonsDiv);

        // Poprawiona funkcja getNextTheirCardId (usunięty błąd slice)
        function getNextTheirCardId() {
            const boxes = groupTextareaContainer.querySelectorAll('.textarea-box');
            let max = 0;
            boxes.forEach(box => {
                const ta = box.querySelector('textarea');
                if (ta && ta.id.startsWith('czyjasTextarea')) {
                    // id ma format "czyjasTextareaXX" – długość "czyjasTextarea" = 14
                    const num = parseInt(ta.id.slice(14), 10);
                    if (!isNaN(num) && num > max) max = num;
                }
            });
            return max + 1;
        }

        function generateCzyjasTextarea(id) {
            return `
                <label for="${id}">Czyjaś karta ${id.slice(-2)}:
                  <button type="button" onclick="toggleVisibility('${id}', this)">🫣</button>
                  <button type="button" onclick="saveBackup('${id}'); clearTextarea('${id}')">🗑️</button>
                  <button type="button" onclick="saveBackup('${id}'); pasteFromClipboard('${id}')">📋Wklej</button>
                  <button type="button" onclick="undoField('${id}')">Cofnij ↩️</button>
                  <button type="button" onclick="copyToClipboard('${id}')">Kopiuj</button>
                </label>
                <textarea id="${id}" rows="1" cols="50" readonly></textarea>
            `;
        }

        function addTheirCard() {
            const nextId = getNextTheirCardId();
            if (nextId > 999) { alert('Osiągnięto limit 999 kart'); return; }
            const id = `czyjasTextarea${nextId.toString().padStart(2, '0')}`;
            const html = generateCzyjasTextarea(id);
            const div = document.createElement('div');
            div.className = 'textarea-box';
            div.innerHTML = html;
            groupTextareaContainer.appendChild(div);
            
            const newTextarea = div.querySelector('textarea');
            newTextarea.addEventListener('input', () => {
                if (typeof window.updateBackgroundColor === 'function')
                    window.updateBackgroundColor(newTextarea);
            });
            if (typeof window.autoResizeTextarea === 'function')
                setTimeout(() => window.autoResizeTextarea(newTextarea), 10);
        }

        function removeTheirCard() {
            const boxes = groupTextareaContainer.querySelectorAll('.textarea-box');
            if (boxes.length <= 1) {
                alert('Nie można usunąć ostatniej karty.');
                return;
            }
            boxes[boxes.length - 1].remove();
        }

        document.getElementById('addTheirCardBtn').onclick = addTheirCard;
        document.getElementById('removeTheirCardBtn').onclick = removeTheirCard;

        if (data) {
            populateSelect('pola_przekonanie', data.przekonanie, 'Wybierz przekonanie...');
            populateSelect('pola_blokada_energii', data.blokady_energii, 'Wybierz blokadę energii...');
        }

        const btnGrid = document.getElementById('instr-btns');
        const grid = document.getElementById('instr-cards');
        rows.forEach(row => {
            const [reakcja, nazwa, opis] = row;
            const btn = document.createElement('button');
            btn.textContent = nazwa;
            btnGrid.appendChild(btn);

            const card = document.createElement('div');
            card.className = 'pair';
            card.innerHTML = `
                <div class="reakcja">Reakcja grupy: ${reakcja || '—'}</div>
                <div class="pole"><h2>${nazwa}</h2><p>${opis}</p></div>
            `;
            grid.appendChild(card);

            btn.onclick = () => {
                const isVisible = card.classList.contains('visible');
                document.querySelectorAll('.pair').forEach(p => p.classList.remove('visible'));
                document.querySelectorAll('#instr-btns button').forEach(b => b.classList.remove('active'));
                if (!isVisible) {
                    card.classList.add('visible');
                    btn.classList.add('active');
                }
            };
        });

        // Obsługa przycisku "Gra grupowa" z RW.html
        const mainBtn = document.getElementById('btn-gra-grupowa');
        if (mainBtn) {
            mainBtn.onclick = function() {
                const cont = document.getElementById('grupowo-container');
                if (cont) {
                    const isHidden = cont.style.display === 'none';
                    cont.style.display = isHidden ? 'block' : 'none';
                    
                    if (isHidden && typeof window.initGrupowoSelect2 === 'function') {
                        window.initGrupowoSelect2();
                    }
                }
            };
        }

        if (typeof window.initGrupowoSelect2 === 'function') {
            window.initGrupowoSelect2();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setup);
    } else {
        setup();
    }
})();
