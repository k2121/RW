$(document).ready(function () {
  $('#pola_planszy').select2();

  setTimeout(function () {
    const $container = $('#pola_planszy').next('.select2-container');

    // Dodaj style jako atrybut style z !important
    $container.find('.select2-selection--single').attr('style',
      'height:18px !important; line-height:18px !important; padding:0 0px !important;');

    $container.find('.select2-selection__rendered').attr('style',
      'line-height:18px !important; padding:0 0px !important;');

    $container.find('.select2-selection__arrow').attr('style',
      'height:18px !important; top:0 !important;');
  }, 0);
});


$(document).ready(function () {
  $('#pola_zdarzenie').select2();

  setTimeout(function () {
    const $container = $('#pola_zdarzenie').next('.select2-container');

    // Dodaj style jako atrybut style z !important
    $container.find('.select2-selection--single').attr('style',
      'height:18px !important; line-height:18px !important; padding:0 0px !important;');

    $container.find('.select2-selection__rendered').attr('style',
      'line-height:18px !important; padding:0 0px !important;');

    $container.find('.select2-selection__arrow').attr('style',
      'height:18px !important; top:0 !important;');
  }, 0);
});

$(document).ready(function () {
  $('#pola_kontekst').select2();

  setTimeout(function () {
    const $container = $('#pola_kontekst').next('.select2-container');

    // Dodaj style jako atrybut style z !important
    $container.find('.select2-selection--single').attr('style',
      'height:18px !important; line-height:18px !important; padding:0 0px !important;');

    $container.find('.select2-selection__rendered').attr('style',
      'line-height:18px !important; padding:0 0px !important;');

    $container.find('.select2-selection__arrow').attr('style',
      'height:18px !important; top:0 !important;');
  }, 0);
});

$(document).ready(function () {
  $('#karma').select2();

  setTimeout(function () {
    const $container = $('#karma').next('.select2-container');

    // Dodaj style jako atrybut style z !important
    $container.find('.select2-selection--single').attr('style',
      'height:18px !important; line-height:18px !important; padding:0 0px !important;');

    $container.find('.select2-selection__rendered').attr('style',
      'line-height:18px !important; padding:0 0px !important;');

    $container.find('.select2-selection__arrow').attr('style',
      'height:18px !important; top:0 !important;');
  }, 0);
});

