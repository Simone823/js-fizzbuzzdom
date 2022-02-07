
// Dichiaro una variabile numbers con valore 1
let numbers = 1;
console.log(numbers);

// Ciclo generazione numeri da 1 a 100
for (numbers = 1; numbers < 101; numbers++){

    const wrapperLi = document.querySelector(".wrapper");
    console.log(wrapperLi);
    const lista = `<li class="square-${numbers} square_xs fw-bold bkg-turquoise">${numbers}</li>`;
    console.log(lista);
    wrapperLi.innerHTML += lista;

}


