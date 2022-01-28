let content = "";
let disheSelected = 0;
let drinkSelected = 0;
let dessertSelected = 0;

function selectDishe(x) {
    disheSelected = 1;
    if (x === 1) {
        deselectDishe2();
        deselectDishe3();
        selectDishe1();
    } else if (x === 2) {
        deselectDishe1();
        deselectDishe3();
        selectDishe2();
    } else if (x === 3) {
        deselectDishe1();
        deselectDishe2();
        selectDishe3();    
    } else {
        alert("ERRO! function selectDishe()");
    }
}



// Select / Deselect    DISHE 1
function selectDishe1() {
    content = document.querySelector(".dishe:nth-child(1)");
    content.classList.remove("item-not-selected");
    content = document.querySelector(".dishe:nth-child(1) .checkmark-circle");
    content.classList.remove("hidden");
}
function deselectDishe1(){
    content = document.querySelector(".dishe:nth-child(1)");
    content.classList.add("item-not-selected");
    content = document.querySelector(".dishe:nth-child(1) .checkmark-circle");
    content.classList.add("hidden");
}

// Select / Deselect    DISHE 2
function selectDishe2(){
    content = document.querySelector(".dishe:nth-child(2)"); ``
    content.classList.remove("item-not-selected");
    content = document.querySelector(".dishe:nth-child(2) .checkmark-circle");
    content.classList.remove("hidden");
}
function deselectDishe2(){
    content = document.querySelector(".dishe:nth-child(2)");
    content.classList.add("item-not-selected");
    content = document.querySelector(".dishe:nth-child(2) .checkmark-circle");
    content.classList.add("hidden");
}

// Select / Deselect    DISHE 3
function selectDishe3(){
    content = document.querySelector(".dishe:nth-child(3)");
    content.classList.remove("item-not-selected");
    content = document.querySelector(".dishe:nth-child(3) .checkmark-circle");
    content.classList.remove("hidden");
}
function deselectDishe3(){
    content = document.querySelector(".dishe:nth-child(3)");
    content.classList.add("item-not-selected");
    content = document.querySelector(".dishe:nth-child(3) .checkmark-circle");
    content.classList.add("hidden");
}




function selectDrink() { }
function selectDessert() { }