import { showHelp, isEvenNumber } from "./show-help.js";

const userNumberInput = document.querySelector(".upload-number__input"); // инпут для ввода числа
const countAttempt = document.querySelector(".count-attempt__count"); // количество попыток
const userNumber =  document.querySelector('.user-number__number');
const helpText = document.querySelector('.help__text'); // подказки
const helpTextMore =  document.querySelector('.help__text-more'); // еще подсказки

let secretNumber; // число от компьютера
let attempts = 0; // количество попыток
// изначальный диапазон чисел
let minRange = 1; 
let maxRange = 100;

// функция дл прибавления количества попыток
const getCountAttempts = () => { 
  return attempts = attempts += 1;
}

// функция для получения случайного числа из интервала
const generateRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

// функция дл установки нового значения интервала
const setRange = () => {
  minRange = Number(document.querySelector('.range__input-min').value);
  maxRange = Number(document.querySelector('.range__input-max').value);

  if (isNaN(minRange) || isNaN(maxRange) || minRange >= maxRange) {
    helpText.textContent = 'Пожалуйста, введите корректный диапазон чисел.';
  }
}

// начать новую игру
const startNewGame = () => {
  setRange(); //устанавливаем диапазон
  secretNumber = generateRandomNumber(minRange, maxRange); // получаем случаное число от компьютера в заданном диапазоне
  attempts = 0; // изначальное количество попыток = 0
  userNumber.textContent = ''; // очищаем поле с числом пользователя
  countAttempt.textContent = ''; // очищаем поле с количеством попыток
  helpText.textContent = ''; // очищаем поле с подсказками(больше или меньше)
  helpTextMore.textContent = ''; // очищаем поле с подсказками(четное нечетное)
}

const checkGuess = () => { // проверить число
  const userNumber = userNumberInput.value; // получаем число от пользователя
  userNumberInput.value = ""; // очищаем инпут для ввода
  showHelp(secretNumber, userNumber, minRange, maxRange); // показываем подсказки
  getCountAttempts(); // прибавляем количество попыток
  countAttempt.textContent = attempts; // отображаем количество попыток на странице
  if (attempts > 2) {
    isEvenNumber(secretNumber);
    if (secretNumber == Number(userNumber)) {
      helpTextMore.innerText = '';
    } 
  } 
}

// Начать новую игру при загрузке страницы
startNewGame();

// устанавливаем новый диапазон при нажатии на кнопку "готово"
document.querySelector('.range__button').addEventListener('click', function() {
  setRange();
}); 

// очищаем все поля, обновляем все попытки и получаем новое случайное число в диапазоне при нажатии на кнопку "Новая игра"
document.querySelector('.new-game-button').addEventListener('click', function() {
  startNewGame();
});

// проверяем предложенное число при нажатии на кнопку "проверить"
document.querySelector('.upload-number__button').addEventListener('click', function() {
  checkGuess();
});
