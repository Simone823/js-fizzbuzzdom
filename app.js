
// Dichiaro una variabile numbers con valore 1
let numbers = 1;
console.log(numbers);


// Elemento ul wrapper html
const wrapperLi = document.querySelector("ul.wrapper");
console.log(wrapperLi);


// Ciclo generazione numeri da 1 a 100
for (numbers = 1; numbers < 101; numbers++){


    // Creo una lista all'interno di ul wrapper
    const lista = `<li class="square-${numbers} square_xs fw-bold bkg-turquoise">${numbers}</li>`;
    wrapperLi.innerHTML += lista;
    console.log(lista);
}


