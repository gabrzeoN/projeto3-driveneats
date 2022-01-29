let content = "";
let disheSelected = false;
let drinkSelected = false;
let dessertSelected = false;

// const dishesOptionAmount = 3;
// const drinksOptionAmount = 3;
// const dessertOptionAmount = 3;

function selectOption(typeOfFood, numberOfFood) {
    if (typeOfFood === "dishe") {
        disheSelected = true;
    } else if (typeOfFood === "drink") {
        drinkSelected = true;
    } else if (typeOfFood === "dessert") {
        dessertSelected = true;
    } else {

    }

    deselectAll(typeOfFood);
    select(typeOfFood, numberOfFood);
}

function select(typeOfFood, numberOfFood){
    content = document.querySelector("." + typeOfFood + ":nth-child(" + numberOfFood + ")");
    content.classList.remove("item-not-selected");
    content = document.querySelector("." + typeOfFood + ":nth-child(" + numberOfFood + ")" + " .checkmark-circle");
    content.classList.remove("hidden");
}

function deselectAll(typeOfFood) {
    content = document.querySelector("." + typeOfFood + ":nth-child(1)");
    content.classList.add("item-not-selected");
    content = document.querySelector("."+typeOfFood+":nth-child(1)" + " .checkmark-circle");
    content.classList.add("hidden");
    content = document.querySelector("." + typeOfFood + ":nth-child(2)");
    content.classList.add("item-not-selected");
    content = document.querySelector("."+typeOfFood+":nth-child(2)" + " .checkmark-circle");
    content.classList.add("hidden");
    content = document.querySelector("." + typeOfFood + ":nth-child(3)");
    content.classList.add("item-not-selected");
    content = document.querySelector("." + typeOfFood + ":nth-child(3)" + " .checkmark-circle");
    content.classList.add("hidden");
}









// function selectDishe(x) {
//     disheSelected = 1;
//     if (x === 1) {
//         // deselectDishe2();
//         // deselectDishe3();
//         selectDishe1();
//     } else if (x === 2) {
//         // deselectDishe1();
//         // deselectDishe3();
//         selectDishe2();
//     } else if (x === 3) {
//         // deselectDishe1();
//         // deselectDishe2();
//         selectDishe3();
//     } else {
//         alert("ERRO! function selectDishe()");
//     }
// }



// // Select / Deselect    DISHE 1
// function selectDishe1() {
//     content = document.querySelector(".dishe:nth-child(1)");
//     content.classList.remove("item-not-selected");
//     content = document.querySelector(".dishe:nth-child(1) .checkmark-circle");
//     content.classList.remove("hidden");
// }
// function deselectDishe1(){
//     content = document.querySelector(".dishe:nth-child(1)");
//     content.classList.add("item-not-selected");
//     content = document.querySelector(".dishe:nth-child(1) .checkmark-circle");
//     content.classList.add("hidden");
// }

// // Select / Deselect    DISHE 2
// function selectDishe2(){
//     content = document.querySelector(".dishe:nth-child(2)"); ``
//     content.classList.remove("item-not-selected");
//     content = document.querySelector(".dishe:nth-child(2) .checkmark-circle");
//     content.classList.remove("hidden");
// }
// function deselectDishe2(){
//     content = document.querySelector(".dishe:nth-child(2)");
//     content.classList.add("item-not-selected");
//     content = document.querySelector(".dishe:nth-child(2) .checkmark-circle");
//     content.classList.add("hidden");
// }

// // Select / Deselect    DISHE 3
// function selectDishe3(){
//     content = document.querySelector(".dishe:nth-child(3)");
//     content.classList.remove("item-not-selected");
//     content = document.querySelector(".dishe:nth-child(3) .checkmark-circle");
//     content.classList.remove("hidden");
// }
// function deselectDishe3(){
//     content = document.querySelector(".dishe:nth-child(3)");
//     content.classList.add("item-not-selected");
//     content = document.querySelector(".dishe:nth-child(3) .checkmark-circle");
//     content.classList.add("hidden");
// }




// // function selectDrink() { }
// // function selectDessert() { }