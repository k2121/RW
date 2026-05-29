//#### 4. `js/problemSelector.js`
//Obsługa listy problemów, akordeonu i wyszukiwania. Zależna od `allProblems` z `data.js`.

// js/problemSelector.js

// Przyjmujemy, że allProblems jest dostępny globalnie z data.js
// Jeśli nie, należy go zaimportować w nowoczesnych modułach ES6
// import { allProblems } from './data2-problemy.js'; // Jeśli używasz ES Modules

function generateProblemList() {
    const container = document.getElementById('problem-list-container');
    if (!container) {
        //console.error("Container #problem-list-container not found. Skipping problem list generation.");//

        return;
    }
    container.innerHTML = '';

    for (const mainCategory in allProblems) {
        const categoryContent = allProblems[mainCategory];

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

function addToCart(problem, button) {
    const problemWithPrefix = "wyzwanie: " + problem;
    navigator.clipboard.writeText(problemWithPrefix).then(() => {
        // Wizualne potwierdzenie
        const originalText = button.textContent;
        button.textContent = '✓';
        button.style.backgroundColor = '#27ae60';
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '#2ecc71';
        }, 1000);
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
    const newWindow = window.open('koszyk.html', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
    if (!newWindow) {
        alert("Nowe okno zostało zablokowane przez przeglądarkę.");
    }
}
