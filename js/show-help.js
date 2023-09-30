//отображение подсказок

const number = document.querySelector(".user-number__number");
const help = document.querySelector(".help__text");
const helpMore = document.querySelector(".help__text-more");

const showHelp = (computerNumber, userNumber, minRange, maxRange) => {

  number.textContent = userNumber;
  if (Number(userNumber) > maxRange || Number(userNumber) < 1 || Number(userNumber) < minRange) {
    help.textContent = "Число должно быть от" + " " + minRange + " " + "до" + " " + maxRange;
  } else {
    if(computerNumber > Number(userNumber)) {
      help.textContent = "Число больше";
    } else if (computerNumber < Number(userNumber)) {
      help.textContent = "Число меньше";
    } else {
      help.textContent = "Угадал!";
    }
  }
}

const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    helpMore.textContent = "Число четное";
  } else {
    helpMore.textContent = "Число нечетное";
  }
}

export {showHelp, isEvenNumber};