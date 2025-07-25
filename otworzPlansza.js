  function otworzPlansza() {
    const win = window.open('', 'Plansza', 'width=800,height=600');
    win.document.write(`
      <html>
        <head>
          <title>Plansza</title>
          <style>
            body { margin: 0; text-align: center; background: #000; }
            img { max-width: 100%; height: auto; }
            button { position: absolute; top: 10px; right: 10px; font-size: 60px; }
          </style>
        </head>
        <body>
          <button onclick="window.close()">✖</button>
          <img src="Plansza.jpg" alt="Plansza">
        </body>
      </html>
    `);
  }
