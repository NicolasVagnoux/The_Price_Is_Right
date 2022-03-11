// const userName = prompt("What's your name ?");
// console.log(`${userName} is playing !`);

// console.log("Generating Random Number...");
// console.log("Try to find the correct number !");

// let userNumber = "";
// let n = 0;
// function price() {
//     while (userNumber !== random) {
//         if(userNumber < random) {
//             userNumber = parseInt(prompt("It's more !! Type a number between 1 and 100"));
//         }
//         else if(userNumber > random) {
//             userNumber = parseInt(prompt("It's less !! Type a number between 1 and 100"));
//         };
//         n++;
//     };
// }

// if(userNumber === random) {
//     console.warn(`${userName} wins in ${n} tries ! The right number was ${random} !`)
//     alert(`${userName} wins in ${n} tries ! The right number was ${random} !`);
// }

//---------------------------------------------------//
let random = Math.floor(Math.random()*100)+1; //Nombre aléatoire
const form = document.querySelector('form'); //Formulaire
const nbrInput = document.querySelector('#input_number'); //Zone de texte formulaire
const hint = document.querySelector('.hint'); //Phrase indice
const victory = document.querySelector('.victoire'); //Section victoire
const result = document.querySelector('#nbr'); //Zone résultat
const replay = document.querySelector('#replay'); //Bouton replay

form.onsubmit = function (event) {
    event.preventDefault();
    if(nbrInput.value < random) {
        hint.innerHTML = "C'est plus !!";
        nbrInput.value = "";
    }
    else if(nbrInput.value > random) {
        hint.innerHTML = "C'est moins !!";
        nbrInput.value = "";
    }
    else if(nbrInput.value == random) {
        hint.innerHTML = "Correct !";
        nbrInput.value = "";
        victory.classList.toggle('victoire2');
        result.innerHTML = random;
    };
        
}

replay.onclick = function(event) {
    event.preventDefault();
    random = Math.floor(Math.random()*100)+1;
    nbrInput.value = "";
    victory.classList.toggle('victoire2');
}


