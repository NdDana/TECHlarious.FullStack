const MonHealth = document.getElementById("MonHealth");
const YourHeath = document.getElementById("YourHealth");
const battleLog = document.getElementById("battleLog");

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
function attack(event){
  event.preventDefault();
  let num1 = randomNumber(3,9);
  let num2 = randomNumber(3,9);
  const yourhealth = parseInt(YourHealth.style.width);
  const monhealth = parseInt(MonHealth.style.width);
  YourHealth.style.width = ((yourhealth - num1) +"%");
  MonHealth.style.width = ((monhealth - num2)+"%");
  document.getElementById("MonBattleLog").innerHTML += "Monster attacks and deals" +num1;
  document.getElementById("YourBattleLog").innerHTML += "You attack and deal" +num2;
  if(YourHeath.style.width==="0%" && MonHealth.style.width === "0%") {
    document.getElementById("MonBattleLog").innerHTML = "It's a draw!!";
  }
  else if(YourHeath.style.width === "0%" ) {
    document.getElementById("MonBattleLog").innerHTML = "You Lose!";
  }
  else if(MonHealth.style.width === "0%"){
    document.getElementById("MonBattleLog").innerHTML = "You Win!";
  }
};

function specialAttack(event){
  event.preventDefault();
  const yourhealth = parseInt(YourHealth.style.width);
  const monhealth = parseInt(MonHealth.style.width);
  if(yourhealth < (monhealth -20)) {
    let num = randomNumber(35,45);
    MonHealth.style.width = ((monhealth - num) + "%");
    document.getElementById("MonBattleLog").innerHTML= "You attack and deal " + num + "\n" + document.getElementById("MonBattleLog").innerHTML;
  }
};

function heal(){
  var heal=0;
  const yourhealth = parseInt(YourHealth.style.width);
  if((yourhealth<100)&&(heal<3)){
    let num = randomNumber(15,20);
    YourHeath.style.width = ((yourhealth + num) +"%");
    document.getElementById("MonBattleLog").innerHTML = "You heal by" +num+ "\n" + document.getElementById("MonBattleLog").innerHTML;
  }
}

function giveUp(){
  document.getElementById("MonBattleLog").innerHTML = "You Lose!";
  MonHealth.style.width = (100 +"%");
  YourHeath.style.width = (100 + "%");
}