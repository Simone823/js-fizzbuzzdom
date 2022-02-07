
// Dichiaro una variabile numbers con valore 1
let numbers = 1;
console.log(numbers);


// Elemento ul wrapper html
const wrapperLi = document.querySelector("ul.wrapper");
console.log(wrapperLi);


// Ciclo generazione numeri da 1 a 100
for (numbers = 1; numbers < 101; numbers++){

    
    // Creo una lista all'interno di ul wrapper
    const listaLi = document.createElement("li");

    // Aggiungo delle classi all'elemento li listaLi
    listaLi.classList.add("square_xs", "bkg-turquoise");
    console.dir(listaLi);

    // Aggiungo all'interno di li il numero
    listaLi.append(numbers);
    console.log(listaLi);
    
    // Aggiungo all'interno di ul wrapper, l'elemento listaLi
    wrapperLi.append(listaLi);
    
    // Se il numero è multiplo di 3
    if(numbers % 3 === 0){
        listaLi.classList.add("bkg-lime");
        let numbers = "fizz"
        listaLi.innerHTML = numbers;
    }

}


