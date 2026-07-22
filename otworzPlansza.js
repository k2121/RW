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
            <img src="Plansza.jpg" alt="Plansza" onclick="window.open(this.src, '_blank')">
            <img src="karty satori.jpg" alt="Karty Satori" onclick="window.open(this.src, '_blank')">
            <img src="001 Karty.jpeg" alt="001 Karty.jpeg" onclick="window.open(this.src, '_blank')">
            <img src="002 Karty EN.jpeg" alt="002 Karty EN.jpeg" onclick="window.open(this.src, '_blank')">
            <img src="003 Karty EN1.jpeg" alt="003 Karty EN1.jpeg" onclick="window.open(this.src, '_blank')">
            <img src="004 Karty EN2.jpeg" alt="004 Karty EN2.jpeg" onclick="window.open(this.src, '_blank')">
            <img src="005 Karty EN3.jpeg" alt="005 Karty EN3.jpeg" onclick="window.open(this.src, '_blank')">
            <img src="006 Karty EN4.jpeg" alt="006 Karty EN4.jpeg" onclick="window.open(this.src, '_blank')">
            <img src="007 Plansza cała.jpeg" alt="007 Plansza cała.jpeg" onclick="window.open(this.src, '_blank')">
            <img src="008 Plansza EN.jpeg" alt="008 Plansza EN.jpeg" onclick="window.open(this.src, '_blank')">
            <img src="009 Plansza EN2.jpeg" alt="009 Plansza EN2.jpeg" onclick="window.open(this.src, '_blank')">
            <img src="010 Plansza EN3.jpeg" alt="010 Plansza EN3.jpeg" onclick="window.open(this.src, '_blank')">
            <img src="011 Plansza z bliska.jpeg" alt="011 Plansza z bliska.jpeg" onclick="window.open(this.src, '_blank')">
            <img src="012 Przewodnik gry.jpeg" alt="012 Przewodnik gry.jpeg" onclick="window.open(this.src, '_blank')">
            <img src="013 Pudełko logo.jpeg" alt="013 Pudełko logo.jpeg" onclick="window.open(this.src, '_blank')">
            <img src="014 Pudełko w środku.jpeg" alt="014 Pudełko w środku.jpeg" onclick="window.open(this.src, '_blank')">
            <img src="015 Pudełko zniszczone.jpeg" alt="015 Pudełko zniszczone.jpeg" onclick="window.open(this.src, '_blank')">
            <img src="016 Wszystko EN.jpeg" alt="016 Wszystko EN.jpeg" onclick="window.open(this.src, '_blank')">
            <img src="017 Wszystko EN0.jpeg" alt="017 Wszystko EN0.jpeg" onclick="window.open(this.src, '_blank')">
            <img src="018 Wszystko EN2.jpeg" alt="018 Wszystko EN2.jpeg" onclick="window.open(this.src, '_blank')">
            <img src="019 Wszystko EN3.jpeg" alt="019 Wszystko EN3.jpeg" onclick="window.open(this.src, '_blank')">
            <img src="020 Wszystko1.jpeg" alt="020 Wszystko1.jpeg" onclick="window.open(this.src, '_blank')">
            			
			<&ZNAK.UNICODE(34)&>
			
          </div>
        </body>
      </html>
    `);
    return win;
  }
