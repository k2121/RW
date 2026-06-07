(function() {
    function autoResize(el) {
        if (!el) return;

        // Jeśli element jest ukryty (display: none), musimy go tymczasowo pokazać, aby zmierzyć scrollHeight
        const isHidden = window.getComputedStyle(el).display === 'none';
        let originalStyles = {};

        if (isHidden) {
            originalStyles = {
                display: el.style.display,
                visibility: el.style.visibility,
                position: el.style.position,
                width: el.style.width
            };

            // Force rendering but keep it invisible
            el.style.display = 'block';
            el.style.visibility = 'hidden';
            el.style.position = 'absolute';
            // Ważne na PC: musimy zachować realną szerokość kontenera
            const parentWidth = el.parentElement ? el.parentElement.clientWidth : 0;
            if (parentWidth > 0) {
                el.style.width = parentWidth + 'px';
            }
        }

        // Reset height to allow shrinking
        const oldHeight = el.offsetHeight;
        el.style.height = 'auto';

        // Pomiar
        let newHeight = el.scrollHeight;

        // Poprawka dla box-sizing: border-box
        const style = window.getComputedStyle(el);
        if (style.boxSizing === 'border-box') {
            const padding = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
            const border = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
            // Na niektórych przeglądarkach scrollHeight nie zawiera borderów
            // newHeight += border; 
        }

        // Minimalna i maksymalna wysokość
        if (newHeight < 15) newHeight = 15;

        // Zawsze 103, wyjątkiem jest tabela.html (id zawiera 'tabela') na 10000px
        const maxHeight = (el.id && el.id.includes('tabela')) ? 10000 : 103;

        const finalHeight = Math.min(newHeight, maxHeight);

        // Unikamy pętli/oscylacji: aktualizujemy tylko przy istotnej zmianie
        if (Math.abs(oldHeight - finalHeight) > 2) {
            el.style.height = finalHeight + 'px';
            el.style.overflowY = (newHeight > maxHeight) ? 'auto' : 'hidden';
        } else {
            // Przywracamy poprzednią wysokość, jeśli zmiana była pomijalna
            el.style.height = oldHeight + 'px';
        }


        // Przywracamy stan ukrycia
        if (isHidden) {
            el.style.display = originalStyles.display;
            el.style.visibility = originalStyles.visibility;
            el.style.position = originalStyles.position;
            el.style.width = originalStyles.width;
        }
    }

    function attachResize(el) {
        if (el._autoResizeAttached) return;
        el._autoResizeAttached = true;

        el.addEventListener('input', () => autoResize(el));
        el.addEventListener('paste', () => {
            setTimeout(() => autoResize(el), 10);
        });
        el.addEventListener('change', () => autoResize(el));

        // Obsługa programowego ustawiania wartości (.value = '...')
        const origDescriptor = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value');
        if (origDescriptor) {
            try {
                Object.defineProperty(el, 'value', {
                    get: function() { return origDescriptor.get.call(this); },
                                      set: function(v) {
                                          origDescriptor.set.call(this, v);
                                          // Zwiększamy timeout, by upewnić się, że DOM zdążył się zaktualizować
                                          setTimeout(() => autoResize(el), 50);
                                      }
                });
            } catch(e) {}
        }

        autoResize(el);
    }

    function resizeAll() {
        document.querySelectorAll('textarea').forEach(autoResize);
    }

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('textarea').forEach(attachResize);

        // MutationObserver dla dynamicznie dodawanych pól
        new MutationObserver(function(mutations) {
            mutations.forEach(function(m) {
                m.addedNodes.forEach(function(node) {
                    if (node.nodeType !== 1) return;
                    if (node.tagName === 'TEXTAREA') attachResize(node);
                    node.querySelectorAll && node.querySelectorAll('textarea').forEach(attachResize);
                });
            });
        }).observe(document.body, { childList: true, subtree: true });

        // Dodatkowe wyzwalacze przy ładowaniu strony
        setTimeout(resizeAll, 300);
        setTimeout(resizeAll, 1000);
    });

    // Globalne funkcje
    window.autoResizeAll = resizeAll;
    window.autoResizeTextarea = autoResize;
})();
