//#### 4. `js/problemSelector.js`
//Obsługa listy problemów, akordeonu i wyszukiwania. Zależna od `problemsData` z `data.js`.

// js/problemSelector.js

// Przyjmujemy, że problemsData jest dostępny globalnie z data.js
// Jeśli nie, należy go zaimportować w nowoczesnych modułach ES6
// import { problemsData } from './data.js'; // Jeśli używasz ES Modules

function generateProblemList() {
    const container = document.getElementById('problem-list-container');
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
    addButton.onclick = () => addToCart(problem, addButton); // Usunięto drugi argument, który był nieużywany
    
    const label = document.createElement('span'); 
    label.className = 'problem-label';
    label.textContent = problem;
    
    itemDiv.appendChild(addButton);
    itemDiv.appendChild(label);
    
    return itemDiv;
}

function addToCart(problem) { // Usunięto drugi argument (button)
    const problemWithPrefix = "karma: " + problem;
    navigator.clipboard.writeText(problemWithPrefix).then(() => {
        alert("Skopiowano wyzwanie do schowka: " + problemWithPrefix);
    }, (err) => {
        console.error('Błąd kopiowania do schowka:', err);
        alert('Nie udało się skopiować wyzwania do schowka.');
    });
}

function filterProblems() {
    const input = document.getElementById('problemSearch');
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

function clearSearch() {
  const searchInput = document.getElementById('problemSearch');
  searchInput.value = '';
  filterProblems();
}

function openBasketInNewWindow() {
  const basketContainer = document.getElementById('problem-selector-container');
  if (!basketContainer) {
    alert("Nie znaleziono kontenera problemów.");
    return;
  }

  const newWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');

  if (!newWindow) {
    alert("Nowe okno zostało zablokowane przez przeglądarkę.");
    return;
  }

  let styleContent = '';
  document.querySelectorAll('style').forEach(style => {
    styleContent += style.outerHTML;
  });

  const containerClone = basketContainer.cloneNode(true);
  const buttonDiv = containerClone.querySelector('div[style="margin-bottom: 0px;"]');

  if (buttonDiv) {
    const openBtn = buttonDiv.querySelector('button[onclick="openBasketInNewWindow()"]');
    if (openBtn) openBtn.remove();

    // Poprawiony przycisk zamykania - działa w nowym oknie
    const closeBtn = document.createElement('button');
    closeBtn.innerText = '_X_';
    closeBtn.title = 'Zamknij okno';
    closeBtn.setAttribute('onclick', 'window.close();'); // Bezpośredni atrybut onclick

    buttonDiv.appendChild(closeBtn);
  }

  const basketHTML = containerClone.outerHTML;

  newWindow.document.write(`
    <!DOCTYPE html>
    <html lang="pl">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Koszyk problemów</title>
        ${styleContent}
        <link rel="stylesheet" href="style-okno.css">
      </head>
      <body>
        ${basketHTML}
        <script src="data.js"></script>
        <script src="problemSelector.js"></script>
        <script>
          window.addEventListener('DOMContentLoaded', () => {
            if (typeof generateProblemList === 'function') {
              generateProblemList();
            } else {
              console.warn('Brak funkcji generateProblemList w nowym oknie.');
            }
          });
        </script>
      </body>
    </html>
  `);

  newWindow.document.close();
}
