// content.js
// Функция для изменения содержимого div с классом "subtitle"
function modifySubtitle() {
  var subtitleDiv = document.querySelector('.subtitle');
  if (subtitleDiv) {
    subtitleDiv.textContent = 'TITLE';
  }
}

// Функция для изменения содержимого div с классом "raffle-message"
function modifyRaffleMessage() {
  var raffleMessageDiv = document.querySelector('.raffle-message');
  if (raffleMessageDiv) {
    raffleMessageDiv.textContent = 'MESSAGE';
  }
}

// Функция для удаления div с классом "raffle-message raffle-entered-msg"
function removeEnteredMessage() {
  var enteredMessageDiv = document.querySelector('.raffle-message.raffle-entered-msg');
  if (enteredMessageDiv) {
    enteredMessageDiv.remove();
  }
}

// Функция для удаления div с классом "poll-question"
function removePollQuestion() {
  var pollQuestionDiv = document.querySelector('.poll-question');
  if (pollQuestionDiv) {
    pollQuestionDiv.remove();
  }
}

// Функция для удаления div с классом "poll-form"
function removePollForm() {
  var pollFormDiv = document.querySelector('.poll-form');
  if (pollFormDiv) {
    pollFormDiv.remove();
  }
}

// Функция для удаления div с классом "raffle-comments"
function removeRaffleComments() {
  var raffleCommentsDiv = document.querySelector('.raffle-comments');
  if (raffleCommentsDiv) {
    raffleCommentsDiv.remove();
  }
}

// Функция для удаления div с классом "h4"
function removeHFour() {
  var hFourDiv = document.querySelector('h4');
  if (hFourDiv) {
    hFourDiv.remove();
  }
}

// Увеличение кнопки входа на раздачу
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
document.head.appendChild(style);

// Вызов функций для изменения содержимого
modifySubtitle();
modifyRaffleMessage();
removeEnteredMessage();
removePollQuestion();
removePollForm();
removeRaffleComments();
removeHFour();