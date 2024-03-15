document.addEventListener('DOMContentLoaded', function() {
  var toggleFormatting = document.getElementById('toggleFormatting');

  // Загрузка сохраненного состояния переключателя при открытии меню
  chrome.storage.local.get('formattingEnabled', function(data) {
    toggleFormatting.checked = data.formattingEnabled || false;
  });

  toggleFormatting.addEventListener('change', function() {
    // Сохранение состояния переключателя в хранилище браузера
    chrome.storage.local.set({ 'formattingEnabled': toggleFormatting.checked });

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {toggleFormatting: toggleFormatting.checked});
    });
  });
});
