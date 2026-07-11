$(document).ready(function () {
  function getFieldColor(val) {
    const n = parseInt(val, 10);
    if (isNaN(n)) return '';
    if (n === 0) return 'gray';
    if (n >= 1 && n <= 15) return '#d9e6ef';
    if (n === 16 || n === 31 || n === 46) return '#bb7caf';
    if (n >= 17 && n <= 30) return '#d3e3b0';
    if (n >= 32 && n <= 45) return '#ffeec4';
    if (n >= 47 && n <= 60) return '#f9def1';
    if (n === 61) return '#a2498f';
    return '';
  }

  function formatField(state) {
    if (!state.id) return state.text;
    const color = getFieldColor(state.id);
    const textColor = (state.id === "00" || (parseInt(state.id) >= 16 && parseInt(state.id) <= 61)) ? 'black' : 'rgb(64, 27, 122)';
    // Use inline-block to ensure background-color is rendered
    return $('<span style="background-color: ' + color + '; color: ' + textColor + '; display: inline-block; width: 100%; border-radius: 2px; padding: 0 4px;">' + state.text + '</span>');
  }

  $('#pola_planszy').select2({
    templateResult: formatField,
    templateSelection: formatField
  });

  $('#pola_planszy').on('change', function () {
    const val = $(this).val();
    
    // Apply background color to the selection container itself
    const color = getFieldColor(val);
    const $selection = $(this).next('.select2-container').find('.select2-selection--single');
    if (color) {
      $selection.css('background-color', color);
    } else {
      $selection.css('background-color', '');
    }

    if (typeof window.triggerFieldAction === 'function') {
      window.triggerFieldAction(val);
    }
  });

  // Restoring the forced compact height
  setTimeout(function () {
    const $container = $('#pola_planszy').next('.select2-container');

    $container.find('.select2-selection--single').attr('style',
      'height:18px !important; line-height:18px !important; padding:0 0px !important; display: flex !important; align-items: center !important;');

    $container.find('.select2-selection__rendered').attr('style',
      'line-height:18px !important; padding:0 0px !important; width: 100% !important;');

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

$(document).ready(function () {
  $('#dobre_przekonanie').select2();

  setTimeout(function () {
    const $container = $('#dobre_przekonanie').next('.select2-container');

    $container.find('.select2-selection--single').attr('style',
      'height:18px !important; line-height:18px !important; padding:0 0px !important; background: radial-gradient(circle, #ffffff 0%, #93CDEA 100%) !important;');

    $container.find('.select2-selection__rendered').attr('style',
      'line-height:18px !important; padding:0 0px !important; color: #000000 !important;');

    $container.find('.select2-selection__arrow').attr('style',
      'height:18px !important; top:0 !important;');
  }, 0);
});
