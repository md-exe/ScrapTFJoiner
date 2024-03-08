// content.js
// Функция для изменения содержимого div с классом "subtitle"
function modifySubtitle() {
  var subtitleDiv = document.querySelector('.subtitle');
  if (subtitleDiv) {
    subtitleDiv.textContent = 'Title';
  }
}

// Функция для изменения содержимого div с классом "raffle-message"
function modifyRaffleMessage() {
  var raffleMessageDiv = document.querySelector('.raffle-message');
  if (raffleMessageDiv) {
    raffleMessageDiv.textContent = 'Message';
  }
}

// Функция для удаления div с классом "raffle-message raffle-entered-msg"
function removeEnteredMessage() {
  var enteredMessageDiv = document.querySelector('.raffle-message.raffle-entered-msg');
  if (enteredMessageDiv) {
    enteredMessageDiv.remove();
  }
}

// Функция для удаления div с классом "raffle-message raffle-entered-msg"
function removePollQuestion() {
  var pollQuestionDiv = document.querySelector('.poll-question');
  if (pollQuestionDiv) {
    pollQuestionDiv.remove();
  }
}

// Функция для удаления div с классом "raffle-message raffle-entered-msg"
function removePollForm() {
  var pollFormDiv = document.querySelector('.poll-form');
  if (pollFormDiv) {
    pollFormDiv.remove();
  }
}

// Вызов функций для изменения содержимого
modifySubtitle();
modifyRaffleMessage();
removeEnteredMessage();
removePollQuestion();
removePollForm();