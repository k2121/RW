function otworzPlansza() {
    const win = window.open('', 'Plansza', 'width=800,height=600');
    win.document.write(`
      <html>
        <head>
          <title>Plansza</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body {
              margin: 0;
              text-align: center;
              background: #000;
              min-height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .gallery {
              display: flex;
              flex-direction: column;  /* domyślnie pionowo (telefon) */
              gap: 20px;
              padding: 20px;
              justify-content: center;
              align-items: center;
              width: 100%;
            }
            .gallery img {
              max-width: 100%;
              height: auto;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            }
            button { position: absolute; top: 10px; right: 10px; font-size: 60px; }
            }
            button:hover {
              background: rgba(255,0,0,0.7);
            }
            /* Na ekranach szerszych niż 768px – układ poziomy (PC) */
            @media (min-width: 768px) {
              .gallery {
                flex-direction: row;
                flex-wrap: wrap;
              }
              .gallery img {
                max-width: 45%;
              }
            }
          </style>
        </head>
        <body>
          <button onclick="window.close()">✖</button>
          <div class="gallery">
            <img src="Plansza.jpg" alt="Plansza">
            <img src="karty satori.jpg" alt="Karty Satori">
          </div>
        </body>
      </html>
    `);
    return win;
  }
