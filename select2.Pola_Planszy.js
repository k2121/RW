
$(document).ready(function () {
  // Inicjalizacja select2 (jeśli jeszcze nie ma)
  $('#pola_planszy').select2();

  // Timeout pozwala Select2 wygenerować DOM
  setTimeout(function () {
    const container = $('#pola_planszy').next('.select2-container');
    container.find('.select2-selection--single').css({
      'height': '18px',
      'line-height': '18px',
      'padding': '0 0px'
    });

    container.find('.select2-selection__rendered').css({
      'line-height': '18px',
      'padding': '0 0px'
    });

    container.find('.select2-selection__arrow').css({
      'height': '18px'
    });
  }, 0);
});
