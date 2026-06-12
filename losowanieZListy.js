
    $(document).ready(function() {
      // Inicjalizacja Select2
      $('#pola_zdarzenie').select2();
    });

    function randomSelectZdarzenie() {
      // Pobierz wszystkie opcje
      const options = $('#pola_zdarzenie option');
      // Wylosuj indeks
      const randomIndex = Math.floor(Math.random() * options.length);
      // Pobierz wartość losowej opcji
      const randomValue = options.eq(randomIndex).val();
      // Ustaw wybraną wartość
      $('#pola_zdarzenie').val(randomValue).trigger('change');
    }


    $(document).ready(function() {
      // Inicjalizacja Select2
      $('#pola_kontekst').select2();
    });

    function randomSelectKontekst() {
      // Pobierz wszystkie opcje
      const options = $('#pola_kontekst option');
      // Wylosuj indeks
      const randomIndex = Math.floor(Math.random() * options.length);
      // Pobierz wartość losowej opcji
      const randomValue = options.eq(randomIndex).val();
      // Ustaw wybraną wartość
      $('#pola_kontekst').val(randomValue).trigger('change');
    }


    $(document).ready(function() {
      // Inicjalizacja Select2
      $('#karma').select2();
    });

    function randomSelectKarma() {
      // Pobierz wszystkie opcje
      const options = $('#karma option');
      // Wylosuj indeks
      const randomIndex = Math.floor(Math.random() * options.length);
      // Pobierz wartość losowej opcji
      const randomValue = options.eq(randomIndex).val();
      // Ustaw wybraną wartość
      $('#karma').val(randomValue).trigger('change');
    }

