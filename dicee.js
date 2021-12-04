//Generates random number 1 to 6
const randOne = Math.floor(Math.random() * 6) + 1;
const randTwo = Math.floor(Math.random() * 6) + 1;

//Generates the images from dice1 to dice6
const diceImgOne = 'images/dice' + randOne + '.png';
const diceImgTwo = 'images/dice' + randTwo + '.png';

document.querySelectorAll('img')[0].setAttribute('src',diceImgOne);
document.querySelectorAll('img')[1].setAttribute('src',diceImgTwo);

//Inputs Text on h1
if (randOne > randTwo){
  document.querySelector('h1').innerHTML = "🙈Player 1 WINS🙉";
}
else if (randTwo > randOne){
  document.querySelector('h1').innerHTML = "🙀Player 2 WINS🙀";
}
else{
  document.querySelector('h1').innerHTML = "💩It's a TIE💩";
}
