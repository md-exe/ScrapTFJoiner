// content.js

// Функция для изменения содержимого названия раздачи
function modifySubtitle() {
  var subtitleDiv = document.querySelector('.subtitle');
  if (subtitleDiv) {
    subtitleDiv.textContent = 'TITLE';
  }
}

// Функция для изменения содержимого текста раздачи
function modifyRaffleMessage() {
  var raffleMessageDiv = document.querySelector('.raffle-message');
  if (raffleMessageDiv) {
    raffleMessageDiv.textContent = 'MESSAGE';
  }
}

// Функция для удаления текста входа на раздачу
function removeEnteredMessage() {
  var enteredMessageDiv = document.querySelector('.raffle-message.raffle-entered-msg');
  if (enteredMessageDiv) {
    enteredMessageDiv.remove();
  }
}

// Функции для удаления опросников
function removePollQuestion() {
  var pollQuestionDiv = document.querySelector('.poll-question');
  if (pollQuestionDiv) {
    pollQuestionDiv.remove();
  }
}
function removePollForm() {
  var pollFormDiv = document.querySelector('.poll-form');
  if (pollFormDiv) {
    pollFormDiv.remove();
  }
}

// Функция для удаления комментариев
function removeRaffleComments() {
  var raffleCommentsDiv = document.querySelector('.raffle-comments');
  if (raffleCommentsDiv) {
    raffleCommentsDiv.remove();
  }
}

// Функция для удаления заголовков
function removeHFour() {
  var hFourDiv = document.querySelector('h4');
  if (hFourDiv) {
    hFourDiv.remove();
  }
}

// Функция для удаления участников раздачи
function removeRufflePeople() {
  var rufflePeopleDiv = document.querySelector('#raffle-entry-list');
  if (rufflePeopleDiv) {
    rufflePeopleDiv.remove();
  }
}

// Функция для удаления верхнего промежутка
function removeRuffleSpace() {
  var ruffleSpaceDiv = document.querySelector('#raffles-lb');
  if (ruffleSpaceDiv) {
    ruffleSpaceDiv.remove();
  }
}

// Функция для удаления блока с названием раздачи
function removeRuffleNameBlock() {
  var ruffleNameBlockDiv = document.querySelector('.breadcrumb.raffle-well.raffle-bread');
  if (ruffleNameBlockDiv) {
    ruffleNameBlockDiv.remove();
  }
}

// Функция переключения css изменений
function toggleVisualStyles(enabled) {
  if (enabled) {
    var existingStyle = document.getElementById('customStyles');
    if (!existingStyle) {
      var style = document.createElement('style');
      style.textContent = `
        .btn.btn-embossed.btn-info.btn-lg {
          font-size: 40px;
        }
        .auction-well .subtitle, .raffle-well .subtitle {
          margin-top: 0px;
          margin-bottom: 0px;
        }
        .btn-lg, .btn-group-lg>.btn {
          font-size: 40px;
        }
      `;
      style.id = 'customStyles';
      document.head.appendChild(style);
    }
  } else {
    var style = document.getElementById('customStyles');
    if (style) {
      style.remove();
    }
  }
}

// Попытка в переключение расширения
function toggleExtension(enabled) {
  if (enabled) {
    modifySubtitle();
    modifyRaffleMessage();
    removeEnteredMessage();
    removePollQuestion();
    removePollForm();
    removeRaffleComments();
    removeHFour();
	removeHFour();
	removeHFour();
    removeRufflePeople();
    removeRuffleSpace();
    removeRuffleNameBlock();
    toggleVisualStyles(true);
  } else {
    toggleVisualStyles(false);
  }
}

toggleExtension(true);

// Получение состояния расширения от popup.js и соответствующее применение/отключение изменений
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.toggleFormatting !== undefined) {
    toggleExtension(request.toggleFormatting);
  }
});
