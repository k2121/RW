  function otworzRoza() {
    const win = window.open('', 'Róża', 'width=800,height=815');
    win.document.write(`
      <html>
        <head>
          <title>Róża</title>
          <style>
            body { margin: 0; text-align: center; background: #000; }
            img { max-width: 100%; height: auto; }
            button { position: absolute; top: 10px; right: 10px; font-size: 60px; }
          </style>
        </head>
        <body>
          <button onclick="window.close()">✖</button>
          <img src="Satori obwinianie róża.jpg" alt="Róża">
        </body>
      </html>
    `);
  }
