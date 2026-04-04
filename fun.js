let score = JSON.parse(localStorage.getItem("score"));

if (score === null) {

  score = {
    win: 0,
    loss: 0,
    tie: 0,
    totalPlay: 0,

  };

}



let scorePara = document.querySelector('.js-score-para');

scorePara.innerText = 'Play game !! ';

let resultPara = document.querySelector('.js-result-para');

resultPara.innerText = '';



function resetScore() {

  score.loss = 0;
  score.tie = 0;
  score.win = 0;
  score.totalPlay = 0;
  localStorage.removeItem('score');
  scorePara.innerText = `win : ${score.win} , Loss : ${score.loss} ,tie : ${score.tie} ,`;
  resultPara.innerText = '';

}



function computerSelect() {

  let nump = Math.random();
  let computerSelectp = '';


  if (nump >= 0 && nump < 1 / 3) {

    computerSelectp = 'Rock';

  } else if (nump >= 1 / 3 && nump < 2 / 3) {

    computerSelectp = 'paper';

  } else if (nump >= 2 / 3 && nump <= 1) {

    computerSelectp = 'Sessior';

  }

  return computerSelectp;


}



// result compare function 

function compare(playerMove) {

  let computerMove = computerSelect();
  let result = '';



  if (playerMove === 'Sessior') {

    if (computerMove === 'Sessior') {

      result = 'tie';

    } else if (computerMove === 'paper') {

      result = 'You win';
    } else {
      result = 'You lose';

    }



  }


  if (playerMove === 'paper') {

    if (computerMove === 'paper') {

      result = 'tie';

    } else if (computerMove === 'Rock') {

      result = 'You win';
    } else {
      result = 'You lose';

    }



  }

  if (playerMove === 'Rock') {

    if (computerMove === 'Rock') {

      result = 'tie';

    } else if (computerMove === 'Sessior') {

      result = 'You win';
    } else {
      result = 'You lose';

    }



  }




  // score setup 

  if (result === 'You win') {

    score.win += 1;
  } else if (result === 'You lose') {
    score.loss += 1;
  } else if (result === 'tie') {
    score.tie += 1;
  }


  score.totalPlay += 1;



  localStorage.setItem("score", JSON.stringify(score));


  scorePara.innerText = `win : ${score.win} , Loss : ${score.loss} ,tie : ${score.tie} ,`;
  resultPara.innerText = `player Move : ${playerMove} ,kingMove : ${computerMove} , result : ${result}`;


}





