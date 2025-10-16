let getallen = [];

for(let i = 0; i < 5; i++) {
    let getal = parseInt(prompt(`Geef getal ${i + 1} in:`))
    if(getal > 10){
        getallen.push(getal);
    }
}
console.log(getallen);