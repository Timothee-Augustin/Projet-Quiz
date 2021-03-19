const rulesButton = document.getElementById("rules");
const answerButton = document.getElementsByClassName("answer");
let answerChoice = null;
let correctAnswer = 0;
const validButton = document.getElementById("validation");
const gain = document.getElementById("cagnotte");
let playerGain = 0;
let questionValue = 100;

rulesButton.addEventListener("click", function(){
    alert("- Vous commencez avec une cagnotte à 0 \n- En cas de bonne réponse vous gagner des wildCoins \n- Mais en cas de mauvais réponse vous perdez des wildCoins");
});


for (let i = 0; i < answerButton.length; i++){
   
    answerButton[i].addEventListener("click", function(){
        answerButton[i].style.background = "yellow";
        answerChoice = i;
        for (let j = 0; j < i; j++){
            answerButton[j].style.background = "white";
        }
        for (let j = i+1; j < answerButton.length; j++){
            answerButton[j].style.background = "white";
        }        
        }) 

};
    
validButton.addEventListener("click", function(){
    if (answerChoice === correctAnswer) {
        answerButton[answerChoice].style.background = "green";
        playerGain = playerGain + questionValue
        gain.innerHTML = `cagnotte : ${playerGain} 𝟉`
    } 
    else {
        answerButton[answerChoice].style.background = "red";
        answerButton[correctAnswer].style.background = "blue";
        playerGain = playerGain - questionValue
        gain.innerHTML = `cagnotte : ${playerGain} 𝟉`
    }
})

    

/** const validButton = document.getElementById("validation");

validButton.addEventListener('mouseover', function(){
    validButton.innerHTML = "C'est votre ultime bafouille ?";
    validButton.style.backgroundColor = "orange";
    validButton.style.color = "black"
    validButton.addEventListener('mouseleave', function() {
        validButton.innerHTML = "Valider";
        validButton.style.backgroundColor = "";
        validButton.style.color = ""
});
});
*/


