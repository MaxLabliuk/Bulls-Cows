let getNum = function() {
  number = [];

  while (number.length < 4) {
    let newNum = Math.round(Math.random() * 8) + 1;
    if (number.indexOf(newNum) < 0) {
      number.push(newNum);
    }
  }
  return number;
}

let generatedNumber = getNum();

let guess = function () {
  let playersNumber = document.querySelector('#input').value;
  if (playersNumber.length > 4) {
    let wrong = document.querySelector('.wrong-input');
    wrong.style.visibility= 'visible';
    return undefined;
  }
  let arr = [];
  console.log(arr)
  for (let i = 0; i < 4; i++) {
    let newUserArr = parseInt(playersNumber.substr(i, 1));
    arr.push(newUserArr);
  }
  BullsandCows(arr);
};

let BullsandCows = function (enteredNumber) {
  const score = {
    bulls: 0,
    cows: 0,
  };

  let turns = parseInt(document.querySelector('.turns').innerHTML);


  if ([...new Set(enteredNumber)].length !== 4 || !enteredNumber) {
    let wrong = document.querySelector('.wrong-input');
    wrong.style.visibility= 'visible';
    return undefined;
  } else {
    let wrong = document.querySelector('.wrong-input');
    wrong.style.visibility= 'hidden';
  }

  for (let i = 0; i < 4; i++) {
    if (enteredNumber[i] === generatedNumber[i]) {
      score.bulls++;
    } else if (generatedNumber.includes(enteredNumber[i])) {
      score.cows++;
    }
  }
  turns--;
  document.querySelector('.turns').innerHTML = turns;

    if (turns === 0 || score.bulls === 4) {
    let status = 'lose';
    if (score.bulls == 4) {
      status = 'win';
    }
    endGame(status, turns, generatedNumber);
  }
  writeTurn(enteredNumber, generatedNumber, score)
};

let writeTurn = function(enteredNumber,generatedNumber, score) {
  let table = document.querySelector('.hello');
  let newLine = document.createElement('p');
  newLine.innerHTML = `${enteredNumber.join('')}-bulls: ${score.bulls}; cows: ${score.cows};`
  table.appendChild(newLine);
}

let endGame = function(status, turns, generatedNumber) {
  document.querySelector('.number').innerHTML = generatedNumber;
  alert('You ' + status + '\r\nGuessed number is: ' + generatedNumber.join(''));
  window.location.reload();
};
console.log(generatedNumber);