// Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.

// Allerta di benvenuto
alert ("WELCOME TO MY FAST FOOD!")

// Definisce il nome del burger a seconda della scelta dell'utente
var nameBurger = prompt("What's the name of your burger?");
document.getElementById("name_burger").value = nameBurger;

// Array che contiene ingredienti e prezzi
var ingredients = [
    ['cheese', '2'],
    ['tomato', '1'],
    ['egg', '2.50'],
    ['lettuce', '1'],
    ['mustard', '0.50'],
    ['ketchup', '0.50']
];

// Array che contiene le stringhe per gli sconti
var discount = [
'LebronJames', 
'CarmeloAnthony', 
'StephCurry', 
'KevinDurant', 
'KyrieIrving', 
'JaysonTatum', 
'DameLillard', 
'KawhiLeonard', 
'PaulGeorge', 
'JoelEmbiid'
];

/**
 * ### Calcola il prezzo del burger (sconto compreso)
 * @param {*}  
 * @returns ritorna il prezzo finale del burger
 */
function calculatePrice() {
    var burger = 11;

    for (var i = 0; i < ingredients.length; i++){
        if (document.getElementById(ingredients[i][0]).checked) {
            burger += Number(ingredients[i][1]);
        }
    }

    var discountEl = document.getElementById("discount").value;

    for (var i = 0; i < discount.length; i++) {
        if (discountEl == discount[i]) {
            burger -= burger * 0.2;
        }
    }
    
    burger = burger.toFixed(2);
    document.getElementById("finalprice").innerHTML = burger + " €";
}

// Genera il prezzo finale cliccando il bottone
var calculate = document.getElementById("calculate");
calculate.addEventListener('click', calculatePrice);