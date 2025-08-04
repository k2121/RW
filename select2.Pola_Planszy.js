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
