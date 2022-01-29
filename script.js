let content = "";
let disheSelected = false;
let drinkSelected = false;
let dessertSelected = false;

let disheSelectedName = "";
let disheSelectedPrice = 0;
let drinkSelectedName = "";
let drinkSelectedPrice = 0;
let dessertSelectedName = "";
let dessertSelectedPrice = 0;

let clientName = "";
let clientAddress = "";
let message = "";

function selectOption(foodType, foodNumber, foodPrice, foodName) {
    if (foodType === "dishe") {
        disheSelected = true;
        disheSelectedName = foodName;
        disheSelectedPrice = foodPrice;
    } else if (foodType === "drink") {
        drinkSelected = true;
        drinkSelectedName = foodName;
        drinkSelectedPrice = foodPrice;
    } else if (foodType === "dessert") {
        dessertSelected = true;
        dessertSelectedName = foodName;
        dessertSelectedPrice = foodPrice;
    } else {
        return alert("ERRO! foodType entry doesn't exist.");
    }

    if(disheSelected && drinkSelected && dessertSelected){
        changeOrderButton();
    }

    deselectAll(foodType);
    select(foodType, foodNumber);
}

function select(foodType, foodNumber){
    content = document.querySelector("." + foodType + ":nth-child(" + foodNumber + ")");
    content.classList.remove("item-not-selected");
    content = document.querySelector("." + foodType + ":nth-child(" + foodNumber + ")" + " .checkmark-circle");
    content.classList.remove("hidden");
}

function deselectAll(foodType) {
    content = document.querySelector("." + foodType + ":nth-child(1)");
    content.classList.add("item-not-selected");
    content = document.querySelector("."+foodType+":nth-child(1)" + " .checkmark-circle");
    content.classList.add("hidden");
    content = document.querySelector("." + foodType + ":nth-child(2)");
    content.classList.add("item-not-selected");
    content = document.querySelector("."+foodType+":nth-child(2)" + " .checkmark-circle");
    content.classList.add("hidden");
    content = document.querySelector("." + foodType + ":nth-child(3)");
    content.classList.add("item-not-selected");
    content = document.querySelector("." + foodType + ":nth-child(3)" + " .checkmark-circle");
    content.classList.add("hidden");
}

function changeOrderButton(){
    content = document.querySelector("footer button");
    content.classList.add("green-button");

    content.innerHTML = 'Fechar pedido';
}

function closeOrder(){
    if(disheSelected && drinkSelected && dessertSelected){
        clientName = prompt("Nome do cliente: ");
        clientAddress = prompt("Endereço do cliente: ");

        message = `
        Olá, gostaria de fazer o pedido:
        - Prato: ${disheSelectedName}
        - Bebida: ${drinkSelectedName}
        - Sobremesa: ${dessertSelectedName}
        Total: R$ ${(disheSelectedPrice + drinkSelectedPrice + dessertSelectedPrice).toFixed(2)}


        Nome: ${clientName}
        Endereço: ${clientAddress}
        `
        
        window.open("https://wa.me/5544999973970?text=" + encodeURIComponent(message), "_blank");          
    }
}