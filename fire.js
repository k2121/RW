/**
 * Funkcja  spalająca tekst w podanym elemencie (textarea)
 * @param {string} elementId - ID elementu do spalenia
 */
function burnElement(elementId) {
    const el = document.getElementById(elementId);
    if (!el || !el.value.trim()) return;

    // Tworzymy lub pobieramy canvas overlay
    let cv = document.getElementById('fireCanvas');
    if (!cv) {
        cv = document.createElement('canvas');
        cv.id = 'fireCanvas';
        document.body.appendChild(cv);
    }

    const ctx = cv.getContext('2d');
    const rect = el.getBoundingClientRect();

    // Pozycjonowanie canvasu dokładnie nad elementem
    cv.style.position = 'fixed';
    cv.style.top = rect.top + 'px';
    cv.style.left = rect.left + 'px';
    cv.style.width = rect.width + 'px';
    cv.style.height = rect.height + 'px';
    cv.style.pointerEvents = 'none';
    cv.style.zIndex = '9999';
    cv.style.display = 'block';

    const W = rect.width;
    const H = rect.height;
    cv.width = W;
    cv.height = H;

    // Przygotowanie snapshotu tekstu
    const snap = document.createElement('canvas');
    snap.width = W;
    snap.height = H;
    const sc = snap.getContext('2d');
    const cs = getComputedStyle(el);
    const fz = parseFloat(cs.fontSize) || 11;
    const ff = cs.fontFamily;
    const lh = fz * 1.0;
    const pt = 5; // padding top

    sc.fillStyle = "#0b0b18"; // Tło
    sc.fillRect(0, 0, W, H);
    sc.font = fz + 'px ' + ff;
    sc.textBaseline = 'top';
    sc.textAlign = 'center'; // KLUCZOWA ZMIANA: Wyrównanie w poziomie
    sc.fillStyle = '#cccce0';

    // Renderowanie tekstu do snapshotu
    function renderToSnap(text) {
        let y = pt;
        for (const para of text.split('\n')) {
            let line = '';
            const words = para.split(' ');
            for (const word of words) {
                const test = line ? line + ' ' + word : word;
                if (sc.measureText(test).width > (W - 40) && line) {
                    sc.fillText(line, W / 2, y);
                    y += lh;
                    line = word;
                } else {
                    line = test;
                }
            }
            sc.fillText(line, W / 2, y);
            y += lh;
        }
    }
    renderToSnap(el.value);

    // Ukrywamy oryginalny tekst
    el.style.visibility = 'hidden';

    // Parametry animacji
    const sparks = [];
    const cx = W / 2;
    const cy = H / 2;
    const maxR = Math.hypot(W, H) / 2 + 40;
    const DURATION = 8000;
    let t0 = null;

    function wavyPath(baseR, a1, a2, a3, ts, N = 72) {
        ctx.beginPath();
        for (let j = 0; j <= N; j++) {
            const a = j / N * Math.PI * 2;
            const noise = Math.sin(a * 5 + ts * 0.004) * a1 + Math.sin(a * 10 - ts * 0.007) * a2 + Math.sin(a * 17 + ts * 0.003) * a3;
            const r = Math.max(0, baseR + noise);
            j === 0 ? ctx.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r) : ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
        }
        ctx.closePath();
    }

    function frame(ts) {
        if (!t0) t0 = ts;
        const p = Math.min((ts - t0) / DURATION, 1);
        const ep = -(Math.cos(Math.PI * p) - 1) / 2;
        const r = ep * maxR;

        ctx.clearRect(0, 0, W, H);
        ctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(snap, 0, 0);

        if (r > 1) {
            const fw = 30;
            ctx.globalCompositeOperation = 'lighter';
            ctx.filter = 'blur(6px)';
            const og = ctx.createRadialGradient(cx, cy, Math.max(0, r - 10), cx, cy, r + fw);
            og.addColorStop(0, 'rgba(255,160,0,0)');
            og.addColorStop(0.4, 'rgba(255,80,0,0.5)');
            og.addColorStop(1, 'rgba(0,0,0,0)');
            wavyPath(r + fw, 10, 5, 2, ts);
            ctx.fillStyle = og;
            ctx.fill();

            ctx.filter = 'none';
            ctx.globalCompositeOperation = 'destination-out';
            wavyPath(r, 6, 3, 1, ts);
            ctx.fillStyle = 'black';
            ctx.fill();
        }

        if (p < 1) {
            requestAnimationFrame(frame);
        } else {
            // Koniec – czyścimy pole tekstowe przez wspólną funkcję
            clearTextarea(elementId);
            el.style.visibility = 'visible';
            cv.style.display = 'none';
        }
    }

    requestAnimationFrame(frame);
}

/**
 * Czyści pole tekstowe, emituje event 'input' i odświeża kolor tła
 * @param {string} id - ID elementu textarea do wyczyszczenia
 */
async function clearTextarea(id) {
  const textarea = document.getElementById(id);
  try {
    textarea.value = '';
    textarea.dispatchEvent(new Event('input'));
    updateBackgroundColor(textarea);
  } catch (err) {
    console.error('Błąd podczas kasowania:', err);
  }
}
