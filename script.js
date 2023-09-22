
function play(userChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    var result;
  
    if (userChoice === computerChoice) {
      result = "Ничья!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'paper') ||
      (userChoice === 'paper' && computerChoice === 'rock')
    ) {
      result = "Вы победили!";
    } else {
      result = "Вы проиграли!";
    }
  
    document.getElementById('result').innerHTML = "Вы выбрали: " + userChoice + "<br>Компьютер выбрал: " + computerChoice + "<br><br>" + result;
  }