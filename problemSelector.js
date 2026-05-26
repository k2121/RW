//#### 4. `js/problemSelector.js`
//Obsługa listy problemów, akordeonu i wyszukiwania. Zależna od `problemsData` z `data.js`.

// js/problemSelector.js

// Przyjmujemy, że problemsData jest dostępny globalnie z data.js
// Jeśli nie, należy go zaimportować w nowoczesnych modułach ES6
// import { problemsData } from './data.js'; // Jeśli używasz ES Modules

function generateProblemList() {
    const container = document.getElementById('problem-list-container');
    if (!container) {
        //console.error("Container #problem-list-container not found. Skipping problem list generation.");//

        return;
    }
    container.innerHTML = '';

    for (const mainCategory in problemsData) {
        const categoryContent = problemsData[mainCategory];

        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'problem-category';

        const header = document.createElement('div');
        header.className = 'problem-category-header';
        header.textContent = mainCategory;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'problem-content';

        if (Array.isArray(categoryContent)) {
            categoryContent.forEach(problem => {
                contentDiv.appendChild(createProblemItem(problem));
            });
        } else {
            for (const subCategory in categoryContent) {
                const subDiv = document.createElement('div');
                subDiv.innerHTML = `<h3 style="text-align:center; font-style:italic;">- ${subCategory} -</h3>`;
                categoryContent[subCategory].forEach(problem => {
                    subDiv.appendChild(createProblemItem(problem));
                });
                contentDiv.appendChild(subDiv);
            }
        }

        categoryDiv.appendChild(header);
        categoryDiv.appendChild(contentDiv);
        container.appendChild(categoryDiv);

        header.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = "0 10px";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "10px";
            }
        });
    }
}

function createProblemItem(problem) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'problem-item';

    const addButton = document.createElement('button');
    addButton.textContent = '+';
    addButton.className = 'add-problem-btn';
    addButton.onclick = () => addToCart(problem, addButton);

    const label = document.createElement('span');
    label.className = 'problem-label';
    label.textContent = problem;

    itemDiv.appendChild(addButton);
    itemDiv.appendChild(label);

    return itemDiv;
}

function addToCart(problem) {
    const problemWithPrefix = "wyzwanie: " + problem;
    navigator.clipboard.writeText(problemWithPrefix).then(() => {
        alert("Skopiowano wyzwanie do schowka: " + problemWithPrefix);
    }, (err) => {
        console.error('Błąd kopiowania do schowka:', err);
        alert('Nie udało się skopiować wyzwania do schowka.');
    });
}

function filterProblems() {
    const input = document.getElementById('problemSearch');
    if (!input) return; // Add a check if the input exists (only in new window now)

    const filter = input.value.toLowerCase();
    const container = document.getElementById('problem-list-container');
    const items = container.getElementsByClassName('problem-item');

    for (let i = 0; i < items.length; i++) {
        const label = items[i].getElementsByClassName('problem-label')[0];
        if (label.textContent.toLowerCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

function expandAll() {
    const headers = document.querySelectorAll('.problem-category-header');
    headers.forEach(header => {
        if (!header.classList.contains('active')) {
            header.classList.add('active');
            const content = header.nextElementSibling;
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.padding = "10px";
        }
    });
}
// Make sure these functions are globally accessible
window.expandAll = expandAll;


function collapseAll() {
    const headers = document.querySelectorAll('.problem-category-header');
    headers.forEach(header => {
        if (header.classList.contains('active')) {
            header.classList.remove('active');
            const content = header.nextElementSibling;
            content.style.maxHeight = null;
            content.style.padding = "0 10px";
        }
    });
}
// Make sure these functions are globally accessible
window.collapseAll = collapseAll;

function clearSearch() {
    const searchInput = document.getElementById('problemSearch');
    if (searchInput) { // Add a check if the input exists (only in new window now)
        searchInput.value = '';
        filterProblems();
    }
}
// Make sure these functions are globally accessible
window.clearSearch = clearSearch;


function openBasketInNewWindow() {
    // Pobieramy czysty adres URL strony (bez ewentualnych starych parametrów)
    let cleanUrl = window.location.href.split('?')[0].split('#')[0];
    
    // Otwieramy TĘ SAMĄ stronę, ale z parametrem ?koszyk=true
    // Ponieważ to prawdziwy adres URL, Firefox Android włączy klawiaturę bez błędu
    const newWindow = window.open(cleanUrl + '?koszyk=true', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');

    if (!newWindow) {
        alert("Nowe okno zostało zablokowane przez przeglądarkę.");
    }
}

// Ta funkcja uruchamia się przy ładowaniu każdej strony.
// Sprawdza, czy w adresie jest "?koszyk=true". Jeśli tak - zamienia stronę w sam Koszyk.
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.search.includes('koszyk=true')) {
        
        // 1. Ukrywamy wszystkie elementy gry (tabele, pola), zostawiamy tylko główny kontener
        Array.from(document.body.children).forEach(child => {
            if (child.id !== 'problem-selector-container' && child.tagName !== 'SCRIPT' && child.tagName !== 'STYLE') {
                child.style.display = 'none';
            }
        });

        // 2. Formatujemy całe okno, aby koszyk ładnie wypełnił ekran telefonu
        document.body.style.margin = '0';
        document.body.style.padding = '10px';
        document.body.style.display = 'flex';
        document.body.style.flexDirection = 'column';
        document.body.style.height = '100vh';
        document.body.style.boxSizing = 'border-box';
        document.body.style.backgroundColor = '#f0f8ff';

        // 3. Rozbudowujemy kontener - dodajemy pole wyszukiwania i przyciski
        const container = document.getElementById('problem-selector-container');
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.flexGrow = '1';
        container.style.height = '100%';
        container.style.border = 'none';
        
        container.innerHTML = `
            <h3 style="color: #2c3e50; border-bottom: 2px solid #3498db; margin-top: 0; padding-bottom: 5px;">[820] Wybierz wyzwania:</h3>
            
            <div style="margin-bottom: 10px; flex-shrink: 0;">
                <button onclick="expandAll()">Rozwiń wszystkie</button>
                <button onclick="collapseAll()">Zwiń wszystkie</button>
                <button onclick="clearSearch()">Kasuj</button>
                <button onclick="window.close()">_X_ Zamknij</button>
            </div>
            
            <input type="text" id="problemSearch" onkeyup="filterProblems()" placeholder="Szukaj problemu..." style="width: 100%; padding: 8px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; flex-shrink: 0; user-select: text !important; -webkit-user-select: text !important; font-size: 16px;">
            
            <div id="problem-list-container" style="flex-grow: 1; overflow-y: auto; border: 1px solid #bdc3c7; background-color: #ffffff; padding: 0;">
                <!-- Problemy zostaną tu wygenerowane -->
            </div>
        `;
        
        // 4. Ładujemy listę problemów do nowo wygenerowanego pola
        setTimeout(() => {
            if (typeof generateProblemList === 'function') {
                generateProblemList();
            }
        }, 50);
    }
});
