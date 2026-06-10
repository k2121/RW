function getGrupowoStyle(text, type) {
  if (type === 'przekonanie') {
    return {
      backgroundColor: '#EAC525',
      color: 'black',
      fontWeight: 'normal',
      textShadow: 'none'
    };
  }

  const lower = text.toLowerCase();
  let bg = '';
  let color = 'white';
  let fontWeight = 'bold';
  let textShadow = '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black';

  if (lower.includes('czerwona')) bg = '#ff0000';
  else if (lower.includes('pomarańczowa')) bg = '#F25E0D';
  else if (lower.includes('żółta')) bg = '#ffff4d';
  else if (lower.includes('zielona')) bg = '#1c8f4d';
  else if (lower.includes('błękitna')) bg = '#0D79F2';
  else if (lower.includes('indygo')) bg = '#19005B';
  else if (lower.includes('fioletowa')) bg = '#8000ff';
  else {
    bg = '#EAC525';
    color = 'black';
    fontWeight = 'normal';
    textShadow = 'none';
  }

  return {
    backgroundColor: bg,
    color: color,
    fontWeight: fontWeight,
    textShadow: textShadow
  };
}

function formatGrupowo(state, isSelection = false) {
  if (!state.id) return state.text;
  const $element = $(state.element);
  const isBlokada = ($element.length && $element.closest('select').attr('id') === 'pola_blokada_energii') || 
                    (state.id.toLowerCase().includes('czakra') || state.id.toLowerCase().includes('czerwona') || state.id.toLowerCase().includes('pomarańczowa') || state.id.toLowerCase().includes('żółta') || state.id.toLowerCase().includes('zielona') || state.id.toLowerCase().includes('błękitna') || state.id.toLowerCase().includes('indygo') || state.id.toLowerCase().includes('fioletowa'));
  
  const type = isBlokada ? 'blokada' : 'przekonanie';
  const style = getGrupowoStyle(state.text, type);
  
  let text = state.text;
  let extraStyle = '';
  
  if (isSelection) {
    // Weź tylko pierwszą linię (jeśli są \n)
    text = text.split('\n')[0];
    // Wymuś brak zawijania i elipsę dla bezpieczeństwa
    extraStyle = 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
  }
  
  return $('<span style="background-color: ' + style.backgroundColor + '; color: ' + style.color + '; font-weight: ' + style.fontWeight + '; text-shadow: ' + style.textShadow + '; display: inline-block; width: 100%; border-radius: 2px; padding: 0 4px; box-sizing: border-box; ' + extraStyle + '">' + text + '</span>');
}

window.initGrupowoSelect2 = function() {
  $('#pola_przekonanie, #pola_blokada_energii').each(function () {
    const $select = $(this);
    
    // Jeśli już zainicjalizowany, zniszcz i zainicjalizuj ponownie (żeby odświeżyć opcje)
    if ($select.data('select2')) {
      $select.select2('destroy');
    }

    $select.select2({
      templateResult: function(state) { return formatGrupowo(state, false); },
      templateSelection: function(state) { return formatGrupowo(state, true); },
      width: '100%'
    });

    $select.off('change.grupowo').on('change.grupowo', function () {
      const val = $(this).val();
      const text = $(this).find('option:selected').text();
      const isBlokada = $select.attr('id') === 'pola_blokada_energii';
      const type = isBlokada ? 'blokada' : 'przekonanie';
      const style = getGrupowoStyle(text, type);
      const $selection = $(this).next('.select2-container').find('.select2-selection--single');
      
      if (val) {
        $selection.css({
          'background-color': style.backgroundColor,
          'color': style.color,
          'font-weight': style.fontWeight,
          'text-shadow': style.textShadow
        });
      } else {
        $selection.css({
          'background-color': '',
          'color': '',
          'font-weight': '',
          'text-shadow': ''
        });
      }
    });

    // Kompaktowa wysokość
    const $container = $select.next('.select2-container');
    $container.find('.select2-selection--single').attr('style', function(i, s) {
      return (s || '') + 'height:18px !important; line-height:18px !important; padding:0 !important; display: flex !important; align-items: center !important;';
    });
    $container.find('.select2-selection__rendered').attr('style', function(i, s) {
      return (s || '') + 'line-height:18px !important; padding:0 !important; width: 100% !important;';
    });
    $container.find('.select2-selection__arrow').attr('style', function(i, s) {
      return (s || '') + 'height:18px !important; top:0 !important;';
    });

    // Wymuś odświeżenie kolorów na starcie
    $select.trigger('change.grupowo');
  });
};

$(document).ready(function () {
  window.initGrupowoSelect2();
});
